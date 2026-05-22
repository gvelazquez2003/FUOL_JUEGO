import { readFileSync, writeFileSync } from "node:fs";

const DATA_URL = "https://raw.githubusercontent.com/ismailoksuz/EAFC26-DataHub/main/data/players.csv";
const gameSource = readFileSync(new URL("../game.js", import.meta.url), "utf8");
const aliases = {
  brighton: "brighton & hove albion",
  fulham: "fulham fc",
  atletico: "atletico madrid",
  betis: "real betis balompie",
  brest: "stade brestois 29",
  lille: "lille osc",
  rennes: "stade rennais fc",
  strasbourg: "rc strasbourg alsace",
  bayern: "fc bayern munchen",
  heidenheim: "1. fc heidenheim 1846",
  hoffenheim: "tsg 1899 hoffenheim",
  leverkusen: "bayer 04 leverkusen",
  werder: "sv werder bremen",
  verona: "hellas verona fc",
};

const clubs = [...gameSource.matchAll(/club\("([^"]+)", "([^"]+)", "[^"]+", "(eng|esp|ger|ita|fra)"/g)]
  .map((match) => ({ id: match[1], name: match[2] }));

const csv = await fetch(DATA_URL).then((response) => {
  if (!response.ok) throw new Error(`No se pudo descargar FC26 (${response.status}).`);
  return response.text();
});
const rows = parseCsv(csv);
const currentPlayers = rows.filter((row) => row.fifa_version === "26" && row.league_level === "1.0");
const byClub = Object.groupBy(currentPlayers, (row) => normalize(row.club_name));
const squads = {};

clubs.forEach((club) => {
  const players = byClub[aliases[club.id] || normalize(club.name)] || [];
  if (!players.length) throw new Error(`Falta club ${club.id}: ${club.name}.`);
  squads[club.id] = selectRoster(players).map((player) => ({
    id: `fc26-${player.player_id}`,
    name: playerName(player.short_name || player.long_name),
    pos: compactPosition(player.club_position || player.player_positions),
    positions: player.player_positions,
    age: number(player.age),
    ovr: number(player.overall),
    pace: number(player.pace),
    shooting: number(player.shooting),
    passing: number(player.passing),
    dribbling: number(player.dribbling),
    defending: number(player.defending),
    physical: number(player.physic),
  }));
});

writeFileSync(new URL("../squad-seeds.js", import.meta.url), [
  "// Generated from FC26 player data. Rebuild with `node scripts/build-squad-seeds.mjs`.",
  `window.SQUAD_SEEDS = ${JSON.stringify(squads)};`,
  "",
].join("\n"));

function selectRoster(players) {
  const pool = players.filter((player) => player.overall).sort((left, right) => number(right.overall) - number(left.overall));
  const picked = [];
  pickGroup(pool, picked, (player) => has(player, ["GK"]), 1);
  pickGroup(pool, picked, (player) => has(player, ["CB", "LB", "RB", "LWB", "RWB"]), 5);
  pickGroup(pool, picked, (player) => has(player, ["CDM", "CM", "CAM", "LM", "RM"]), 8);
  pickGroup(pool, picked, (player) => has(player, ["LW", "RW", "CF", "ST"]), 11);
  pickGroup(pool, picked, (player) => has(player, ["GK"]), 12);
  pickGroup(pool, picked, (player) => has(player, ["CB", "LB", "RB", "LWB", "RWB"]), 14);
  pickGroup(pool, picked, (player) => has(player, ["CDM", "CM", "CAM", "LM", "RM"]), 16);
  pickGroup(pool, picked, (player) => has(player, ["LW", "RW", "CF", "ST"]), 17);
  pickGroup(pool, picked, () => true, 17);
  return picked.slice(0, 17);
}

function pickGroup(pool, picked, predicate, limit) {
  pool.forEach((player) => {
    if (picked.length < limit && !picked.includes(player) && predicate(player)) picked.push(player);
  });
}

function has(player, positions) {
  return positions.some((position) => (player.player_positions || "").split(", ").includes(position));
}

function compactPosition(positionText) {
  return String(positionText || "SUB").split(",")[0].trim().replace(/^[LR]DM$/, "CDM");
}

function playerName(value) {
  const latin = String(value || "").match(/^[\p{Script=Latin}\p{Mark}\s'.-]+/u)?.[0].trim() || value;
  const parts = latin.split(/\s+/).filter(Boolean);
  return parts.length > 4 ? `${parts[0]} ${parts.at(-1)}` : latin;
}

function normalize(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9&. ]+/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function number(value) {
  return Number(value) || 0;
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];
    if (quoted && char === "\"" && next === "\"") {
      field += "\"";
      index += 1;
    } else if (char === "\"") {
      quoted = !quoted;
    } else if (!quoted && char === ",") {
      row.push(field);
      field = "";
    } else if (!quoted && (char === "\n" || char === "\r")) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(field);
      if (row.some(Boolean)) rows.push(row);
      row = [];
      field = "";
    } else {
      field += char;
    }
  }
  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }
  const headers = rows.shift();
  return rows.map((values) => Object.fromEntries(headers.map((header, index) => [header, values[index] || ""])));
}
