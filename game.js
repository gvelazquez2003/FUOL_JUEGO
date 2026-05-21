const STORAGE_KEY = "fuol-carrera-pixel-v1";
const MAX_SEASONS = 15;

const LEAGUES = [
  { id: "eng", name: "Inglaterra", competition: "Premier League" },
  { id: "esp", name: "Espana", competition: "LALIGA EA SPORTS" },
  { id: "ger", name: "Alemania", competition: "Bundesliga" },
  { id: "ita", name: "Italia", competition: "Serie A" },
  { id: "fra", name: "Francia", competition: "Ligue 1" },
];

const CLUBS = [
  club("arsenal", "Arsenal", "ARS", "eng", 90, 4, "#ef3340", "#f7f1d2"),
  club("aston-villa", "Aston Villa", "AVL", "eng", 83, 3, "#7a274a", "#84d7eb"),
  club("bournemouth", "AFC Bournemouth", "BOU", "eng", 78, 2, "#d61f2c", "#111111"),
  club("brentford", "Brentford", "BRE", "eng", 76, 2, "#ef4444", "#f8fafc"),
  club("brighton", "Brighton", "BHA", "eng", 80, 3, "#2563eb", "#f8fafc"),
  club("burnley", "Burnley", "BUR", "eng", 69, 1, "#6b1739", "#77d5f7"),
  club("chelsea", "Chelsea", "CHE", "eng", 86, 4, "#1557d6", "#f8fafc"),
  club("crystal-palace", "Crystal Palace", "CRY", "eng", 78, 2, "#1d4ed8", "#ef4444"),
  club("everton", "Everton", "EVE", "eng", 74, 1, "#2456dc", "#f8fafc"),
  club("fulham", "Fulham", "FUL", "eng", 76, 2, "#f8fafc", "#111827"),
  club("leeds", "Leeds United", "LEE", "eng", 70, 1, "#f8fafc", "#facc15"),
  club("liverpool", "Liverpool", "LIV", "eng", 91, 4, "#c8102e", "#f8fafc"),
  club("man-city", "Manchester City", "MCI", "eng", 92, 4, "#7dd3fc", "#ffffff"),
  club("man-united", "Manchester United", "MUN", "eng", 84, 3, "#da291c", "#111827"),
  club("newcastle", "Newcastle United", "NEW", "eng", 85, 3, "#111827", "#f8fafc"),
  club("nottingham", "Nottingham Forest", "NFO", "eng", 77, 2, "#dc2626", "#f8fafc"),
  club("sunderland", "Sunderland", "SUN", "eng", 68, 1, "#dc2626", "#f8fafc"),
  club("tottenham", "Tottenham Hotspur", "TOT", "eng", 84, 3, "#f8fafc", "#172554"),
  club("west-ham", "West Ham United", "WHU", "eng", 75, 2, "#7f1d1d", "#67e8f9"),
  club("wolves", "Wolverhampton Wanderers", "WOL", "eng", 72, 1, "#f59e0b", "#111827"),

  club("alaves", "Deportivo Alaves", "ALA", "esp", 70, 1, "#2563eb", "#f8fafc"),
  club("athletic", "Athletic Club", "ATH", "esp", 84, 3, "#ef4444", "#f8fafc"),
  club("atletico", "Atletico de Madrid", "ATM", "esp", 88, 4, "#ef4444", "#f8fafc"),
  club("barcelona", "FC Barcelona", "BAR", "esp", 92, 4, "#7c2d6b", "#1d4ed8"),
  club("celta", "RC Celta", "CEL", "esp", 76, 2, "#7dd3fc", "#ef4444"),
  club("elche", "Elche CF", "ELC", "esp", 68, 1, "#f8fafc", "#16a34a"),
  club("espanyol", "RCD Espanyol", "ESP", "esp", 73, 1, "#2563eb", "#f8fafc"),
  club("getafe", "Getafe CF", "GET", "esp", 74, 2, "#1d4ed8", "#f8fafc"),
  club("girona", "Girona FC", "GIR", "esp", 78, 2, "#ef4444", "#f8fafc"),
  club("levante", "Levante UD", "LEV", "esp", 69, 1, "#1d4ed8", "#9f1239"),
  club("mallorca", "RCD Mallorca", "MLL", "esp", 75, 2, "#dc2626", "#111827"),
  club("osasuna", "CA Osasuna", "OSA", "esp", 76, 2, "#b91c1c", "#172554"),
  club("rayo", "Rayo Vallecano", "RAY", "esp", 74, 2, "#f8fafc", "#dc2626"),
  club("betis", "Real Betis", "BET", "esp", 82, 3, "#16a34a", "#f8fafc"),
  club("real-madrid", "Real Madrid", "RMA", "esp", 94, 4, "#f8fafc", "#d4af37"),
  club("real-oviedo", "Real Oviedo", "OVI", "esp", 67, 1, "#1d4ed8", "#facc15"),
  club("real-sociedad", "Real Sociedad", "RSO", "esp", 82, 3, "#2563eb", "#f8fafc"),
  club("sevilla", "Sevilla FC", "SEV", "esp", 77, 2, "#f8fafc", "#dc2626"),
  club("valencia", "Valencia CF", "VAL", "esp", 75, 2, "#f8fafc", "#111827"),
  club("villarreal", "Villarreal CF", "VIL", "esp", 84, 3, "#fde047", "#1d4ed8"),

  club("augsburg", "FC Augsburg", "FCA", "ger", 74, 2, "#dc2626", "#16a34a"),
  club("leverkusen", "Bayer Leverkusen", "B04", "ger", 88, 4, "#111827", "#dc2626"),
  club("bayern", "Bayern Munich", "FCB", "ger", 94, 4, "#dc2626", "#2563eb"),
  club("dortmund", "Borussia Dortmund", "BVB", "ger", 89, 4, "#fde047", "#111827"),
  club("monchengladbach", "Borussia Monchengladbach", "BMG", "ger", 76, 2, "#f8fafc", "#111827"),
  club("frankfurt", "Eintracht Frankfurt", "SGE", "ger", 81, 3, "#111827", "#dc2626"),
  club("freiburg", "SC Freiburg", "SCF", "ger", 79, 2, "#dc2626", "#111827"),
  club("hamburg", "Hamburger SV", "HSV", "ger", 70, 1, "#f8fafc", "#2563eb"),
  club("heidenheim", "1. FC Heidenheim", "FCH", "ger", 68, 1, "#dc2626", "#2563eb"),
  club("hoffenheim", "TSG Hoffenheim", "TSG", "ger", 78, 2, "#2563eb", "#f8fafc"),
  club("koln", "1. FC Koln", "KOE", "ger", 70, 1, "#f8fafc", "#dc2626"),
  club("leipzig", "RB Leipzig", "RBL", "ger", 86, 3, "#f8fafc", "#dc2626"),
  club("mainz", "1. FSV Mainz 05", "M05", "ger", 75, 2, "#dc2626", "#f8fafc"),
  club("st-pauli", "FC St. Pauli", "STP", "ger", 69, 1, "#5b3421", "#f8fafc"),
  club("stuttgart", "VfB Stuttgart", "VFB", "ger", 84, 3, "#f8fafc", "#dc2626"),
  club("union", "1. FC Union Berlin", "FCU", "ger", 73, 1, "#dc2626", "#f8fafc"),
  club("werder", "Werder Bremen", "SVW", "ger", 74, 2, "#16a34a", "#f8fafc"),
  club("wolfsburg", "VfL Wolfsburg", "WOB", "ger", 72, 1, "#84cc16", "#f8fafc"),

  club("atalanta", "Atalanta", "ATA", "ita", 86, 3, "#111827", "#2563eb"),
  club("bologna", "Bologna", "BOL", "ita", 82, 3, "#1d3557", "#9f1239"),
  club("cagliari", "Cagliari", "CAG", "ita", 70, 1, "#172554", "#b91c1c"),
  club("como", "Como", "COM", "ita", 76, 2, "#2563eb", "#f8fafc"),
  club("cremonese", "Cremonese", "CRE", "ita", 68, 1, "#dc2626", "#94a3b8"),
  club("fiorentina", "Fiorentina", "FIO", "ita", 80, 3, "#7e22ce", "#f8fafc"),
  club("genoa", "Genoa", "GEN", "ita", 74, 2, "#172554", "#b91c1c"),
  club("verona", "Hellas Verona", "VER", "ita", 71, 1, "#1d4ed8", "#fde047"),
  club("inter", "Inter", "INT", "ita", 91, 4, "#111827", "#2563eb"),
  club("juventus", "Juventus", "JUV", "ita", 87, 4, "#111827", "#f8fafc"),
  club("lazio", "Lazio", "LAZ", "ita", 82, 3, "#7dd3fc", "#f8fafc"),
  club("lecce", "Lecce", "LEC", "ita", 69, 1, "#dc2626", "#fde047"),
  club("milan", "AC Milan", "MIL", "ita", 88, 4, "#111827", "#dc2626"),
  club("napoli", "Napoli", "NAP", "ita", 89, 4, "#38bdf8", "#f8fafc"),
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
  club("marseille", "Olympique de Marseille", "OM", "fra", 84, 3, "#f8fafc", "#38bdf8"),
  club("metz", "FC Metz", "MET", "fra", 67, 1, "#7f1d1d", "#f8fafc"),
  club("monaco", "AS Monaco", "ASM", "fra", 85, 3, "#dc2626", "#f8fafc"),
  club("nantes", "FC Nantes", "NAN", "fra", 71, 1, "#fde047", "#16a34a"),
  club("nice", "OGC Nice", "NIC", "fra", 79, 2, "#111827", "#dc2626"),
  club("paris-fc", "Paris FC", "PFC", "fra", 68, 1, "#172554", "#7dd3fc"),
  club("psg", "Paris Saint-Germain", "PSG", "fra", 93, 4, "#172554", "#dc2626"),
  club("rennes", "Stade Rennais", "REN", "fra", 78, 2, "#dc2626", "#111827"),
  club("strasbourg", "RC Strasbourg", "RCS", "fra", 77, 2, "#2563eb", "#f8fafc"),
  club("toulouse", "Toulouse FC", "TFC", "fra", 74, 2, "#7e22ce", "#f8fafc"),
];

const SKINS = [
  { id: "skin-1", label: "Bronce", color: "#8d5524", shadow: "#5e3516" },
  { id: "skin-2", label: "Miel", color: "#c68642", shadow: "#8c5324" },
  { id: "skin-3", label: "Arena", color: "#f1c27d", shadow: "#b98245" },
  { id: "skin-4", label: "Marfil", color: "#ffdbac", shadow: "#c28b5b" },
];

const ATTRIBUTES = [
  "pace",
  "shooting",
  "passing",
  "dribbling",
  "defending",
  "reflexes",
  "stamina",
  "composure",
];

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
  gk: {
    label: "Portero",
    lane: "Arco",
    description: "Reflejos, mano a mano y salida.",
    base: {
      pace: 42,
      shooting: 34,
      passing: 56,
      dribbling: 36,
      defending: 64,
      reflexes: 77,
      stamina: 58,
      composure: 68,
    },
    focus: ["reflexes", "composure", "passing"],
  },
  def: {
    label: "Defensa",
    lane: "Muro",
    description: "Cruces, duelos y primer pase.",
    base: {
      pace: 60,
      shooting: 42,
      passing: 58,
      dribbling: 48,
      defending: 76,
      reflexes: 54,
      stamina: 70,
      composure: 64,
    },
    focus: ["defending", "stamina", "passing"],
  },
  mid: {
    label: "Mediocampo",
    lane: "Motor",
    description: "Vision, ritmo y control.",
    base: {
      pace: 62,
      shooting: 58,
      passing: 75,
      dribbling: 68,
      defending: 60,
      reflexes: 50,
      stamina: 74,
      composure: 69,
    },
    focus: ["passing", "stamina", "composure"],
  },
  wing: {
    label: "Extremo",
    lane: "Banda",
    description: "Desborde y centros al area.",
    base: {
      pace: 77,
      shooting: 64,
      passing: 65,
      dribbling: 76,
      defending: 44,
      reflexes: 48,
      stamina: 67,
      composure: 63,
    },
    focus: ["pace", "dribbling", "passing"],
  },
  st: {
    label: "Delantero",
    lane: "Area",
    description: "Gol, ruptura y sangre fria.",
    base: {
      pace: 71,
      shooting: 78,
      passing: 52,
      dribbling: 68,
      defending: 38,
      reflexes: 46,
      stamina: 64,
      composure: 72,
    },
    focus: ["shooting", "composure", "pace"],
  },
};

const TRAINING_DRILLS = [
  {
    id: "finishing",
    title: "Definicion",
    note: "+2 Remate, +1 Temple",
    gains: { shooting: 2, composure: 1 },
  },
  {
    id: "rondo",
    title: "Rondo",
    note: "+2 Pase, +1 Regate",
    gains: { passing: 2, dribbling: 1 },
  },
  {
    id: "sprints",
    title: "Series",
    note: "+2 Ritmo, +1 Fisico",
    gains: { pace: 2, stamina: 1 },
  },
  {
    id: "duels",
    title: "Duelos",
    note: "+2 Marca, +1 Reflejos",
    gains: { defending: 2, reflexes: 1 },
  },
];

const HIGHLIGHTS = {
  gk: [
    scenario("Mano a mano", "El rival queda libre dentro del area.", [
      option("Achicar angulo", "reflexes", 62, "save", "Tapas el remate con el cuerpo."),
      option("Esperar tiro", "composure", 66, "save", "Lees el pie de apoyo y desvías."),
      option("Salida larga", "passing", 70, "counter", "Robas el momento y lanzas la contra."),
    ]),
    scenario("Centro venenoso", "La pelota cae entre tu central y el delantero.", [
      option("Salir por alto", "reflexes", 60, "save", "Cazas el centro en el trafico."),
      option("Golpear de puno", "defending", 63, "save", "Limpias el area de un manotazo."),
      option("Asegurar abajo", "composure", 68, "save", "Amarras el rebote antes del remate."),
    ]),
  ],
  def: [
    scenario("Carrera al espacio", "Un punta te ataca la espalda.", [
      option("Cruce limpio", "defending", 62, "tackle", "Llegas al corte sin falta."),
      option("Cuerpo a cuerpo", "stamina", 65, "tackle", "Ganas la disputa y enfrías el ataque."),
      option("Pase vertical", "passing", 69, "keyPass", "Recuperas y rompes dos lineas."),
    ]),
    scenario("Balon parado", "El saque de esquina cae en tu zona.", [
      option("Despeje fuerte", "defending", 61, "tackle", "Alejas el peligro del area."),
      option("Cabecear al punta", "passing", 67, "keyPass", "La segunda jugada sale con ventaja."),
      option("Seguir marca", "composure", 65, "tackle", "No compras el bloqueo rival."),
    ]),
  ],
  mid: [
    scenario("Giro entre lineas", "Recibes con rivales cerrando la salida.", [
      option("Pase filtrado", "passing", 61, "assist", "La asistencia deja al nueve de cara."),
      option("Conducir y soltar", "dribbling", 64, "keyPass", "Arrastras marcas y abres el carril."),
      option("Remate lejano", "shooting", 71, "goal", "Tu disparo besa el poste por dentro."),
    ]),
    scenario("Presion alta", "El equipo necesita escapar con la pelota limpia.", [
      option("Pared corta", "passing", 60, "keyPass", "La presion queda atras."),
      option("Cambio de frente", "composure", 66, "assist", "La banda opuesta recibe con metros."),
      option("Robo tras perdida", "defending", 68, "tackle", "Reaccionas antes de la contra."),
    ]),
  ],
  wing: [
    scenario("Uno contra uno", "La banda queda abierta frente al lateral.", [
      option("Recorte corto", "dribbling", 61, "goal", "Entras al area y cruzas el tiro."),
      option("Centro tenso", "passing", 63, "assist", "Tu envio llega al punto penal."),
      option("Picar al fondo", "pace", 65, "keyPass", "Ganas linea de fondo y mantienes la jugada."),
    ]),
    scenario("Transicion", "El rival esta mal parado y la grada se levanta.", [
      option("Sprint exterior", "pace", 60, "assist", "Tu pase atras encuentra rematador."),
      option("Diagonal al arco", "shooting", 68, "goal", "Atacas el hueco como cuchillo."),
      option("Freno y pase", "composure", 65, "keyPass", "El ataque respira y conserva ventaja."),
    ]),
  ],
  st: [
    scenario("Pase al hueco", "La linea rival queda rota por un segundo.", [
      option("Definir de primera", "shooting", 61, "goal", "La red se mueve antes del cierre."),
      option("Amagar al portero", "dribbling", 67, "goal", "Lo sientas y empujas la pelota."),
      option("Ceder al socio", "passing", 66, "assist", "Tu descarga vale medio gol."),
    ]),
    scenario("Area cargada", "El centro cae entre dos centrales.", [
      option("Atacar primer palo", "pace", 63, "goal", "Ganas la carrera y cambias la direccion."),
      option("Bajar de pecho", "composure", 68, "keyPass", "La segunda jugada queda viva."),
      option("Media vuelta", "shooting", 70, "goal", "Te inventas un remate sin angulo."),
    ]),
  ],
};

const els = {
  setupScreen: document.querySelector("#setupScreen"),
  careerScreen: document.querySelector("#careerScreen"),
  playerForm: document.querySelector("#playerForm"),
  playerName: document.querySelector("#playerName"),
  kitColor: document.querySelector("#kitColor"),
  trimColor: document.querySelector("#trimColor"),
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
  offerPanel: document.querySelector("#offerPanel"),
  offerTitle: document.querySelector("#offerTitle"),
  offerSummary: document.querySelector("#offerSummary"),
  offerChoices: document.querySelector("#offerChoices"),
  openAtlasButton: document.querySelector("#openAtlasButton"),
  closeAtlasButton: document.querySelector("#closeAtlasButton"),
  clubAtlas: document.querySelector("#clubAtlas"),
  leagueTabs: document.querySelector("#leagueTabs"),
  atlasClubs: document.querySelector("#atlasClubs"),
  resetButton: document.querySelector("#resetButton"),
};

let state = loadState();
let setup = createSetupState();
let activeAtlasLeague = LEAGUES[0].id;

boot();

function club(id, name, short, league, rating, tier, primary, secondary) {
  return { id, name, short, league, rating, tier, primary, secondary };
}

function scenario(title, copy, options) {
  return { title, copy, options };
}

function option(label, stat, difficulty, reward, success) {
  return { label, stat, difficulty, reward, success };
}

function boot() {
  renderSkins();
  renderPositions();
  renderAtlas();
  bindEvents();

  if (state) {
    normalizeState();
    renderCareer();
    return;
  }

  renderSetup();
}

function bindEvents() {
  els.playerForm.addEventListener("submit", startCareer);
  els.kitColor.addEventListener("input", updateSetupKit);
  els.trimColor.addEventListener("input", updateSetupKit);
  els.playerName.addEventListener("input", drawPlayerPreview);
  els.openAtlasButton.addEventListener("click", () => els.clubAtlas.showModal());
  els.closeAtlasButton.addEventListener("click", () => els.clubAtlas.close());
  els.resetButton.addEventListener("click", resetCareer);
}

function renderSetup() {
  els.setupScreen.classList.remove("hidden");
  els.careerScreen.classList.add("hidden");
  renderStarterClubs();
  drawPlayerPreview();
  renderStarterStats();
}

function createSetupState() {
  const starters = starterSelection();
  return {
    skin: SKINS[2].id,
    position: "st",
    kitColor: "#2dd4bf",
    trimColor: "#facc15",
    starters,
    starterClub: starters[0],
  };
}

function renderSkins() {
  els.skinChoices.innerHTML = "";
  SKINS.forEach((skin) => {
    const button = document.createElement("button");
    button.className = "skin-button";
    button.type = "button";
    button.title = skin.label;
    button.style.setProperty("--skin", skin.color);
    button.addEventListener("click", () => {
      setup.skin = skin.id;
      renderSkins();
      drawPlayerPreview();
    });
    if (setup.skin === skin.id) {
      button.classList.add("active");
    }
    els.skinChoices.append(button);
  });
}

function renderPositions() {
  els.positionChoices.innerHTML = "";
  Object.entries(POSITIONS).forEach(([id, position]) => {
    const button = document.createElement("button");
    button.className = "position-button";
    button.type = "button";
    button.innerHTML = `<strong>${position.label}</strong><small>${position.description}</small>`;
    button.addEventListener("click", () => {
      setup.position = id;
      els.positionHint.textContent = position.label;
      renderPositions();
      drawPlayerPreview();
      renderStarterStats();
    });
    if (setup.position === id) {
      button.classList.add("active");
    }
    els.positionChoices.append(button);
  });
}

function renderStarterClubs() {
  els.starterClubs.innerHTML = "";
  setup.starters.forEach((clubId) => {
    const club = getClub(clubId);
    els.starterClubs.append(clubButton(club, setup.starterClub === club.id, () => {
      setup.starterClub = club.id;
      renderStarterClubs();
    }));
  });
}

function renderStarterStats() {
  els.starterStats.innerHTML = "";
  POSITIONS[setup.position].focus.forEach((attribute) => {
    els.starterStats.append(statChip(attribute, POSITIONS[setup.position].base[attribute]));
  });
}

function updateSetupKit() {
  setup.kitColor = els.kitColor.value;
  setup.trimColor = els.trimColor.value;
  drawPlayerPreview();
}

function startCareer(event) {
  event.preventDefault();
  const firstClub = setup.starterClub || setup.starters[0];
  const position = POSITIONS[setup.position];
  state = {
    player: {
      name: cleanName(els.playerName.value),
      skin: setup.skin,
      kitColor: setup.kitColor,
      trimColor: setup.trimColor,
      position: setup.position,
      attributes: structuredClone(position.base),
    },
    career: {
      season: 1,
      clubId: firstClub,
      reputation: 12,
      xp: 0,
      trainingUsed: false,
      history: [],
      totals: emptyTotals(),
    },
    season: createSeason(firstClub, 1),
    match: null,
    offers: null,
    message: `Firmaste con ${getClub(firstClub).name}. Tu carrera empieza con minutos de verdad.`,
  };
  saveState();
  renderCareer();
}

function renderCareer() {
  els.setupScreen.classList.add("hidden");
  els.careerScreen.classList.remove("hidden");
  renderHud();
  renderRoute();
  renderTraining();
  renderDossier();
  renderOfferPanel();
  renderMatchPanel();
}

function renderHud() {
  const club = getClub(state.career.clubId);
  const league = getLeague(club.league);
  const seasonMatches = state.season.results.length;
  const cardData = [
    {
      className: "club",
      label: state.player.name,
      value: `<span class="hud-club"><span class="kit-pixels" style="--club-a:${club.primary};--club-b:${club.secondary}"></span><span>${club.name}<br><small>${league.name}</small></span></span>`,
    },
    { label: "Temporada", value: `${state.career.season}/${MAX_SEASONS}` },
    { label: "Posicion", value: POSITIONS[state.player.position].label },
    { label: "Reputacion", value: state.career.reputation },
    { label: "Partidos", value: `${seasonMatches}/${state.season.fixtures.length}` },
  ];

  els.careerHud.innerHTML = cardData
    .map(
      (card) => `
        <article class="hud-card ${card.className || ""}">
          <span class="hud-label">${card.label}</span>
          <strong>${card.value}</strong>
        </article>
      `,
    )
    .join("");
}

function renderRoute() {
  const club = getClub(state.career.clubId);
  els.seasonTitle.textContent = `Temporada ${state.career.season} en ${club.short}`;
  els.seasonStatus.textContent = state.offers ? "Mercado" : "En curso";
  els.seasonRoute.innerHTML = "";

  state.season.fixtures.forEach((fixture, index) => {
    const rival = getClub(fixture);
    const result = state.season.results[index];
    const node = document.createElement("article");
    node.className = "route-node";
    if (result) {
      node.classList.add("done");
    } else if (index === state.season.results.length && !state.offers) {
      node.classList.add("current");
    }
    node.innerHTML = `
      <strong>Jornada ${index + 1}: ${rival.short}</strong>
      <small>${result ? result.summary : `${rival.name} exige un highlight decisivo.`}</small>
    `;
    els.seasonRoute.append(node);
  });
}

function renderTraining() {
  els.trainingDock.innerHTML = "";

  if (state.offers) {
    els.trainingDock.innerHTML = "<p>La temporada ya cerro. El proximo paso esta en el mercado.</p>";
    return;
  }

  const intro = document.createElement("p");
  intro.textContent = state.career.trainingUsed
    ? "Ya gastaste la sesion de microciclo antes de este partido."
    : "Antes del partido puedes elegir un microciclo de entrenamiento.";
  els.trainingDock.append(intro);

  const dock = document.createElement("div");
  dock.className = "training-options";
  TRAINING_DRILLS.forEach((drill) => {
    const button = document.createElement("button");
    button.className = "training-button";
    button.type = "button";
    button.disabled = state.career.trainingUsed || Boolean(state.match);
    button.innerHTML = `<strong>${drill.title}</strong><small>${drill.note}</small>`;
    button.addEventListener("click", () => train(drill));
    dock.append(button);
  });
  els.trainingDock.append(dock);
}

function train(drill) {
  Object.entries(drill.gains).forEach(([attribute, gain]) => {
    state.player.attributes[attribute] = clamp(state.player.attributes[attribute] + gain, 30, 99);
  });
  state.career.trainingUsed = true;
  state.message = `${drill.title}: el cuerpo tecnico ve progreso antes del pitazo.`;
  saveState();
  renderCareer();
}

function renderMatchPanel() {
  const fixture = currentFixture();
  const rival = fixture ? getClub(fixture) : null;

  if (state.offers) {
    els.matchBadge.textContent = "Cierre";
    els.matchStory.innerHTML = `
      <strong>Temporada completada</strong>
      <p>${state.message}</p>
    `;
    els.matchActions.innerHTML = "";
    drawMatchField(null, null);
    return;
  }

  if (!state.match && rival) {
    els.matchBadge.textContent = "Previo";
    els.matchStory.innerHTML = `
      <strong>${getClub(state.career.clubId).short} vs ${rival.short}</strong>
      <p>${state.message || "La camara busca tu jugada clave."}</p>
    `;
    els.matchActions.innerHTML = "";
    const button = document.createElement("button");
    button.className = "pixel-button primary";
    button.type = "button";
    button.textContent = "Jugar highlight";
    button.addEventListener("click", beginMatch);
    els.matchActions.append(button);
    drawMatchField(null, rival);
    return;
  }

  if (state.match) {
    const highlight = state.match.highlights[state.match.step];
    els.matchBadge.textContent = `Accion ${state.match.step + 1}/3`;
    els.matchStory.innerHTML = `
      <strong>${highlight.title}</strong>
      <p>${highlight.copy}</p>
      <p>Marcador live: ${state.match.scoreFor}-${state.match.scoreAgainst}</p>
    `;
    els.matchActions.innerHTML = "";
    highlight.options.forEach((choice) => {
      const button = document.createElement("button");
      button.className = "action-button";
      button.type = "button";
      button.innerHTML = `<strong>${choice.label}</strong><small>${ATTRIBUTE_LABELS[choice.stat]} contra dificultad ${choice.difficulty}</small>`;
      button.addEventListener("click", () => resolveHighlight(choice));
      els.matchActions.append(button);
    });
    drawMatchField(highlight, getClub(state.match.opponentId));
  }
}

function beginMatch() {
  const opponentId = currentFixture();
  state.match = {
    opponentId,
    highlights: buildHighlights(state.player.position),
    step: 0,
    scoreFor: 0,
    scoreAgainst: 0,
    log: [],
    stats: emptyMatchStats(),
  };
  state.message = "El arbitro habilita la jugada.";
  saveState();
  renderCareer();
}

function resolveHighlight(choice) {
  const rival = getClub(state.match.opponentId);
  const playerValue = state.player.attributes[choice.stat];
  const pressure = Math.max(0, rival.rating - getClub(state.career.clubId).rating) * 0.32;
  const roll = randomInt(-10, 12);
  const success = playerValue + state.career.reputation * 0.08 + roll >= choice.difficulty + pressure;
  const highlight = state.match.highlights[state.match.step];

  if (success) {
    applyReward(choice.reward);
    state.match.log.push(`${highlight.title}: ${choice.success}`);
    state.message = choice.success;
  } else {
    applyFailure();
    state.match.log.push(`${highlight.title}: el rival gana el duelo.`);
    state.message = "La accion se escapa. Todavia queda partido.";
  }

  state.match.step += 1;
  if (state.match.step >= state.match.highlights.length) {
    finishMatch();
    return;
  }

  saveState();
  renderCareer();
}

function applyReward(reward) {
  const stats = state.match.stats;
  stats.rating += 0.7;

  if (reward === "goal") {
    stats.goals += 1;
    state.match.scoreFor += 1;
  }
  if (reward === "assist") {
    stats.assists += 1;
    state.match.scoreFor += 1;
  }
  if (reward === "keyPass") {
    stats.keyPasses += 1;
    if (Math.random() > 0.62) {
      state.match.scoreFor += 1;
    }
  }
  if (reward === "tackle") {
    stats.tackles += 1;
  }
  if (reward === "save") {
    stats.saves += 1;
  }
  if (reward === "counter") {
    stats.saves += 1;
    stats.keyPasses += 1;
    if (Math.random() > 0.55) {
      state.match.scoreFor += 1;
    }
  }
}

function applyFailure() {
  state.match.stats.rating -= 0.35;
  if (["gk", "def"].includes(state.player.position) || Math.random() > 0.5) {
    state.match.scoreAgainst += 1;
  }
}

function finishMatch() {
  const club = getClub(state.career.clubId);
  const rival = getClub(state.match.opponentId);
  const swing = randomInt(-1, 1) + Math.round((club.rating - rival.rating) / 18);
  state.match.scoreFor = Math.max(0, state.match.scoreFor + Math.max(0, swing));
  state.match.scoreAgainst = Math.max(0, state.match.scoreAgainst + Math.max(0, -swing));

  const result = state.match.scoreFor > state.match.scoreAgainst
    ? "W"
    : state.match.scoreFor < state.match.scoreAgainst
      ? "L"
      : "D";
  const matchStats = state.match.stats;
  matchStats.rating = clamp(Number((6.1 + matchStats.rating + resultBonus(result)).toFixed(1)), 4.8, 10);
  matchStats.result = result;
  matchStats.score = `${state.match.scoreFor}-${state.match.scoreAgainst}`;
  matchStats.opponentId = rival.id;
  matchStats.summary = `${club.short} ${matchStats.score} ${rival.short}. Nota ${matchStats.rating}.`;

  state.season.results.push(matchStats);
  mergeTotals(matchStats);
  awardGrowth(matchStats);
  state.career.trainingUsed = false;
  state.match = null;
  state.message = matchStats.summary;

  if (state.season.results.length >= state.season.fixtures.length) {
    closeSeason();
  }

  saveState();
  renderCareer();
}

function closeSeason() {
  const summary = summarizeSeason();
  state.career.reputation = clamp(
    state.career.reputation + summary.repGain,
    1,
    99,
  );
  state.career.history.push(summary);
  state.message = `${summary.headline} Sumaste ${summary.repGain} de reputacion.`;

  if (state.career.season >= MAX_SEASONS) {
    state.offers = {
      final: true,
      summary,
      clubs: [],
    };
    return;
  }

  state.offers = {
    final: false,
    summary,
    clubs: offerSelection(summary),
  };
}

function renderOfferPanel() {
  if (!state.offers) {
    els.offerPanel.classList.add("hidden");
    return;
  }

  els.offerPanel.classList.remove("hidden");
  const summary = state.offers.summary;
  els.offerTitle.textContent = state.offers.final ? "Salon de carrera" : "Mercado de verano";
  els.offerSummary.textContent = state.offers.final
    ? `Llegaste a 15 temporadas. Cierre: ${summary.headline} Tu legado queda guardado en el dossier.`
    : `${summary.headline} Llegan tres clubes segun tu temporada y siempre puedes quedarte.`;
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

  const stay = getClub(state.career.clubId);
  els.offerChoices.append(offerButton(stay, "Seguir y buscar continuidad", () => acceptOffer(stay.id)));
  state.offers.clubs.forEach((clubId) => {
    const offer = getClub(clubId);
    els.offerChoices.append(offerButton(offer, "Firmar nuevo reto", () => acceptOffer(offer.id)));
  });
}

function acceptOffer(clubId) {
  state.career.season += 1;
  state.career.clubId = clubId;
  state.career.trainingUsed = false;
  state.season = createSeason(clubId, state.career.season);
  state.offers = null;
  state.message = `Temporada ${state.career.season}: ${getClub(clubId).name} te entrega camiseta.`;
  saveState();
  renderCareer();
}

function renderDossier() {
  const overall = getOverall();
  els.overallBadge.textContent = `OVR ${overall}`;
  els.attributeGrid.innerHTML = "";
  ATTRIBUTES.forEach((attribute) => {
    els.attributeGrid.append(statChip(attribute, state.player.attributes[attribute]));
  });

  const totals = state.career.totals;
  const rows = [
    ["PJ", totals.matches],
    ["Goles", totals.goals],
    ["Asist", totals.assists],
    ["Pases clave", totals.keyPasses],
    ["Robos", totals.tackles],
    ["Paradas", totals.saves],
    ["Victorias", totals.wins],
    ["XP", state.career.xp],
  ];
  els.careerTotals.innerHTML = rows
    .map(
      ([label, value]) => `
        <div class="total-chip">
          <span>${label}</span>
          <strong>${value}</strong>
        </div>
      `,
    )
    .join("");
}

function createSeason(clubId, seasonNumber) {
  const club = getClub(clubId);
  const opponents = shuffle(CLUBS.filter((candidate) => candidate.league === club.league && candidate.id !== club.id));
  const fixtures = opponents.slice(0, 5).map((candidate) => candidate.id);
  return {
    seasonNumber,
    fixtures,
    results: [],
  };
}

function summarizeSeason() {
  const results = state.season.results;
  const points = results.reduce((total, result) => total + (result.result === "W" ? 3 : result.result === "D" ? 1 : 0), 0);
  const average = Number((results.reduce((total, result) => total + result.rating, 0) / results.length).toFixed(1));
  const goals = sumResults("goals");
  const assists = sumResults("assists");
  const defensive = sumResults("tackles") + sumResults("saves");
  const repGain = clamp(Math.round(points / 2 + average - 5 + goals + assists + defensive * 0.35), 2, 18);
  const medal = points >= 12 ? "Temporada estelar" : points >= 8 ? "Temporada solida" : "Temporada de aprendizaje";
  return {
    season: state.career.season,
    clubId: state.career.clubId,
    points,
    average,
    goals,
    assists,
    defensive,
    repGain,
    headline: `${medal}: ${points} pts, nota media ${average}, ${goals} goles y ${assists} asistencias.`,
  };
}

function offerSelection(summary) {
  const current = getClub(state.career.clubId);
  const ceiling = clamp(current.rating + Math.round(state.career.reputation / 3) + summary.repGain, 72, 95);
  const floor = Math.max(66, current.rating - 6);
  const pool = CLUBS.filter((candidate) => {
    return candidate.id !== current.id && candidate.rating <= ceiling && candidate.rating >= floor;
  });
  const ambitious = CLUBS.filter((candidate) => candidate.id !== current.id && candidate.rating <= ceiling);
  const options = uniqueClubs([
    ...shuffle(pool).sort((a, b) => b.rating - a.rating).slice(0, 9),
    ...shuffle(ambitious),
  ]);
  return options.slice(0, 3).map((candidate) => candidate.id);
}

function starterSelection() {
  const lowTableByLeague = shuffle(LEAGUES).slice(0, 3);
  return lowTableByLeague.map((league) => {
    const pool = CLUBS.filter((candidate) => candidate.league === league.id && candidate.tier === 1);
    return shuffle(pool)[0].id;
  });
}

function buildHighlights(position) {
  const source = HIGHLIGHTS[position];
  return shuffle([...source, ...source]).slice(0, 3).map((highlight) => structuredClone(highlight));
}

function awardGrowth(matchStats) {
  const xpGain = Math.round(matchStats.rating * 4 + (matchStats.result === "W" ? 8 : 3));
  state.career.xp += xpGain;
  const focus = POSITIONS[state.player.position].focus;
  const first = focus[randomInt(0, focus.length - 1)];
  const second = ATTRIBUTES[randomInt(0, ATTRIBUTES.length - 1)];
  state.player.attributes[first] = clamp(state.player.attributes[first] + 1, 30, 99);
  if (matchStats.rating >= 7.5) {
    state.player.attributes[second] = clamp(state.player.attributes[second] + 1, 30, 99);
  }
}

function mergeTotals(matchStats) {
  const totals = state.career.totals;
  totals.matches += 1;
  totals.goals += matchStats.goals;
  totals.assists += matchStats.assists;
  totals.keyPasses += matchStats.keyPasses;
  totals.tackles += matchStats.tackles;
  totals.saves += matchStats.saves;
  totals.ratingPoints += matchStats.rating;
  totals.wins += matchStats.result === "W" ? 1 : 0;
  totals.draws += matchStats.result === "D" ? 1 : 0;
  totals.losses += matchStats.result === "L" ? 1 : 0;
}

function emptyTotals() {
  return {
    matches: 0,
    goals: 0,
    assists: 0,
    keyPasses: 0,
    tackles: 0,
    saves: 0,
    ratingPoints: 0,
    wins: 0,
    draws: 0,
    losses: 0,
  };
}

function emptyMatchStats() {
  return {
    goals: 0,
    assists: 0,
    keyPasses: 0,
    tackles: 0,
    saves: 0,
    rating: 0,
  };
}

function drawPlayerPreview() {
  const ctx = els.playerPreview.getContext("2d");
  const skin = SKINS.find((candidate) => candidate.id === setup.skin);
  const position = POSITIONS[setup.position];
  ctx.imageSmoothingEnabled = false;
  ctx.clearRect(0, 0, els.playerPreview.width, els.playerPreview.height);
  pixelRect(ctx, "#166534", 0, 0, 176, 208);
  stripes(ctx, 176, 208, 22);
  pixelRect(ctx, "#f8f0cf", 22, 18, 132, 4);
  pixelRect(ctx, "#f8f0cf", 22, 18, 4, 172);
  pixelRect(ctx, "#f8f0cf", 150, 18, 4, 172);
  pixelRect(ctx, "#f8f0cf", 22, 186, 132, 4);
  pixelRect(ctx, skin.shadow, 64, 28, 48, 42);
  pixelRect(ctx, skin.color, 68, 24, 40, 42);
  pixelRect(ctx, "#111827", 72, 36, 6, 6);
  pixelRect(ctx, "#111827", 98, 36, 6, 6);
  pixelRect(ctx, setup.kitColor, 54, 74, 68, 54);
  pixelRect(ctx, setup.trimColor, 54, 74, 68, 8);
  pixelRect(ctx, setup.trimColor, 84, 82, 8, 46);
  pixelRect(ctx, skin.color, 42, 84, 12, 34);
  pixelRect(ctx, skin.color, 122, 84, 12, 34);
  pixelRect(ctx, "#10211a", 62, 128, 20, 38);
  pixelRect(ctx, "#10211a", 94, 128, 20, 38);
  pixelRect(ctx, setup.trimColor, 58, 166, 28, 10);
  pixelRect(ctx, setup.trimColor, 90, 166, 28, 10);
  pixelRect(ctx, "#f5e7b8", 28, 196, 120, 6);
  const name = cleanName(els.playerName.value);
  pixelText(ctx, name, 88, 190, "#fff4d2", "center", name.length > 12 ? 9 : 12);
  pixelText(ctx, position.label.toUpperCase(), 88, 16, "#fff4d2", "center");
}

function drawMatchField(highlight, rival) {
  const ctx = els.matchCanvas.getContext("2d");
  const width = els.matchCanvas.width;
  const height = els.matchCanvas.height;
  const ownClub = state ? getClub(state.career.clubId) : null;
  ctx.imageSmoothingEnabled = false;
  ctx.clearRect(0, 0, width, height);
  pixelRect(ctx, "#0d6b3b", 0, 0, width, height);
  stripes(ctx, width, height, 52);
  pixelRect(ctx, "#f8f0cf", 18, 18, width - 36, 4);
  pixelRect(ctx, "#f8f0cf", 18, height - 22, width - 36, 4);
  pixelRect(ctx, "#f8f0cf", 18, 18, 4, height - 36);
  pixelRect(ctx, "#f8f0cf", width - 22, 18, 4, height - 36);
  pixelRect(ctx, "#f8f0cf", width / 2 - 2, 18, 4, height - 36);
  outlineRect(ctx, "#f8f0cf", width / 2 - 42, height / 2 - 42, 84, 84, 4);
  outlineRect(ctx, "#f8f0cf", 18, height / 2 - 72, 68, 144, 4);
  outlineRect(ctx, "#f8f0cf", width - 86, height / 2 - 72, 68, 144, 4);

  if (!ownClub) {
    pixelText(ctx, "FUOL", width / 2, height / 2, "#fff4d2", "center", 30);
    return;
  }

  drawPixelPlayer(ctx, width * 0.34, height * 0.52, state.player.kitColor, state.player.trimColor, getSkin().color, true);
  drawPixelPlayer(ctx, width * 0.52, height * 0.35, ownClub.primary, ownClub.secondary, "#d19a66");
  drawPixelPlayer(ctx, width * 0.62, height * 0.62, rival ? rival.primary : "#ef4444", rival ? rival.secondary : "#111827", "#f1c27d");
  drawPixelPlayer(ctx, width * 0.73, height * 0.43, rival ? rival.primary : "#ef4444", rival ? rival.secondary : "#111827", "#8d5524");
  pixelRect(ctx, "#fff4d2", width * 0.41, height * 0.49, 10, 10);

  if (highlight) {
    pixelText(ctx, highlight.title.toUpperCase(), width / 2, 38, "#fff4d2", "center", 20);
  } else if (rival) {
    pixelText(ctx, `${ownClub.short} VS ${rival.short}`, width / 2, 38, "#fff4d2", "center", 22);
  }
}

function drawPixelPlayer(ctx, x, y, kit, trim, skin, focus = false) {
  const px = Math.round(x);
  const py = Math.round(y);
  if (focus) {
    outlineRect(ctx, "#ffd447", px - 20, py - 34, 40, 74, 4);
  }
  pixelRect(ctx, skin, px - 8, py - 28, 16, 14);
  pixelRect(ctx, kit, px - 14, py - 12, 28, 28);
  pixelRect(ctx, trim, px - 14, py - 12, 28, 4);
  pixelRect(ctx, "#0b1320", px - 11, py + 16, 8, 20);
  pixelRect(ctx, "#0b1320", px + 3, py + 16, 8, 20);
}

function renderAtlas() {
  els.leagueTabs.innerHTML = "";
  LEAGUES.forEach((league) => {
    const tab = document.createElement("button");
    tab.className = "league-tab";
    tab.type = "button";
    tab.textContent = league.name;
    if (league.id === activeAtlasLeague) {
      tab.classList.add("active");
    }
    tab.addEventListener("click", () => {
      activeAtlasLeague = league.id;
      renderAtlas();
    });
    els.leagueTabs.append(tab);
  });

  els.atlasClubs.innerHTML = "";
  CLUBS.filter((candidate) => candidate.league === activeAtlasLeague)
    .sort((a, b) => b.rating - a.rating)
    .forEach((candidate) => {
      els.atlasClubs.append(clubButton(candidate, false, null));
    });
}

function clubButton(candidate, active, onClick) {
  const button = document.createElement("button");
  const league = getLeague(candidate.league);
  button.className = "club-card";
  button.type = "button";
  button.innerHTML = `
    <span class="club-pixels" style="--club-a:${candidate.primary};--club-b:${candidate.secondary}"></span>
    <span>
      <strong>${candidate.name}</strong>
      <small>${league.competition} | Nivel ${candidate.rating}</small>
    </span>
  `;
  if (active) {
    button.classList.add("active");
  }
  if (onClick) {
    button.addEventListener("click", onClick);
  } else {
    button.disabled = true;
  }
  return button;
}

function offerButton(candidate, note, onClick) {
  const button = document.createElement("button");
  button.className = "offer-card";
  button.type = "button";
  button.innerHTML = `
    <span class="club-pixels" style="--club-a:${candidate.primary};--club-b:${candidate.secondary}"></span>
    <span>
      <strong>${candidate.name}</strong>
      <small>${getLeague(candidate.league).name} | ${note}</small>
    </span>
  `;
  button.addEventListener("click", onClick);
  return button;
}

function statChip(attribute, value) {
  const chip = document.createElement("div");
  chip.className = "stat-chip";
  chip.innerHTML = `
    <span>${ATTRIBUTE_LABELS[attribute]} <strong>${value}</strong></span>
    <span class="meter" style="--value:${value}%"><span></span></span>
  `;
  return chip;
}

function getOverall() {
  const focus = POSITIONS[state.player.position].focus;
  const focusAverage = focus.reduce((total, attribute) => total + state.player.attributes[attribute], 0) / focus.length;
  const totalAverage = ATTRIBUTES.reduce((total, attribute) => total + state.player.attributes[attribute], 0) / ATTRIBUTES.length;
  return Math.round(focusAverage * 0.7 + totalAverage * 0.3);
}

function currentFixture() {
  return state.season.fixtures[state.season.results.length];
}

function getClub(id) {
  return CLUBS.find((candidate) => candidate.id === id);
}

function getLeague(id) {
  return LEAGUES.find((candidate) => candidate.id === id);
}

function getSkin() {
  return SKINS.find((candidate) => candidate.id === state.player.skin);
}

function resetCareer() {
  localStorage.removeItem(STORAGE_KEY);
  state = null;
  setup = createSetupState();
  els.playerName.value = "Canterano";
  els.kitColor.value = setup.kitColor;
  els.trimColor.value = setup.trimColor;
  renderSkins();
  renderPositions();
  renderSetup();
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch (error) {
    return null;
  }
}

function normalizeState() {
  state.career.totals = { ...emptyTotals(), ...state.career.totals };
  state.career.history ||= [];
  state.career.trainingUsed ||= false;
  state.player.attributes = { ...POSITIONS[state.player.position].base, ...state.player.attributes };
}

function cleanName(value) {
  return (value || "Canterano").replace(/[<>]/g, "").trim().slice(0, 18) || "Canterano";
}

function sumResults(key) {
  return state.season.results.reduce((total, result) => total + result[key], 0);
}

function uniqueClubs(items) {
  const seen = new Set();
  return items.filter((item) => {
    if (seen.has(item.id)) {
      return false;
    }
    seen.add(item.id);
    return true;
  });
}

function resultBonus(result) {
  if (result === "W") {
    return 0.7;
  }
  if (result === "D") {
    return 0.25;
  }
  return 0;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swap = randomInt(0, index);
    [copy[index], copy[swap]] = [copy[swap], copy[index]];
  }
  return copy;
}

function pixelRect(ctx, color, x, y, width, height) {
  ctx.fillStyle = color;
  ctx.fillRect(Math.round(x), Math.round(y), Math.round(width), Math.round(height));
}

function outlineRect(ctx, color, x, y, width, height, size) {
  pixelRect(ctx, color, x, y, width, size);
  pixelRect(ctx, color, x, y + height - size, width, size);
  pixelRect(ctx, color, x, y, size, height);
  pixelRect(ctx, color, x + width - size, y, size, height);
}

function stripes(ctx, width, height, size) {
  for (let x = 0; x < width; x += size * 2) {
    ctx.fillStyle = "rgba(255, 255, 255, 0.06)";
    ctx.fillRect(x, 0, size, height);
  }
}

function pixelText(ctx, text, x, y, color, align = "left", size = 12) {
  ctx.fillStyle = color;
  ctx.font = `700 ${size}px "Courier New", monospace`;
  ctx.textAlign = align;
  ctx.fillText(text, x, y);
}
