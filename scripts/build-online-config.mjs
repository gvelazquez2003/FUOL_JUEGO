import { copyFileSync, cpSync, mkdirSync, rmSync, writeFileSync } from "node:fs";

const config = {
  supabaseUrl: process.env.FUOL_SUPABASE_URL || "",
  supabaseAnonKey: process.env.FUOL_SUPABASE_ANON_KEY || "",
  presenceRoom: process.env.FUOL_PRESENCE_ROOM || "fuol-amigos-en-vivo",
};
const outputDirectory = "public";
const staticFiles = [
  "index.html",
  "styles.css",
  "game.js",
  "squad-seeds.js",
  "trivia.js",
];
const configSource = `window.FUOL_ONLINE_CONFIG = window.FUOL_ONLINE_CONFIG || ${JSON.stringify(config, null, 2)};\n`;

rmSync(outputDirectory, { force: true, recursive: true });
mkdirSync(outputDirectory);
staticFiles.forEach((file) => copyFileSync(file, `${outputDirectory}/${file}`));
cpSync("assets", `${outputDirectory}/assets`, { recursive: true });
writeFileSync("online-config.js", configSource);
writeFileSync(`${outputDirectory}/online-config.js`, configSource);
