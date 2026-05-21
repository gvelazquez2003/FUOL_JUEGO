const STORAGE_KEY = "fuol-carrera-pixel-v2";
const MAX_SEASONS = 15;
const CHAMPIONS_SIZE = 32;

const LEAGUES = [
  { id: "eng", name: "Inglaterra", competition: "Premier League", rounds: 38 },
  { id: "esp", name: "Espana", competition: "LALIGA EA SPORTS", rounds: 38 },
  { id: "ger", name: "Alemania", competition: "Bundesliga", rounds: 34 },
  { id: "ita", name: "Italia", competition: "Serie A", rounds: 38 },
  { id: "fra", name: "Francia", competition: "Ligue 1", rounds: 34 },
];

const CLUBS = [
  club("arsenal", "Arsenal", "ARS", "eng", 91, 4, "#ef3340", "#f7f1d2"),
  club("aston-villa", "Aston Villa", "AVL", "eng", 84, 3, "#7a274a", "#84d7eb"),
  club("bournemouth", "AFC Bournemouth", "BOU", "eng", 79, 2, "#d61f2c", "#111111"),
  club("brentford", "Brentford", "BRE", "eng", 76, 2, "#ef4444", "#f8fafc"),
  club("brighton", "Brighton", "BHA", "eng", 82, 3, "#2563eb", "#f8fafc"),
  club("burnley", "Burnley", "BUR", "eng", 68, 1, "#6b1739", "#77d5f7"),
  club("chelsea", "Chelsea", "CHE", "eng", 88, 4, "#1557d6", "#f8fafc"),
  club("crystal-palace", "Crystal Palace", "CRY", "eng", 81, 3, "#1d4ed8", "#ef4444"),
  club("everton", "Everton", "EVE", "eng", 74, 1, "#2456dc", "#f8fafc"),
  club("fulham", "Fulham", "FUL", "eng", 77, 2, "#f8fafc", "#111827"),
  club("leeds", "Leeds United", "LEE", "eng", 70, 1, "#f8fafc", "#facc15"),
  club("liverpool", "Liverpool", "LIV", "eng", 92, 4, "#c8102e", "#f8fafc"),
  club("man-city", "Manchester City", "MCI", "eng", 91, 4, "#7dd3fc", "#ffffff"),
  club("man-united", "Manchester United", "MUN", "eng", 82, 3, "#da291c", "#111827"),
  club("newcastle", "Newcastle United", "NEW", "eng", 86, 3, "#111827", "#f8fafc"),
  club("nottingham", "Nottingham Forest", "NFO", "eng", 80, 2, "#dc2626", "#f8fafc"),
  club("sunderland", "Sunderland", "SUN", "eng", 68, 1, "#dc2626", "#f8fafc"),
  club("tottenham", "Tottenham Hotspur", "TOT", "eng", 83, 3, "#f8fafc", "#172554"),
  club("west-ham", "West Ham United", "WHU", "eng", 73, 1, "#7f1d1d", "#67e8f9"),
  club("wolves", "Wolverhampton Wanderers", "WOL", "eng", 70, 1, "#f59e0b", "#111827"),

  club("alaves", "Deportivo Alaves", "ALA", "esp", 70, 1, "#2563eb", "#f8fafc"),
  club("athletic", "Athletic Club", "ATH", "esp", 84, 3, "#ef4444", "#f8fafc"),
  club("atletico", "Atletico de Madrid", "ATM", "esp", 89, 4, "#ef4444", "#f8fafc"),
  club("barcelona", "FC Barcelona", "BAR", "esp", 94, 4, "#7c2d6b", "#1d4ed8"),
  club("celta", "RC Celta", "CEL", "esp", 78, 2, "#7dd3fc", "#ef4444"),
  club("elche", "Elche CF", "ELC", "esp", 68, 1, "#f8fafc", "#16a34a"),
  club("espanyol", "RCD Espanyol", "ESP", "esp", 72, 1, "#2563eb", "#f8fafc"),
  club("getafe", "Getafe CF", "GET", "esp", 74, 2, "#1d4ed8", "#f8fafc"),
  club("girona", "Girona FC", "GIR", "esp", 78, 2, "#ef4444", "#f8fafc"),
  club("levante", "Levante UD", "LEV", "esp", 69, 1, "#1d4ed8", "#9f1239"),
  club("mallorca", "RCD Mallorca", "MLL", "esp", 75, 2, "#dc2626", "#111827"),
  club("osasuna", "CA Osasuna", "OSA", "esp", 76, 2, "#b91c1c", "#172554"),
  club("rayo", "Rayo Vallecano", "RAY", "esp", 74, 2, "#f8fafc", "#dc2626"),
  club("betis", "Real Betis", "BET", "esp", 83, 3, "#16a34a", "#f8fafc"),
  club("real-madrid", "Real Madrid", "RMA", "esp", 93, 4, "#f8fafc", "#d4af37"),
  club("real-oviedo", "Real Oviedo", "OVI", "esp", 67, 1, "#1d4ed8", "#facc15"),
  club("real-sociedad", "Real Sociedad", "RSO", "esp", 81, 3, "#2563eb", "#f8fafc"),
  club("sevilla", "Sevilla FC", "SEV", "esp", 77, 2, "#f8fafc", "#dc2626"),
  club("valencia", "Valencia CF", "VAL", "esp", 75, 2, "#f8fafc", "#111827"),
  club("villarreal", "Villarreal CF", "VIL", "esp", 85, 3, "#fde047", "#1d4ed8"),

  club("augsburg", "FC Augsburg", "FCA", "ger", 73, 2, "#dc2626", "#16a34a"),
  club("leverkusen", "Bayer Leverkusen", "B04", "ger", 88, 4, "#111827", "#dc2626"),
  club("bayern", "Bayern Munich", "FCB", "ger", 95, 4, "#dc2626", "#2563eb"),
  club("dortmund", "Borussia Dortmund", "BVB", "ger", 88, 4, "#fde047", "#111827"),
  club("monchengladbach", "Borussia Monchengladbach", "BMG", "ger", 76, 2, "#f8fafc", "#111827"),
  club("frankfurt", "Eintracht Frankfurt", "SGE", "ger", 82, 3, "#111827", "#dc2626"),
  club("freiburg", "SC Freiburg", "SCF", "ger", 79, 2, "#dc2626", "#111827"),
  club("hamburg", "Hamburger SV", "HSV", "ger", 70, 1, "#f8fafc", "#2563eb"),
  club("heidenheim", "1. FC Heidenheim", "FCH", "ger", 68, 1, "#dc2626", "#2563eb"),
  club("hoffenheim", "TSG Hoffenheim", "TSG", "ger", 77, 2, "#2563eb", "#f8fafc"),
  club("koln", "1. FC Koln", "KOE", "ger", 70, 1, "#f8fafc", "#dc2626"),
  club("leipzig", "RB Leipzig", "RBL", "ger", 86, 3, "#f8fafc", "#dc2626"),
  club("mainz", "1. FSV Mainz 05", "M05", "ger", 76, 2, "#dc2626", "#f8fafc"),
  club("st-pauli", "FC St. Pauli", "STP", "ger", 69, 1, "#5b3421", "#f8fafc"),
  club("stuttgart", "VfB Stuttgart", "VFB", "ger", 85, 3, "#f8fafc", "#dc2626"),
  club("union", "1. FC Union Berlin", "FCU", "ger", 72, 1, "#dc2626", "#f8fafc"),
  club("werder", "Werder Bremen", "SVW", "ger", 74, 2, "#16a34a", "#f8fafc"),
  club("wolfsburg", "VfL Wolfsburg", "WOB", "ger", 72, 1, "#84cc16", "#f8fafc"),

  club("atalanta", "Atalanta", "ATA", "ita", 87, 4, "#111827", "#2563eb"),
  club("bologna", "Bologna", "BOL", "ita", 82, 3, "#1d3557", "#9f1239"),
  club("cagliari", "Cagliari", "CAG", "ita", 70, 1, "#172554", "#b91c1c"),
  club("como", "Como", "COM", "ita", 78, 2, "#2563eb", "#f8fafc"),
  club("cremonese", "Cremonese", "CRE", "ita", 68, 1, "#dc2626", "#94a3b8"),
  club("fiorentina", "Fiorentina", "FIO", "ita", 80, 3, "#7e22ce", "#f8fafc"),
  club("genoa", "Genoa", "GEN", "ita", 73, 2, "#172554", "#b91c1c"),
  club("verona", "Hellas Verona", "VER", "ita", 70, 1, "#1d4ed8", "#fde047"),
  club("inter", "Inter", "INT", "ita", 92, 4, "#111827", "#2563eb"),
  club("juventus", "Juventus", "JUV", "ita", 88, 4, "#111827", "#f8fafc"),
  club("lazio", "Lazio", "LAZ", "ita", 82, 3, "#7dd3fc", "#f8fafc"),
  club("lecce", "Lecce", "LEC", "ita", 69, 1, "#dc2626", "#fde047"),
  club("milan", "AC Milan", "MIL", "ita", 86, 4, "#111827", "#dc2626"),
  club("napoli", "Napoli", "NAP", "ita", 90, 4, "#38bdf8", "#f8fafc"),
  club("parma", "Parma", "PAR", "ita", 72, 1, "#f8fafc", "#1d4ed8"),
  club("pisa", "Pisa", "PIS", "ita", 67, 1, "#111827", "#2563eb"),
  club("roma", "Roma", "ROM", "ita", 84, 3, "#7f1d1d", "#f59e0b"),
  club("sassuolo", "Sassuolo", "SAS", "ita", 73, 1, "#16a34a", "#111827"),
  club("torino", "Torino", "TOR", "ita", 75, 2, "#7f1d1d", "#f8fafc"),
  club("udinese", "Udinese", "UDI", "ita", 74, 2, "#111827", "#f8fafc"),

  club("angers", "Angers SCO", "ANG", "fra", 69, 1, "#111827", "#f8fafc"),
  club("auxerre", "AJ Auxerre", "AUX", "fra", 70, 1, "#2563eb", "#f8fafc"),
  club("brest", "Stade Brestois", "BRE", "fra", 76, 2, "#dc2626", "#f8fafc"),
  club("le-havre", "Le Havre AC", "HAC", "fra", 68, 1, "#7dd3fc", "#172554"),
  club("lens", "RC Lens", "RCL", "fra", 80, 3, "#dc2626", "#fde047"),
  club("lille", "LOSC Lille", "LIL", "fra", 83, 3, "#dc2626", "#172554"),
  club("lorient", "FC Lorient", "LOR", "fra", 69, 1, "#f97316", "#111827"),
  club("lyon", "Olympique Lyonnais", "OL", "fra", 82, 3, "#f8fafc", "#2563eb"),
  club("marseille", "Olympique de Marseille", "OM", "fra", 85, 3, "#f8fafc", "#38bdf8"),
  club("metz", "FC Metz", "MET", "fra", 67, 1, "#7f1d1d", "#f8fafc"),
  club("monaco", "AS Monaco", "ASM", "fra", 85, 3, "#dc2626", "#f8fafc"),
  club("nantes", "FC Nantes", "NAN", "fra", 71, 1, "#fde047", "#16a34a"),
  club("nice", "OGC Nice", "NIC", "fra", 79, 2, "#111827", "#dc2626"),
  club("paris-fc", "Paris FC", "PFC", "fra", 68, 1, "#172554", "#7dd3fc"),
  club("psg", "Paris Saint-Germain", "PSG", "fra", 94, 4, "#172554", "#dc2626"),
  club("rennes", "Stade Rennais", "REN", "fra", 78, 2, "#dc2626", "#111827"),
  club("strasbourg", "RC Strasbourg", "RCS", "fra", 77, 2, "#2563eb", "#f8fafc"),
  club("toulouse", "Toulouse FC", "TFC", "fra", 74, 2, "#7e22ce", "#f8fafc"),
];

const STAR_PLAYERS = [
  star("Erling Haaland", "man-city", 96, 0.78, 0.18),
  star("Mohamed Salah", "liverpool", 93, 0.53, 0.32),
  star("Alexander Isak", "newcastle", 91, 0.57, 0.17),
  star("Bukayo Saka", "arsenal", 90, 0.35, 0.38),
  star("Cole Palmer", "chelsea", 91, 0.43, 0.34),
  star("Ollie Watkins", "aston-villa", 87, 0.42, 0.2),
  star("Kylian Mbappe", "real-madrid", 96, 0.76, 0.22),
  star("Robert Lewandowski", "barcelona", 91, 0.62, 0.12),
  star("Lamine Yamal", "barcelona", 93, 0.35, 0.46),
  star("Vinicius Junior", "real-madrid", 92, 0.42, 0.35),
  star("Julian Alvarez", "atletico", 90, 0.47, 0.22),
  star("Ayoze Perez", "villarreal", 86, 0.39, 0.18),
  star("Harry Kane", "bayern", 96, 0.92, 0.22),
  star("Michael Olise", "bayern", 92, 0.34, 0.55),
  star("Luis Diaz", "bayern", 90, 0.48, 0.34),
  star("Serhou Guirassy", "dortmund", 89, 0.55, 0.13),
  star("Deniz Undav", "stuttgart", 87, 0.49, 0.18),
  star("Patrik Schick", "leverkusen", 88, 0.5, 0.12),
  star("Lautaro Martinez", "inter", 92, 0.63, 0.17),
  star("Marcus Thuram", "inter", 88, 0.42, 0.23),
  star("Christian Pulisic", "milan", 88, 0.38, 0.29),
  star("Scott McTominay", "napoli", 87, 0.31, 0.2),
  star("Dusan Vlahovic", "juventus", 88, 0.47, 0.1),
  star("Ademola Lookman", "atalanta", 88, 0.44, 0.25),
  star("Ousmane Dembele", "psg", 94, 0.53, 0.39),
  star("Khvicha Kvaratskhelia", "psg", 91, 0.39, 0.35),
  star("Mason Greenwood", "marseille", 88, 0.48, 0.2),
  star("Maghnes Akliouche", "monaco", 87, 0.3, 0.34),
  star("Jonathan David", "lille", 88, 0.55, 0.12),
  star("Alexandre Lacazette", "lyon", 85, 0.4, 0.14),
];

const SKINS = [
  { id: "skin-1", label: "Bronce", color: "#8d5524", shadow: "#5e3516" },
  { id: "skin-2", label: "Miel", color: "#c68642", shadow: "#8c5324" },
  { id: "skin-3", label: "Arena", color: "#f1c27d", shadow: "#b98245" },
  { id: "skin-4", label: "Marfil", color: "#ffdbac", shadow: "#c28b5b" },
];

const ATTRIBUTES = ["pace", "shooting", "passing", "dribbling", "defending", "reflexes", "stamina", "composure"];
const ATTRIBUTE_LABELS = {
  pace: "Ritmo",
  shooting: "Remate",
  passing: "Pase",
  dribbling: "Regate",
  defending: "Marca",
  reflexes: "Reflejos",
  stamina: "Fisico",
  composure: "Temple",
};

const POSITIONS = {
  gk: position("Portero", "Arco", "Reflejos, mano a mano y salida.", { pace: 42, shooting: 28, passing: 54, dribbling: 34, defending: 63, reflexes: 71, stamina: 56, composure: 61 }, ["reflexes", "composure", "passing"]),
  def: position("Defensa", "Muro", "Cruces, duelos y primer pase.", { pace: 57, shooting: 39, passing: 54, dribbling: 45, defending: 68, reflexes: 48, stamina: 66, composure: 58 }, ["defending", "stamina", "passing"]),
  mid: position("Mediocampo", "Motor", "Vision, ritmo y control.", { pace: 59, shooting: 51, passing: 67, dribbling: 61, defending: 55, reflexes: 46, stamina: 68, composure: 62 }, ["passing", "stamina", "composure"]),
  wing: position("Extremo", "Banda", "Desborde y centros al area.", { pace: 69, shooting: 56, passing: 59, dribbling: 68, defending: 39, reflexes: 45, stamina: 62, composure: 57 }, ["pace", "dribbling", "passing"]),
  st: position("Delantero", "Area", "Gol, ruptura y sangre fria.", { pace: 65, shooting: 68, passing: 47, dribbling: 61, defending: 34, reflexes: 43, stamina: 60, composure: 63 }, ["shooting", "composure", "pace"]),
};

const TRAINING_DRILLS = [
  drill("finishing", "Definicion", "+1 Remate, +1 Temple", { shooting: 1, composure: 1 }),
  drill("rondo", "Rondo", "+1 Pase, +1 Regate", { passing: 1, dribbling: 1 }),
  drill("sprints", "Series", "+1 Ritmo, +1 Fisico", { pace: 1, stamina: 1 }),
  drill("duels", "Duelos", "+1 Marca, +1 Reflejos", { defending: 1, reflexes: 1 }),
];

const HIGHLIGHTS = {
  gk: [
    scenario("Mano a mano", "El rival queda libre dentro del area.", [
      option("Achicar angulo", "reflexes", 11, "save", "Tapas el remate con el cuerpo."),
      option("Esperar tiro", "composure", 13, "save", "Lees el pie de apoyo y desvias."),
      option("Salida larga", "passing", 15, "counter", "Robas el momento y lanzas la contra."),
    ]),
    scenario("Centro venenoso", "La pelota cae entre tu central y el delantero.", [
      option("Salir por alto", "reflexes", 12, "save", "Cazas el centro en el trafico."),
      option("Golpear de puno", "defending", 12, "save", "Limpias el area de un manotazo."),
      option("Asegurar abajo", "composure", 14, "save", "Amarras el rebote antes del remate."),
    ]),
  ],
  def: [
    scenario("Carrera al espacio", "Un punta te ataca la espalda.", [
      option("Cruce limpio", "defending", 11, "tackle", "Llegas al corte sin falta."),
      option("Cuerpo a cuerpo", "stamina", 12, "tackle", "Ganas la disputa y enfrías el ataque."),
      option("Pase vertical", "passing", 15, "keyPass", "Recuperas y rompes dos lineas."),
    ]),
    scenario("Balon parado", "El saque de esquina cae en tu zona.", [
      option("Despeje fuerte", "defending", 11, "tackle", "Alejas el peligro del area."),
      option("Cabecear al punta", "passing", 14, "keyPass", "La segunda jugada sale con ventaja."),
      option("Seguir marca", "composure", 13, "tackle", "No compras el bloqueo rival."),
    ]),
  ],
  mid: [
    scenario("Giro entre lineas", "Recibes con rivales cerrando la salida.", [
      option("Pase filtrado", "passing", 13, "assist", "La asistencia deja al nueve de cara."),
      option("Conducir y soltar", "dribbling", 12, "keyPass", "Arrastras marcas y abres el carril."),
      option("Remate lejano", "shooting", 17, "goal", "Tu disparo besa el poste por dentro."),
    ]),
    scenario("Presion alta", "El equipo necesita escapar con la pelota limpia.", [
      option("Pared corta", "passing", 11, "keyPass", "La presion queda atras."),
      option("Cambio de frente", "composure", 14, "assist", "La banda opuesta recibe con metros."),
      option("Robo tras perdida", "defending", 14, "tackle", "Reaccionas antes de la contra."),
    ]),
  ],
  wing: [
    scenario("Uno contra uno", "La banda queda abierta frente al lateral.", [
      option("Recorte corto", "dribbling", 15, "goal", "Entras al area y cruzas el tiro."),
      option("Centro tenso", "passing", 13, "assist", "Tu envio llega al punto penal."),
      option("Picar al fondo", "pace", 12, "keyPass", "Ganas linea de fondo y mantienes la jugada."),
    ]),
    scenario("Transicion", "El rival esta mal parado y la grada se levanta.", [
      option("Sprint exterior", "pace", 12, "assist", "Tu pase atras encuentra rematador."),
      option("Diagonal al arco", "shooting", 16, "goal", "Atacas el hueco con ventaja."),
      option("Freno y pase", "composure", 13, "keyPass", "El ataque respira y conserva ventaja."),
    ]),
  ],
  st: [
    scenario("Pase al hueco", "La linea rival queda rota por un segundo.", [
      option("Definir de primera", "shooting", 15, "goal", "La red se mueve antes del cierre."),
      option("Amagar al portero", "dribbling", 17, "goal", "Lo sientas y empujas la pelota."),
      option("Ceder al socio", "passing", 13, "assist", "Tu descarga vale medio gol."),
    ]),
    scenario("Area cargada", "El centro cae entre dos centrales.", [
      option("Atacar primer palo", "pace", 15, "goal", "Ganas la carrera y cambias la direccion."),
      option("Bajar de pecho", "composure", 12, "keyPass", "La segunda jugada queda viva."),
      option("Media vuelta", "shooting", 18, "goal", "Te inventas un remate sin angulo."),
    ]),
  ],
};

const els = {
  setupScreen: document.querySelector("#setupScreen"),
  careerScreen: document.querySelector("#careerScreen"),
  playerForm: document.querySelector("#playerForm"),
  playerName: document.querySelector("#playerName"),
  skinChoices: document.querySelector("#skinChoices"),
  positionChoices: document.querySelector("#positionChoices"),
  positionHint: document.querySelector("#positionHint"),
  playerPreview: document.querySelector("#playerPreview"),
  starterStats: document.querySelector("#starterStats"),
  starterClubs: document.querySelector("#starterClubs"),
  careerHud: document.querySelector("#careerHud"),
  seasonTitle: document.querySelector("#seasonTitle"),
  seasonStatus: document.querySelector("#seasonStatus"),
  seasonRoute: document.querySelector("#seasonRoute"),
  trainingDock: document.querySelector("#trainingDock"),
  matchBadge: document.querySelector("#matchBadge"),
  matchCanvas: document.querySelector("#matchCanvas"),
  matchStory: document.querySelector("#matchStory"),
  matchActions: document.querySelector("#matchActions"),
  overallBadge: document.querySelector("#overallBadge"),
  attributeGrid: document.querySelector("#attributeGrid"),
  careerTotals: document.querySelector("#careerTotals"),
  worldBadge: document.querySelector("#worldBadge"),
  worldTabs: document.querySelector("#worldTabs"),
  worldView: document.querySelector("#worldView"),
  offerPanel: document.querySelector("#offerPanel"),
  offerTitle: document.querySelector("#offerTitle"),
  offerSummary: document.querySelector("#offerSummary"),
  offerChoices: document.querySelector("#offerChoices"),
  openAtlasButton: document.querySelector("#openAtlasButton"),
  closeAtlasButton: document.querySelector("#closeAtlasButton"),
  clubAtlas: document.querySelector("#clubAtlas"),
  leagueTabs: document.querySelector("#leagueTabs"),
  atlasClubs: document.querySelector("#atlasClubs"),
  awardDialog: document.querySelector("#awardDialog"),
  awardStage: document.querySelector("#awardStage"),
  closeAwardButton: document.querySelector("#closeAwardButton"),
  resetButton: document.querySelector("#resetButton"),
};

let state = loadState();
let setup = createSetupState();
let activeAtlasLeague = LEAGUES[0].id;
let activeWorldTab = "my-table";
let selectedStatsLeague = null;
let selectedTableLeague = null;

boot();

function club(id, name, short, league, rating, tier, primary, secondary) {
  return { id, name, short, league, rating, tier, primary, secondary };
}

function star(name, clubId, ability, scoring, assisting) {
  return { id: slug(`${clubId}-${name}`), name, clubId, ability, scoring, assisting };
}

function position(label, lane, description, base, focus) {
  return { label, lane, description, base, focus };
}

function drill(id, title, note, gains) {
  return { id, title, note, gains };
}

function scenario(title, copy, options) {
  return { title, copy, options };
}

function option(label, stat, dc, reward, success) {
  return { label, stat, dc, reward, success };
}

function boot() {
  bindEvents();
  renderSkins();
  renderPositions();
  renderAtlas();
  if (state && state.version === 2) {
    normalizeState();
    renderCareer();
    return;
  }
  state = null;
  renderSetup();
}

function bindEvents() {
  els.playerForm.addEventListener("submit", startCareer);
  els.playerName.addEventListener("input", drawPlayerPreview);
  els.openAtlasButton.addEventListener("click", () => els.clubAtlas.showModal());
  els.closeAtlasButton.addEventListener("click", () => els.clubAtlas.close());
  els.closeAwardButton.addEventListener("click", () => els.awardDialog.close());
  els.resetButton.addEventListener("click", resetCareer);
}

function createSetupState() {
  const starters = starterSelection();
  return { skin: SKINS[2].id, position: "st", starters, starterClub: starters[0] };
}

function renderSetup() {
  els.setupScreen.classList.remove("hidden");
  els.careerScreen.classList.add("hidden");
  renderStarterClubs();
  renderStarterStats();
  drawPlayerPreview();
}

function renderSkins() {
  els.skinChoices.innerHTML = "";
  SKINS.forEach((skin) => {
    const button = document.createElement("button");
    button.className = `skin-button${setup.skin === skin.id ? " active" : ""}`;
    button.type = "button";
    button.title = skin.label;
    button.style.setProperty("--skin", skin.color);
    button.addEventListener("click", () => {
      setup.skin = skin.id;
      renderSkins();
      drawPlayerPreview();
    });
    els.skinChoices.append(button);
  });
}

function renderPositions() {
  els.positionChoices.innerHTML = "";
  Object.entries(POSITIONS).forEach(([id, positionData]) => {
    const button = document.createElement("button");
    button.className = `position-button${setup.position === id ? " active" : ""}`;
    button.type = "button";
    button.innerHTML = `<strong>${positionData.label}</strong><small>${positionData.description}</small>`;
    button.addEventListener("click", () => {
      setup.position = id;
      els.positionHint.textContent = positionData.label;
      renderPositions();
      renderStarterStats();
      drawPlayerPreview();
    });
    els.positionChoices.append(button);
  });
}

function renderStarterClubs() {
  els.starterClubs.innerHTML = "";
  setup.starters.forEach((clubId) => {
    const starter = getClub(clubId);
    els.starterClubs.append(clubButton(starter, setup.starterClub === starter.id, () => {
      setup.starterClub = starter.id;
      renderStarterClubs();
      drawPlayerPreview();
    }));
  });
}

function renderStarterStats() {
  els.starterStats.innerHTML = "";
  POSITIONS[setup.position].focus.forEach((attribute) => {
    els.starterStats.append(statChip(attribute, POSITIONS[setup.position].base[attribute]));
  });
}

function startCareer(event) {
  event.preventDefault();
  const firstClubId = setup.starterClub || setup.starters[0];
  state = {
    version: 2,
    player: {
      name: cleanName(els.playerName.value),
      skin: setup.skin,
      position: setup.position,
      attributes: structuredClone(POSITIONS[setup.position].base),
    },
    career: {
      season: 1,
      clubId: firstClubId,
      reputation: 8,
      xp: 0,
      totals: emptyTotals(),
      history: [],
      awards: [],
      lastChampionsQualifiers: [],
      trainingUsed: false,
    },
    world: createWorld(firstClubId, 1, []),
    match: null,
    offers: null,
    message: `Firmaste con ${getClub(firstClubId).name}. La primera temporada empieza con liga completa.`,
  };
  saveState();
  renderCareer();
}

function createWorld(playerClubId, seasonNumber, qualifiers) {
  const leagues = {};
  LEAGUES.forEach((league) => {
    leagues[league.id] = createLeagueSeason(league.id);
  });
  return {
    seasonNumber,
    leagues,
    champions: seasonNumber > 1 ? createChampionsSeason(qualifiers, playerClubId) : null,
    stage: "league",
    award: null,
  };
}

function createLeagueSeason(leagueId) {
  const clubs = CLUBS.filter((candidate) => candidate.league === leagueId);
  return {
    leagueId,
    round: 0,
    schedule: roundRobin(clubs.map((candidate) => candidate.id)),
    table: Object.fromEntries(clubs.map((candidate) => [candidate.id, emptyRow(candidate.id)])),
    leaders: seedLeaders(leagueId),
    playerResults: [],
  };
}

function createChampionsSeason(qualifiers, playerClubId) {
  const participants = qualifiers.slice(0, CHAMPIONS_SIZE);
  if (!participants.includes(playerClubId)) {
    return { participants, eligible: false, phase: "skipped", table: {}, fixtures: [], results: [], knockout: [] };
  }
  const rivals = shuffle(participants.filter((clubId) => clubId !== playerClubId)).slice(0, 7);
  const fixtures = shuffle([...rivals, rivals[0] || participants[0]]).slice(0, 8);
  return {
    participants,
    eligible: true,
    phase: "league",
    fixtures,
    results: [],
    table: Object.fromEntries(participants.map((clubId) => [clubId, emptyRow(clubId)])),
    knockout: [],
    championId: null,
  };
}

function renderCareer() {
  els.setupScreen.classList.add("hidden");
  els.careerScreen.classList.remove("hidden");
  renderHud();
  renderRoute();
  renderTraining();
  renderDossier();
  renderMatchPanel();
  renderWorldTabs();
  renderWorldView();
  renderOfferPanel();
}

function renderHud() {
  const clubData = getClub(state.career.clubId);
  const league = getLeague(clubData.league);
  const event = currentEvent();
  const cards = [
    {
      label: state.player.name,
      value: `<span class="hud-club"><span class="kit-pixels" style="--club-a:${clubData.primary};--club-b:${clubData.secondary}"></span><span>${clubData.name}<br><small>${league.name}</small></span></span>`,
    },
    { label: "Temporada", value: `${state.career.season}/${MAX_SEASONS}` },
    { label: "Posicion", value: POSITIONS[state.player.position].label },
    { label: "Reputacion", value: state.career.reputation },
    { label: event.type === "league" ? "Jornada" : "Europa", value: event.label },
  ];
  els.careerHud.innerHTML = cards.map((card) => `
    <article class="hud-card">
      <span class="hud-label">${card.label}</span>
      <strong>${card.value}</strong>
    </article>
  `).join("");
}

function renderRoute() {
  const event = currentEvent();
  const leagueSeason = playerLeagueSeason();
  els.seasonTitle.textContent = `Temporada ${state.career.season} en ${getClub(state.career.clubId).short}`;
  els.seasonStatus.textContent = state.offers ? "Mercado" : event.type === "champions" ? "Champions" : "Liga";
  els.seasonRoute.innerHTML = "";

  leagueSeason.schedule.forEach((round, index) => {
    const fixture = round.find((game) => game.home === state.career.clubId || game.away === state.career.clubId);
    const node = document.createElement("article");
    node.className = "route-node";
    if (index < leagueSeason.round) node.classList.add("done");
    if (event.type === "league" && index === leagueSeason.round) node.classList.add("current");
    const rivalId = fixture.home === state.career.clubId ? fixture.away : fixture.home;
    const result = leagueSeason.playerResults[index];
    node.innerHTML = `
      <strong>Jornada ${index + 1}: ${getClub(rivalId).short}</strong>
      <small>${result ? result.summary : `${getClub(rivalId).name} espera el partido de liga.`}</small>
    `;
    els.seasonRoute.append(node);
  });

  if (state.world.champions?.eligible) {
    state.world.champions.fixtures.forEach((rivalId, index) => {
      const result = state.world.champions.results[index];
      const node = document.createElement("article");
      node.className = "route-node";
      if (result) node.classList.add("done");
      if (event.type === "champions" && event.index === index) node.classList.add("current");
      node.innerHTML = `
        <strong>Champions ${index + 1}: ${getClub(rivalId).short}</strong>
        <small>${result ? result.summary : "Noche europea de fase liga."}</small>
      `;
      els.seasonRoute.append(node);
    });
  }
}

function renderTraining() {
  els.trainingDock.innerHTML = "";
  if (state.offers) {
    els.trainingDock.innerHTML = "<p>El ano ya cerro. Mira las tablas y el mercado antes del siguiente contrato.</p>";
    return;
  }
  const intro = document.createElement("p");
  intro.textContent = state.career.trainingUsed || state.match
    ? "El microciclo de esta fecha ya esta cerrado."
    : "Un microciclo por fecha. Mejora poco, pero cada jornada pesa.";
  els.trainingDock.append(intro);
  const dock = document.createElement("div");
  dock.className = "training-options";
  TRAINING_DRILLS.forEach((training) => {
    const button = document.createElement("button");
    button.className = "training-button";
    button.type = "button";
    button.disabled = state.career.trainingUsed || Boolean(state.match);
    button.innerHTML = `<strong>${training.title}</strong><small>${training.note}</small>`;
    button.addEventListener("click", () => train(training));
    dock.append(button);
  });
  els.trainingDock.append(dock);
}

function train(training) {
  Object.entries(training.gains).forEach(([attribute, gain]) => {
    state.player.attributes[attribute] = clamp(state.player.attributes[attribute] + gain, 25, 99);
  });
  state.career.trainingUsed = true;
  state.message = `${training.title}: mejoras pequenas antes de una fecha larga.`;
  saveState();
  renderCareer();
}

function renderMatchPanel() {
  const event = currentEvent();
  if (state.offers) {
    els.matchBadge.textContent = "Cierre";
    els.matchStory.innerHTML = `<strong>Temporada completada</strong><p>${state.message}</p>`;
    els.matchActions.innerHTML = "";
    drawMatchField(null, null);
    return;
  }
  if (!state.match) {
    const rival = getClub(event.opponentId);
    els.matchBadge.textContent = event.type === "champions" ? "Europa" : "Liga";
    els.matchStory.innerHTML = `
      <strong>${getClub(state.career.clubId).short} vs ${rival.short}</strong>
      <p>${event.copy}</p>
      <p>${state.message || "Tus decisiones pasan por dados, stats y nivel del rival."}</p>
    `;
    els.matchActions.innerHTML = "";
    const button = document.createElement("button");
    button.className = "pixel-button primary";
    button.type = "button";
    button.textContent = "Jugar partido";
    button.addEventListener("click", beginMatch);
    els.matchActions.append(button);
    drawMatchField(null, rival);
    return;
  }

  const highlight = state.match.highlights[state.match.step];
  els.matchBadge.textContent = `D20 ${state.match.step + 1}/2`;
  els.matchStory.innerHTML = `
    <strong>${highlight.title}</strong>
    <p>${highlight.copy}</p>
    <p>Marcador live: ${state.match.scoreFor}-${state.match.scoreAgainst}</p>
    ${state.match.lastRoll ? rollMarkup(state.match.lastRoll) : ""}
  `;
  els.matchActions.innerHTML = "";
  highlight.options.forEach((choice) => {
    const odds = previewRoll(choice);
    const button = document.createElement("button");
    button.className = "action-button";
    button.type = "button";
    button.innerHTML = `
      <strong>${choice.label}</strong>
      <small>D20 ${signed(odds.modifier)} vs DC ${odds.dc} | exito ${odds.chance}%</small>
    `;
    button.addEventListener("click", () => resolveHighlight(choice));
    els.matchActions.append(button);
  });
  drawMatchField(highlight, getClub(state.match.opponentId));
}

function beginMatch() {
  const event = currentEvent();
  const context = event.type === "league" ? event.fixture : { home: state.career.clubId, away: event.opponentId };
  const baseline = simulateScore(context.home, context.away, event.type, 0.62);
  state.match = {
    type: event.type,
    roundIndex: event.index,
    opponentId: event.opponentId,
    homeId: context.home,
    awayId: context.away,
    scoreFor: context.home === state.career.clubId ? baseline.homeGoals : baseline.awayGoals,
    scoreAgainst: context.home === state.career.clubId ? baseline.awayGoals : baseline.homeGoals,
    highlights: buildHighlights(state.player.position),
    step: 0,
    stats: emptyMatchStats(),
    lastRoll: null,
  };
  state.message = "El partido abre sus dos ventanas decisivas.";
  saveState();
  renderCareer();
}

function previewRoll(choice) {
  const rival = getClub(state.match?.opponentId || currentEvent().opponentId);
  const own = getClub(state.career.clubId);
  const modifier = statModifier(choice.stat);
  const rivalry = clamp(Math.round((rival.rating - own.rating) / 4), -3, 6);
  const dc = clamp(choice.dc + rivalry + (state.match?.type === "champions" ? 1 : 0), 7, 23);
  const needed = dc - modifier;
  const chance = clamp(Math.round(((21 - clamp(needed, 1, 20)) / 20) * 100), 5, 95);
  return { modifier, dc, chance };
}

function resolveHighlight(choice) {
  const odds = previewRoll(choice);
  const die = randomInt(1, 20);
  const total = die + odds.modifier;
  const success = die === 20 || (die !== 1 && total >= odds.dc);
  const highlight = state.match.highlights[state.match.step];
  state.match.lastRoll = { die, total, dc: odds.dc, modifier: odds.modifier, success, stat: choice.stat };
  state.match.stats.decisions += 1;
  if (success) {
    applyReward(choice.reward);
    state.match.stats.successes += 1;
    state.message = choice.success;
  } else {
    applyFailure(choice.reward);
    state.message = `${highlight.title}: el rival supera tu tirada.`;
  }
  state.match.step += 1;
  if (state.match.step >= state.match.highlights.length) {
    finishPlayerMatch();
    return;
  }
  saveState();
  renderCareer();
}

function applyReward(reward) {
  const stats = state.match.stats;
  stats.rating += 0.48;
  if (reward === "goal") {
    stats.goals += 1;
    state.match.scoreFor += 1;
  }
  if (reward === "assist") {
    stats.assists += 1;
    if (Math.random() < 0.76) state.match.scoreFor += 1;
  }
  if (reward === "keyPass") {
    stats.keyPasses += 1;
    if (Math.random() < 0.22) state.match.scoreFor += 1;
  }
  if (reward === "tackle") stats.tackles += 1;
  if (reward === "save") stats.saves += 1;
  if (reward === "counter") {
    stats.saves += 1;
    stats.keyPasses += 1;
    if (Math.random() < 0.18) state.match.scoreFor += 1;
  }
}

function applyFailure(reward) {
  state.match.stats.rating -= 0.36;
  const defensive = ["gk", "def"].includes(state.player.position) || ["save", "tackle"].includes(reward);
  if (defensive && Math.random() < 0.42) state.match.scoreAgainst += 1;
}

function finishPlayerMatch() {
  const context = state.match;
  const result = resultCode(context.scoreFor, context.scoreAgainst);
  const stats = context.stats;
  stats.rating = clamp(Number((5.9 + stats.rating + resultBonus(result)).toFixed(1)), 4.5, 9.6);
  stats.result = result;
  stats.score = `${context.scoreFor}-${context.scoreAgainst}`;
  stats.opponentId = context.opponentId;
  stats.type = context.type;
  stats.summary = `${getClub(state.career.clubId).short} ${stats.score} ${getClub(context.opponentId).short}. Nota ${stats.rating}.`;
  const homeGoals = context.homeId === state.career.clubId ? context.scoreFor : context.scoreAgainst;
  const awayGoals = context.homeId === state.career.clubId ? context.scoreAgainst : context.scoreFor;

  if (context.type === "league") {
    completeLeagueRound(context.roundIndex, stats, homeGoals, awayGoals);
  } else {
    completeChampionsMatch(stats, homeGoals, awayGoals);
  }

  mergeTotals(stats);
  awardGrowth(stats);
  state.match = null;
  state.career.trainingUsed = false;
  state.message = stats.summary;
  advanceSeasonIfNeeded();
  saveState();
  renderCareer();
}

function completeLeagueRound(roundIndex, stats, homeGoals, awayGoals) {
  const leagueSeason = playerLeagueSeason();
  const round = leagueSeason.schedule[roundIndex];
  round.forEach((fixture) => {
    if (fixture.home === state.career.clubId || fixture.away === state.career.clubId) {
      fixture.result = { homeGoals, awayGoals };
      leagueSeason.playerResults[roundIndex] = stats;
      recordResult(leagueSeason.table, fixture.home, fixture.away, homeGoals, awayGoals);
      addPlayerStatsToLeaders(leagueSeason.leaders, stats);
      seedScorersFromMatch(fixture.home, fixture.away, homeGoals, awayGoals, leagueSeason.leaders, true);
      return;
    }
    const simulated = simulateScore(fixture.home, fixture.away, "league");
    fixture.result = simulated;
    recordResult(leagueSeason.table, fixture.home, fixture.away, simulated.homeGoals, simulated.awayGoals);
    seedScorersFromMatch(fixture.home, fixture.away, simulated.homeGoals, simulated.awayGoals, leagueSeason.leaders);
  });
  leagueSeason.round += 1;
}

function completeChampionsMatch(stats, homeGoals, awayGoals) {
  const champions = state.world.champions;
  const rivalId = champions.fixtures[champions.results.length];
  const playerHome = state.match.homeId === state.career.clubId;
  recordResult(champions.table, state.match.homeId, state.match.awayId, homeGoals, awayGoals);
  simulateChampionsParticipantResults(champions, state.match.homeId, state.match.awayId);
  stats.summary = `${playerHome ? getClub(state.career.clubId).short : getClub(rivalId).short} ${homeGoals}-${awayGoals} ${playerHome ? getClub(rivalId).short : getClub(state.career.clubId).short}. Nota ${stats.rating}.`;
  champions.results.push(stats);
  if (champions.results.length === champions.fixtures.length) finishChampions(champions);
}

function simulateChampionsParticipantResults(champions, blockedA, blockedB) {
  const pool = shuffle(champions.participants.filter((clubId) => ![blockedA, blockedB].includes(clubId)));
  for (let index = 0; index < pool.length - 1; index += 2) {
    const home = pool[index];
    const away = pool[index + 1];
    const score = simulateScore(home, away, "champions");
    recordResult(champions.table, home, away, score.homeGoals, score.awayGoals);
  }
}

function finishChampions(champions) {
  const sorted = sortedRows(champions.table);
  const topEight = sorted.slice(0, 8).map((row) => row.clubId);
  let survivors = topEight;
  champions.knockout = [];
  while (survivors.length > 1) {
    const next = [];
    for (let index = 0; index < survivors.length; index += 2) {
      const home = survivors[index];
      const away = survivors[index + 1];
      const winner = knockoutWinner(home, away);
      champions.knockout.push({ home, away, winner });
      next.push(winner);
    }
    survivors = next;
  }
  champions.championId = survivors[0];
  champions.phase = "complete";
}

function advanceSeasonIfNeeded() {
  const leagueDone = playerLeagueSeason().round >= getLeague(getClub(state.career.clubId).league).rounds;
  if (!leagueDone) return;
  if (state.world.stage === "league") {
    finalizeRemainingLeagues();
    state.career.lastChampionsQualifiers = selectChampionsQualifiers();
    if (state.world.champions?.eligible && state.world.champions.phase !== "complete") {
      state.world.stage = "champions";
      state.message = "La liga domestica cerro. Tu club entra a las noches europeas.";
      return;
    }
    closeSeason();
    return;
  }
  if (state.world.stage === "champions" && state.world.champions.phase === "complete") closeSeason();
}

function finalizeRemainingLeagues() {
  LEAGUES.forEach((league) => {
    const season = state.world.leagues[league.id];
    while (season.round < league.rounds) simulateLeagueRound(season);
  });
}

function simulateLeagueRound(season) {
  const round = season.schedule[season.round];
  round.forEach((fixture) => {
    const score = simulateScore(fixture.home, fixture.away, "league");
    fixture.result = score;
    recordResult(season.table, fixture.home, fixture.away, score.homeGoals, score.awayGoals);
    seedScorersFromMatch(fixture.home, fixture.away, score.homeGoals, score.awayGoals, season.leaders);
  });
  season.round += 1;
}

function closeSeason() {
  if (state.offers) return;
  const summary = summarizeSeason();
  state.career.reputation = clamp(state.career.reputation + summary.repGain, 1, 99);
  state.career.history.push(summary);
  state.world.award = buildBallonDor(summary);
  state.career.awards.push(state.world.award);
  state.message = `${summary.headline} El mercado y el Balon de Oro ya estan listos.`;
  state.offers = state.career.season >= MAX_SEASONS
    ? { final: true, summary, clubs: [] }
    : { final: false, summary, clubs: offerSelection(summary) };
  renderAwardDialog(state.world.award);
  els.awardDialog.showModal();
}

function renderWorldTabs() {
  const tabs = [
    ["my-table", "Mi tabla"],
    ["season-stats", "Mi temporada"],
    ["leaders", "Goleadores"],
    ["champions", "Champions"],
    ["awards", "Balon Oro"],
  ];
  els.worldTabs.innerHTML = "";
  tabs.forEach(([id, label]) => {
    const button = document.createElement("button");
    button.className = `world-tab${activeWorldTab === id ? " active" : ""}`;
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", () => {
      activeWorldTab = id;
      renderWorldTabs();
      renderWorldView();
    });
    els.worldTabs.append(button);
  });
}

function renderWorldView() {
  if (activeWorldTab === "my-table") renderLeagueTableView();
  if (activeWorldTab === "season-stats") renderSeasonStatsView();
  if (activeWorldTab === "leaders") renderLeadersView();
  if (activeWorldTab === "champions") renderChampionsView();
  if (activeWorldTab === "awards") renderAwardsView();
}

function renderLeagueTableView() {
  selectedTableLeague ||= getClub(state.career.clubId).league;
  const rows = sortedRows(state.world.leagues[selectedTableLeague].table);
  els.worldBadge.textContent = getLeague(selectedTableLeague).competition;
  els.worldView.innerHTML = `
    <div class="league-tabs">
      ${LEAGUES.map((league) => `<button class="league-tab${league.id === selectedTableLeague ? " active" : ""}" data-table-league="${league.id}" type="button">${league.name}</button>`).join("")}
    </div>
    ${tableMarkup(rows, state.career.clubId)}
  `;
  els.worldView.querySelectorAll("[data-table-league]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedTableLeague = button.dataset.tableLeague;
      renderLeagueTableView();
    });
  });
}

function renderSeasonStatsView() {
  const stats = currentSeasonPlayerStats();
  const metrics = metricsForPosition(stats);
  els.worldBadge.textContent = `PJ ${stats.matches}`;
  els.worldView.innerHTML = `
    <div class="season-stat-grid">
      ${metrics.map(([label, value]) => `<div class="total-chip"><span>${label}</span><strong>${value}</strong></div>`).join("")}
    </div>
    <div class="dice-log">
      <span class="dice-chip">D20</span>
      ${stats.decisions ? `${stats.successes}/${stats.decisions} decisiones superadas.` : "Aun no tiraste dados esta temporada."}
      La nota media es ${stats.matches ? (stats.ratingPoints / stats.matches).toFixed(1) : "0.0"}.
    </div>
    ${seasonHistoryMarkup()}
  `;
}

function renderLeadersView() {
  selectedStatsLeague ||= getClub(state.career.clubId).league;
  els.worldBadge.textContent = getLeague(selectedStatsLeague).name;
  els.worldView.innerHTML = `
    <div class="league-tabs">
      ${LEAGUES.map((league) => `<button class="league-tab${league.id === selectedStatsLeague ? " active" : ""}" data-league="${league.id}" type="button">${league.name}</button>`).join("")}
    </div>
    ${leaderMarkup(state.world.leagues[selectedStatsLeague].leaders)}
  `;
  els.worldView.querySelectorAll("[data-league]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedStatsLeague = button.dataset.league;
      renderLeadersView();
    });
  });
}

function renderChampionsView() {
  const qualifiers = state.career.lastChampionsQualifiers;
  const champions = state.world.champions;
  els.worldBadge.textContent = champions ? "Europa" : "Desde T2";
  if (!champions) {
    els.worldView.innerHTML = "<p>La temporada 1 no tiene Champions: FUOL necesita las tablas previas para elegir 32 clubes.</p>";
    return;
  }
  if (!champions.eligible) {
    els.worldView.innerHTML = `
      <p>${getClub(state.career.clubId).name} no clasifico a Champions esta temporada. El ano avanza solo con liga.</p>
      <div class="champions-card"><h3>Clasificados FUOL</h3><p>${qualifiers.map((clubId) => getClub(clubId).short).join(" | ")}</p></div>
    `;
    return;
  }
  els.worldView.innerHTML = `
    <div class="champions-grid">
      <div class="champions-card">
        <h3>Fase liga</h3>
        <p>${champions.results.length}/8 partidos de tu club. FUOL usa 32 clasificados por puntos domesticos.</p>
      </div>
      <div class="champions-card">
        <h3>Campeon</h3>
        <p>${champions.championId ? getClub(champions.championId).name : "Por decidir"}</p>
      </div>
    </div>
    ${tableMarkup(sortedRows(champions.table), state.career.clubId)}
  `;
}

function renderAwardsView() {
  els.worldBadge.textContent = "Top 10";
  const award = state.world.award || state.career.awards.at(-1);
  if (!award) {
    els.worldView.innerHTML = "<p>La gala aparece cuando termina la temporada completa.</p>";
    return;
  }
  els.worldView.innerHTML = awardMarkup(award, false);
}

function renderOfferPanel() {
  if (!state.offers) {
    els.offerPanel.classList.add("hidden");
    return;
  }
  els.offerPanel.classList.remove("hidden");
  els.offerTitle.textContent = state.offers.final ? "Legado" : "Mercado de verano";
  els.offerSummary.textContent = state.offers.final
    ? "La carrera de 15 temporadas termino. Puedes revisar tablas, premios y abrir una nueva."
    : `${state.offers.summary.headline} Tienes tres ofertas mas la opcion de seguir.`;
  els.offerChoices.innerHTML = "";
  if (state.offers.final) {
    const button = document.createElement("button");
    button.className = "pixel-button primary";
    button.type = "button";
    button.textContent = "Nueva carrera";
    button.addEventListener("click", resetCareer);
    els.offerChoices.append(button);
    return;
  }
  els.offerChoices.append(offerButton(getClub(state.career.clubId), "Seguir", () => acceptOffer(state.career.clubId)));
  state.offers.clubs.forEach((clubId) => {
    els.offerChoices.append(offerButton(getClub(clubId), "Firmar", () => acceptOffer(clubId)));
  });
}

function acceptOffer(clubId) {
  state.career.season += 1;
  state.career.clubId = clubId;
  state.career.trainingUsed = false;
  state.world = createWorld(clubId, state.career.season, state.career.lastChampionsQualifiers);
  state.match = null;
  state.offers = null;
  state.message = `Temporada ${state.career.season}: ${getClub(clubId).name} te entrega uniforme.`;
  saveState();
  renderCareer();
}

function renderDossier() {
  els.overallBadge.textContent = `OVR ${getOverall()}`;
  els.attributeGrid.innerHTML = "";
  ATTRIBUTES.forEach((attribute) => els.attributeGrid.append(statChip(attribute, state.player.attributes[attribute])));
  const totals = state.career.totals;
  const metrics = [["PJ", totals.matches], ["Goles", totals.goals], ["Asist", totals.assists], ["Robos", totals.tackles], ["Paradas", totals.saves], ["Victorias", totals.wins], ["Premios", state.career.awards.filter((award) => award.winner.isPlayer).length], ["XP", state.career.xp]];
  els.careerTotals.innerHTML = metrics.map(([label, value]) => `<div class="total-chip"><span>${label}</span><strong>${value}</strong></div>`).join("");
}

function currentEvent() {
  if (state.offers) return { type: "closed", label: "Fin", opponentId: state.career.clubId };
  const leagueSeason = playerLeagueSeason();
  if (leagueSeason.round < getLeague(getClub(state.career.clubId).league).rounds) {
    const round = leagueSeason.schedule[leagueSeason.round];
    const fixture = round.find((game) => game.home === state.career.clubId || game.away === state.career.clubId);
    return {
      type: "league",
      label: `${leagueSeason.round + 1}/${leagueSeason.schedule.length}`,
      index: leagueSeason.round,
      fixture,
      opponentId: fixture.home === state.career.clubId ? fixture.away : fixture.home,
      copy: `${getLeague(getClub(state.career.clubId).league).competition}, jornada ${leagueSeason.round + 1}.`,
    };
  }
  const champions = state.world.champions;
  if (champions?.eligible && champions.results.length < champions.fixtures.length) {
    return {
      type: "champions",
      label: `${champions.results.length + 1}/8`,
      index: champions.results.length,
      opponentId: champions.fixtures[champions.results.length],
      copy: "Champions FUOL: fase liga europea.",
    };
  }
  return { type: "closed", label: "Fin", opponentId: state.career.clubId, copy: "Temporada cerrada." };
}

function playerLeagueSeason() {
  return state.world.leagues[getClub(state.career.clubId).league];
}

function roundRobin(ids) {
  const teams = [...ids];
  if (teams.length % 2) teams.push(null);
  const rounds = [];
  for (let round = 0; round < teams.length - 1; round += 1) {
    const fixtures = [];
    for (let index = 0; index < teams.length / 2; index += 1) {
      const home = teams[index];
      const away = teams[teams.length - 1 - index];
      if (home && away) fixtures.push(round % 2 ? { home: away, away: home } : { home, away });
    }
    rounds.push(fixtures);
    teams.splice(1, 0, teams.pop());
  }
  const returnLegs = rounds.map((fixtures) => fixtures.map((fixture) => ({ home: fixture.away, away: fixture.home })));
  return [...rounds, ...returnLegs];
}

function recordResult(table, homeId, awayId, homeGoals, awayGoals) {
  const home = table[homeId];
  const away = table[awayId];
  home.played += 1;
  away.played += 1;
  home.gf += homeGoals;
  home.ga += awayGoals;
  away.gf += awayGoals;
  away.ga += homeGoals;
  if (homeGoals > awayGoals) {
    home.wins += 1;
    home.points += 3;
    away.losses += 1;
  } else if (homeGoals < awayGoals) {
    away.wins += 1;
    away.points += 3;
    home.losses += 1;
  } else {
    home.draws += 1;
    away.draws += 1;
    home.points += 1;
    away.points += 1;
  }
}

function simulateScore(homeId, awayId, type, dampener = 1) {
  const home = getClub(homeId);
  const away = getClub(awayId);
  const gap = home.rating - away.rating;
  const homePower = clamp(1.16 + gap / 34 + (type === "league" ? 0.14 : 0.04), 0.32, 2.75) * dampener;
  const awayPower = clamp(0.94 - gap / 38, 0.25, 2.45) * dampener;
  return { homeGoals: poisson(homePower), awayGoals: poisson(awayPower) };
}

function seedLeaders(leagueId) {
  return {
    goals: Object.fromEntries(STAR_PLAYERS.filter((player) => getClub(player.clubId).league === leagueId).map((player) => [player.id, leader(player)])),
    assists: Object.fromEntries(STAR_PLAYERS.filter((player) => getClub(player.clubId).league === leagueId).map((player) => [player.id, leader(player)])),
  };
}

function leader(player) {
  return { id: player.id, name: player.name, clubId: player.clubId, ability: player.ability, value: 0, isPlayer: false };
}

function seedScorersFromMatch(homeId, awayId, homeGoals, awayGoals, leaders, skipPlayerClub = false) {
  awardStarOutput(homeId, homeGoals, leaders, "goals", skipPlayerClub);
  awardStarOutput(awayId, awayGoals, leaders, "goals", skipPlayerClub);
  awardStarOutput(homeId, Math.max(0, homeGoals - (Math.random() < 0.18 ? 1 : 0)), leaders, "assists", skipPlayerClub);
  awardStarOutput(awayId, Math.max(0, awayGoals - (Math.random() < 0.18 ? 1 : 0)), leaders, "assists", skipPlayerClub);
}

function awardStarOutput(clubId, amount, leaders, type, skipPlayerClub) {
  if (!amount) return;
  if (skipPlayerClub && clubId === state.career.clubId) return;
  const candidates = STAR_PLAYERS.filter((player) => player.clubId === clubId);
  for (let index = 0; index < amount; index += 1) {
    const player = weightedPick(candidates, type === "goals" ? "scoring" : "assisting");
    if (!player) continue;
    const bucket = leaders[type];
    bucket[player.id] ||= leader(player);
    bucket[player.id].value += 1;
  }
}

function addPlayerStatsToLeaders(leaders, stats) {
  const id = "career-player";
  const record = { id, name: state.player.name, clubId: state.career.clubId, ability: getOverall(), value: 0, isPlayer: true };
  leaders.goals[id] ||= { ...record };
  leaders.assists[id] ||= { ...record };
  leaders.goals[id].clubId = state.career.clubId;
  leaders.assists[id].clubId = state.career.clubId;
  leaders.goals[id].value += stats.goals;
  leaders.assists[id].value += stats.assists;
}

function currentSeasonPlayerStats() {
  const results = [...allPlayerResults()];
  return results.reduce((totals, result) => {
    totals.matches += 1;
    ["goals", "assists", "keyPasses", "tackles", "saves", "decisions", "successes"].forEach((key) => totals[key] += result[key] || 0);
    totals.ratingPoints += result.rating || 0;
    totals.wins += result.result === "W" ? 1 : 0;
    totals.draws += result.result === "D" ? 1 : 0;
    totals.losses += result.result === "L" ? 1 : 0;
    return totals;
  }, emptyTotals());
}

function allPlayerResults() {
  const domestic = playerLeagueSeason().playerResults.filter(Boolean);
  const europe = state.world.champions?.results || [];
  return [...domestic, ...europe];
}

function metricsForPosition(stats) {
  const base = [["Partidos", stats.matches], ["Nota media", stats.matches ? (stats.ratingPoints / stats.matches).toFixed(1) : "0.0"], ["Victorias", stats.wins], ["Decisiones", `${stats.successes}/${stats.decisions}`]];
  if (state.player.position === "gk") return [...base, ["Paradas", stats.saves], ["Vallas utiles", Math.max(0, stats.wins - stats.goals)], ["Pases clave", stats.keyPasses], ["Asistencias", stats.assists]];
  if (state.player.position === "def") return [...base, ["Robos", stats.tackles], ["Pases clave", stats.keyPasses], ["Asistencias", stats.assists], ["Goles", stats.goals]];
  if (state.player.position === "mid") return [...base, ["Asistencias", stats.assists], ["Pases clave", stats.keyPasses], ["Robos", stats.tackles], ["Goles", stats.goals]];
  return [...base, ["Goles", stats.goals], ["Asistencias", stats.assists], ["Pases clave", stats.keyPasses], ["Robos", stats.tackles]];
}

function summarizeSeason() {
  const leagueId = getClub(state.career.clubId).league;
  const table = sortedRows(state.world.leagues[leagueId].table);
  const playerRow = table.find((row) => row.clubId === state.career.clubId);
  const stats = currentSeasonPlayerStats();
  const average = stats.matches ? Number((stats.ratingPoints / stats.matches).toFixed(1)) : 0;
  const rank = table.findIndex((row) => row.clubId === state.career.clubId) + 1;
  const championsChampion = state.world.champions?.championId === state.career.clubId;
  const repGain = clamp(Math.round((20 - rank) / 2 + average - 5 + stats.goals * 0.22 + stats.assists * 0.18 + (championsChampion ? 8 : 0)), 1, 20);
  return {
    season: state.career.season,
    clubId: state.career.clubId,
    leagueId,
    rank,
    points: playerRow.points,
    average,
    stats,
    championsChampion,
    repGain,
    headline: `${rank}. en ${getLeague(leagueId).competition} con ${playerRow.points} pts; ${stats.goals} goles, ${stats.assists} asistencias y nota ${average}.`,
  };
}

function selectChampionsQualifiers() {
  return LEAGUES.flatMap((league) => sortedRows(state.world.leagues[league.id].table))
    .sort((a, b) => b.points - a.points || b.gf - b.ga - (a.gf - a.ga) || getClub(b.clubId).rating - getClub(a.clubId).rating)
    .slice(0, CHAMPIONS_SIZE)
    .map((row) => row.clubId);
}

function offerSelection(summary) {
  const current = getClub(state.career.clubId);
  const ceiling = clamp(current.rating + state.career.reputation / 2 + summary.repGain + (summary.rank <= 4 ? 4 : 0), 70, 96);
  const floor = Math.max(66, current.rating - 5);
  return uniqueClubs(shuffle(CLUBS.filter((candidate) => candidate.id !== current.id && candidate.rating >= floor && candidate.rating <= ceiling)))
    .sort((a, b) => Math.abs(b.rating - current.rating) - Math.abs(a.rating - current.rating))
    .slice(0, 3)
    .map((candidate) => candidate.id);
}

function buildBallonDor(summary) {
  const clubRankings = Object.fromEntries(LEAGUES.flatMap((league) => sortedRows(state.world.leagues[league.id].table).map((row, index) => [row.clubId, index + 1])));
  const candidates = STAR_PLAYERS.map((player) => {
    const goals = state.world.leagues[getClub(player.clubId).league].leaders.goals[player.id]?.value || Math.round(player.scoring * 20);
    const assists = state.world.leagues[getClub(player.clubId).league].leaders.assists[player.id]?.value || Math.round(player.assisting * 18);
    const rank = clubRankings[player.clubId] || 12;
    const score = player.ability * 0.9 + goals * 2.4 + assists * 1.7 + Math.max(0, 18 - rank) + (state.world.champions?.championId === player.clubId ? 18 : 0);
    return { name: player.name, clubId: player.clubId, goals, assists, score, isPlayer: false };
  });
  const playerScore = getOverall() + summary.stats.goals * 2.8 + summary.stats.assists * 2 + Math.max(0, 22 - summary.rank) + summary.average * 4 + (summary.championsChampion ? 24 : 0);
  candidates.push({ name: state.player.name, clubId: state.career.clubId, goals: summary.stats.goals, assists: summary.stats.assists, score: playerScore, isPlayer: true });
  const top = candidates.sort((a, b) => b.score - a.score).slice(0, 10).map((candidate, index) => ({ ...candidate, rank: index + 1 }));
  return { season: state.career.season, top, podium: top.slice(0, 3), winner: top[0] };
}

function renderAwardDialog(award) {
  els.awardStage.innerHTML = awardMarkup(award, true);
}

function awardMarkup(award, dialog) {
  return `
    <div class="award-card">
      <h3>Top 10 ${dialog ? `temporada ${award.season}` : ""}</h3>
      <ol class="award-list">
        ${award.top.map((candidate) => `<li class="${candidate.isPlayer ? "player-row" : ""}"><span>${candidate.rank}. ${candidate.name} - ${getClub(candidate.clubId).short}</span><strong>${Math.round(candidate.score)}</strong></li>`).join("")}
      </ol>
    </div>
    <div class="award-podium">
      ${award.podium.map((candidate, index) => `
        <article class="award-card${index === 0 ? " winner" : ""}">
          <p class="eyebrow">${index === 0 ? "Ganador" : `Top ${index + 1}`}</p>
          <h3>${candidate.name}</h3>
          <p>${getClub(candidate.clubId).name}</p>
          <p>${candidate.goals} G | ${candidate.assists} A</p>
        </article>
      `).join("")}
    </div>
  `;
}

function seasonHistoryMarkup() {
  if (!state.career.history.length) return "";
  const columns = historyColumns();
  return `
    <div class="table-shell">
      <table class="data-table">
        <thead><tr><th>Temp.</th><th>Club</th><th>Pos.</th><th>PJ</th>${columns.map(([label]) => `<th>${label}</th>`).join("")}<th>Nota</th><th>Pts</th></tr></thead>
        <tbody>
          ${state.career.history.map((summary) => `
            <tr>
              <td>${summary.season}</td><td>${getClub(summary.clubId).short}</td><td>${summary.rank}</td><td>${summary.stats.matches}</td>${columns.map(([, key]) => `<td>${summary.stats[key]}</td>`).join("")}<td>${summary.average}</td><td>${summary.points}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function historyColumns() {
  if (state.player.position === "gk") return [["Paradas", "saves"], ["Asist", "assists"]];
  if (state.player.position === "def") return [["Robos", "tackles"], ["P. clave", "keyPasses"]];
  if (state.player.position === "mid") return [["Asist", "assists"], ["P. clave", "keyPasses"]];
  return [["Goles", "goals"], ["Asist", "assists"]];
}

function tableMarkup(rows, playerClubId) {
  return `
    <div class="table-shell">
      <table class="data-table">
        <thead><tr><th>#</th><th>Club</th><th>PJ</th><th>G</th><th>E</th><th>P</th><th>GF</th><th>GC</th><th>DG</th><th>Pts</th></tr></thead>
        <tbody>
          ${rows.map((row, index) => `
            <tr class="${row.clubId === playerClubId ? "player-row" : ""}${state.career.lastChampionsQualifiers.includes(row.clubId) ? " champions-row" : ""}">
              <td>${index + 1}</td><td>${getClub(row.clubId).name}</td><td>${row.played}</td><td>${row.wins}</td><td>${row.draws}</td><td>${row.losses}</td><td>${row.gf}</td><td>${row.ga}</td><td>${row.gf - row.ga}</td><td><strong>${row.points}</strong></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function leaderMarkup(leaders) {
  return `
    <div class="leader-grid">
      ${[["Goleadores", leaders.goals], ["Asistentes", leaders.assists]].map(([title, bucket]) => `
        <article class="leader-card">
          <h3>${title}</h3>
          <ol class="leader-list">
            ${sortedLeaders(bucket).slice(0, 10).map((player, index) => `<li><span>${index + 1}. ${player.name} - ${getClub(player.clubId).short}</span><strong>${player.value}</strong></li>`).join("")}
          </ol>
        </article>
      `).join("")}
    </div>
  `;
}

function rollMarkup(roll) {
  return `<div class="dice-log"><span class="dice-chip">d20 ${roll.die}</span>${ATTRIBUTE_LABELS[roll.stat]} ${signed(roll.modifier)} = ${roll.total} contra DC ${roll.dc}: ${roll.success ? "exito" : "fallo"}.</div>`;
}

function emptyRow(clubId) {
  return { clubId, played: 0, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, points: 0 };
}

function emptyTotals() {
  return { matches: 0, goals: 0, assists: 0, keyPasses: 0, tackles: 0, saves: 0, decisions: 0, successes: 0, ratingPoints: 0, wins: 0, draws: 0, losses: 0 };
}

function emptyMatchStats() {
  return { goals: 0, assists: 0, keyPasses: 0, tackles: 0, saves: 0, decisions: 0, successes: 0, rating: 0 };
}

function mergeTotals(stats) {
  const totals = state.career.totals;
  totals.matches += 1;
  ["goals", "assists", "keyPasses", "tackles", "saves", "decisions", "successes"].forEach((key) => totals[key] += stats[key] || 0);
  totals.ratingPoints += stats.rating;
  totals.wins += stats.result === "W" ? 1 : 0;
  totals.draws += stats.result === "D" ? 1 : 0;
  totals.losses += stats.result === "L" ? 1 : 0;
}

function awardGrowth(stats) {
  state.career.xp += Math.round(stats.rating * 2 + (stats.result === "W" ? 3 : 1));
  if (stats.rating < 7.2 || Math.random() < 0.45) return;
  const focus = POSITIONS[state.player.position].focus;
  const attribute = focus[randomInt(0, focus.length - 1)];
  state.player.attributes[attribute] = clamp(state.player.attributes[attribute] + 1, 25, 99);
}

function buildHighlights(positionId) {
  return shuffle([...HIGHLIGHTS[positionId], ...HIGHLIGHTS[positionId]]).slice(0, 2).map((highlight) => structuredClone(highlight));
}

function statModifier(attribute) {
  return clamp(Math.floor((state.player.attributes[attribute] - 50) / 5), -4, 9);
}

function getOverall() {
  const focus = POSITIONS[state.player.position].focus;
  const focusAverage = focus.reduce((total, attribute) => total + state.player.attributes[attribute], 0) / focus.length;
  const totalAverage = ATTRIBUTES.reduce((total, attribute) => total + state.player.attributes[attribute], 0) / ATTRIBUTES.length;
  return Math.round(focusAverage * 0.72 + totalAverage * 0.28);
}

function drawPlayerPreview() {
  const ctx = els.playerPreview.getContext("2d");
  const skin = SKINS.find((candidate) => candidate.id === setup.skin);
  const selectedClub = getClub(setup.starterClub);
  drawPitch(ctx, 176, 208, 22);
  pixelRect(ctx, skin.shadow, 64, 28, 48, 42);
  pixelRect(ctx, skin.color, 68, 24, 40, 42);
  pixelRect(ctx, "#111827", 72, 36, 6, 6);
  pixelRect(ctx, "#111827", 98, 36, 6, 6);
  pixelRect(ctx, selectedClub.primary, 54, 74, 68, 54);
  pixelRect(ctx, selectedClub.secondary, 54, 74, 68, 8);
  pixelRect(ctx, selectedClub.secondary, 84, 82, 8, 46);
  pixelRect(ctx, skin.color, 42, 84, 12, 34);
  pixelRect(ctx, skin.color, 122, 84, 12, 34);
  pixelRect(ctx, "#10211a", 62, 128, 20, 38);
  pixelRect(ctx, "#10211a", 94, 128, 20, 38);
  pixelRect(ctx, selectedClub.secondary, 58, 166, 28, 10);
  pixelRect(ctx, selectedClub.secondary, 90, 166, 28, 10);
  const name = cleanName(els.playerName.value);
  pixelText(ctx, POSITIONS[setup.position].label.toUpperCase(), 88, 16, "#fff4d2", "center");
  pixelText(ctx, name, 88, 190, "#fff4d2", "center", name.length > 12 ? 9 : 12);
}

function drawMatchField(highlight, rival) {
  const ctx = els.matchCanvas.getContext("2d");
  const width = els.matchCanvas.width;
  const height = els.matchCanvas.height;
  drawPitch(ctx, width, height, 52);
  if (!state) {
    pixelText(ctx, "FUOL", width / 2, height / 2, "#fff4d2", "center", 30);
    return;
  }
  const own = getClub(state.career.clubId);
  drawPixelPlayer(ctx, width * 0.34, height * 0.52, own.primary, own.secondary, getSkin().color, true);
  drawPixelPlayer(ctx, width * 0.52, height * 0.35, own.primary, own.secondary, "#d19a66");
  drawPixelPlayer(ctx, width * 0.62, height * 0.62, rival?.primary || "#ef4444", rival?.secondary || "#111827", "#f1c27d");
  drawPixelPlayer(ctx, width * 0.73, height * 0.43, rival?.primary || "#ef4444", rival?.secondary || "#111827", "#8d5524");
  pixelRect(ctx, "#fff4d2", width * 0.41, height * 0.49, 10, 10);
  pixelText(ctx, highlight ? highlight.title.toUpperCase() : `${own.short} VS ${rival?.short || "FUOL"}`, width / 2, 38, "#fff4d2", "center", 20);
}

function drawPitch(ctx, width, height, stripe) {
  ctx.imageSmoothingEnabled = false;
  ctx.clearRect(0, 0, width, height);
  pixelRect(ctx, "#0d6b3b", 0, 0, width, height);
  stripes(ctx, width, height, stripe);
  outlineRect(ctx, "#f8f0cf", 18, 18, width - 36, height - 36, 4);
  if (width > 200) {
    pixelRect(ctx, "#f8f0cf", width / 2 - 2, 18, 4, height - 36);
    outlineRect(ctx, "#f8f0cf", width / 2 - 42, height / 2 - 42, 84, 84, 4);
  }
}

function drawPixelPlayer(ctx, x, y, kit, trim, skin, focus = false) {
  const px = Math.round(x);
  const py = Math.round(y);
  if (focus) outlineRect(ctx, "#ffd447", px - 20, py - 34, 40, 74, 4);
  pixelRect(ctx, skin, px - 8, py - 28, 16, 14);
  pixelRect(ctx, kit, px - 14, py - 12, 28, 28);
  pixelRect(ctx, trim, px - 14, py - 12, 28, 4);
  pixelRect(ctx, "#0b1320", px - 11, py + 16, 8, 20);
  pixelRect(ctx, "#0b1320", px + 3, py + 16, 8, 20);
}

function renderAtlas() {
  els.leagueTabs.innerHTML = "";
  LEAGUES.forEach((league) => {
    const button = document.createElement("button");
    button.className = `league-tab${league.id === activeAtlasLeague ? " active" : ""}`;
    button.type = "button";
    button.textContent = league.name;
    button.addEventListener("click", () => {
      activeAtlasLeague = league.id;
      renderAtlas();
    });
    els.leagueTabs.append(button);
  });
  els.atlasClubs.innerHTML = "";
  CLUBS.filter((candidate) => candidate.league === activeAtlasLeague)
    .sort((a, b) => b.rating - a.rating)
    .forEach((candidate) => els.atlasClubs.append(clubButton(candidate, false, null)));
}

function clubButton(candidate, active, onClick) {
  const button = document.createElement("button");
  button.className = `club-card${active ? " active" : ""}`;
  button.type = "button";
  button.innerHTML = `<span class="club-pixels" style="--club-a:${candidate.primary};--club-b:${candidate.secondary}"></span><span><strong>${candidate.name}</strong><small>${getLeague(candidate.league).competition} | Poder ${candidate.rating}</small></span>`;
  if (onClick) button.addEventListener("click", onClick);
  else button.disabled = true;
  return button;
}

function offerButton(candidate, note, onClick) {
  const button = document.createElement("button");
  button.className = "offer-card";
  button.type = "button";
  button.innerHTML = `<span class="club-pixels" style="--club-a:${candidate.primary};--club-b:${candidate.secondary}"></span><span><strong>${candidate.name}</strong><small>${getLeague(candidate.league).name} | ${note}</small></span>`;
  button.addEventListener("click", onClick);
  return button;
}

function statChip(attribute, value) {
  const chip = document.createElement("div");
  chip.className = "stat-chip";
  chip.innerHTML = `<span>${ATTRIBUTE_LABELS[attribute]} <strong>${value}</strong></span><span class="meter" style="--value:${value}%"><span></span></span>`;
  return chip;
}

function starterSelection() {
  return shuffle(LEAGUES).slice(0, 3).map((league) => shuffle(CLUBS.filter((candidate) => candidate.league === league.id && candidate.tier === 1))[0].id);
}

function sortedRows(table) {
  return Object.values(table).sort((a, b) => b.points - a.points || (b.gf - b.ga) - (a.gf - a.ga) || b.gf - a.gf || getClub(b.clubId).rating - getClub(a.clubId).rating);
}

function sortedLeaders(bucket) {
  return Object.values(bucket).sort((a, b) => b.value - a.value || b.ability - a.ability || a.name.localeCompare(b.name));
}

function weightedPick(items, key) {
  if (!items.length) return null;
  const total = items.reduce((sum, item) => sum + item[key] * item.ability, 0);
  let cursor = Math.random() * total;
  for (const item of items) {
    cursor -= item[key] * item.ability;
    if (cursor <= 0) return item;
  }
  return items[items.length - 1];
}

function knockoutWinner(homeId, awayId) {
  const ratingEdge = getClub(homeId).rating - getClub(awayId).rating;
  return Math.random() < 1 / (1 + Math.exp(-ratingEdge / 7)) ? homeId : awayId;
}

function poisson(lambda) {
  let count = 0;
  let product = 1;
  const limit = Math.exp(-lambda);
  while (product > limit && count < 7) {
    count += 1;
    product *= Math.random();
  }
  return Math.max(0, count - 1);
}

function resultCode(forGoals, againstGoals) {
  return forGoals > againstGoals ? "W" : forGoals < againstGoals ? "L" : "D";
}

function resultBonus(result) {
  return result === "W" ? 0.42 : result === "D" ? 0.16 : 0;
}

function getClub(id) { return CLUBS.find((candidate) => candidate.id === id); }
function getLeague(id) { return LEAGUES.find((candidate) => candidate.id === id); }
function getSkin() { return SKINS.find((candidate) => candidate.id === state.player.skin); }

function resetCareer() {
  localStorage.removeItem(STORAGE_KEY);
  state = null;
  setup = createSetupState();
  els.playerName.value = "Canterano";
  renderSkins();
  renderPositions();
  renderSetup();
}

function normalizeState() {
  state.career.totals = { ...emptyTotals(), ...state.career.totals };
  state.career.history ||= [];
  state.career.awards ||= [];
  state.career.lastChampionsQualifiers ||= [];
  state.player.attributes = { ...POSITIONS[state.player.position].base, ...state.player.attributes };
  Object.values(state.world.leagues).forEach((league) => league.playerResults ||= []);
  selectedStatsLeague ||= getClub(state.career.clubId).league;
  selectedTableLeague ||= getClub(state.career.clubId).league;
}

function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function loadState() { try { return JSON.parse(localStorage.getItem(STORAGE_KEY)); } catch (error) { return null; } }
function cleanName(value) { return (value || "Canterano").replace(/[<>]/g, "").trim().slice(0, 18) || "Canterano"; }
function slug(value) { return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
function signed(value) { return value >= 0 ? `+${value}` : `${value}`; }
function uniqueClubs(items) { const seen = new Set(); return items.filter((item) => seen.has(item.id) ? false : (seen.add(item.id), true)); }
function clamp(value, min, max) { return Math.min(max, Math.max(min, value)); }
function randomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function shuffle(items) { const copy = [...items]; for (let index = copy.length - 1; index > 0; index -= 1) { const swap = randomInt(0, index); [copy[index], copy[swap]] = [copy[swap], copy[index]]; } return copy; }
function pixelRect(ctx, color, x, y, width, height) { ctx.fillStyle = color; ctx.fillRect(Math.round(x), Math.round(y), Math.round(width), Math.round(height)); }
function outlineRect(ctx, color, x, y, width, height, size) { pixelRect(ctx, color, x, y, width, size); pixelRect(ctx, color, x, y + height - size, width, size); pixelRect(ctx, color, x, y, size, height); pixelRect(ctx, color, x + width - size, y, size, height); }
function stripes(ctx, width, height, size) { for (let x = 0; x < width; x += size * 2) { ctx.fillStyle = "rgba(255, 255, 255, 0.06)"; ctx.fillRect(x, 0, size, height); } }
function pixelText(ctx, text, x, y, color, align = "left", size = 12) { ctx.fillStyle = color; ctx.font = `700 ${size}px "Courier New", monospace`; ctx.textAlign = align; ctx.fillText(text, x, y); }
