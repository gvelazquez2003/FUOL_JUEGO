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

const HAIR_STYLES = [
  hair("buzz", "Rapado"),
  hair("crop", "Corto recto"),
  hair("fade", "Fade alto"),
  hair("side", "Peinado lateral"),
  hair("wave", "Ondas"),
  hair("curly", "Rizos"),
  hair("afro", "Afro"),
  hair("mohawk", "Mohicano"),
  hair("ponytail", "Coleta"),
  hair("bun", "Mono"),
  hair("fringe", "Flequillo"),
  hair("spikes", "Puntas"),
  hair("braids", "Trenzas"),
  hair("locs", "Locs"),
  hair("long", "Largo"),
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
    scenario("Tiro libre con pantalla", "Ves tarde la pelota entre la barrera y los cuerpos.", [
      option("Paso y estirada", "reflexes", 15, "save", "Llegas con la mano baja al disparo."),
      option("Mandar la barrera", "composure", 12, "organize", "Ordenas el muro y tapas la linea."),
      option("Blocaje firme", "reflexes", 16, "save", "No dejas rebote en el area chica."),
    ]),
    scenario("Salida bajo presion", "El rival salta a tu central y te pide jugar con los pies.", [
      option("Pase al lateral", "passing", 11, "buildUp", "Sales corto sin regalar la pelota."),
      option("Envio al nueve", "passing", 15, "keyPass", "Tu golpeo rompe la presion."),
      option("Templar la jugada", "composure", 12, "organize", "Esperas el movimiento correcto."),
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
    scenario("Linea alta", "El rival busca la espalda de la defensa con un pase temprano.", [
      option("Tirar fuera de juego", "composure", 14, "organize", "Coordinas la linea y anulas la carrera."),
      option("Barrer la recepcion", "defending", 13, "tackle", "Cortas el control antes del giro."),
      option("Ganar la carrera", "pace", 15, "clearance", "Llegas primero y mandas lejos."),
    ]),
    scenario("Corner a favor", "Subes al area y el centro cae a tu altura.", [
      option("Atacar segundo palo", "shooting", 17, "goal", "Tu cabezazo entra pegado al palo."),
      option("Peinar al centro", "passing", 14, "assist", "Dejas la pelota servida al rematador."),
      option("Cazar rechace", "composure", 13, "keyPass", "Mantienes vivo el ataque."),
    ]),
    scenario("Bloque bajo", "Tu equipo resiste una posesion larga alrededor del area.", [
      option("Tapar remate", "defending", 12, "block", "Pones el cuerpo en la trayectoria."),
      option("Despeje lateral", "composure", 11, "clearance", "Sacas peligro sin rifar el rebote."),
      option("Salir conduciendo", "dribbling", 16, "buildUp", "Rompes la primera presion."),
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
    scenario("Ritmo de cierre", "Faltan minutos y el partido se parte por el centro.", [
      option("Pausar con pase", "composure", 11, "control", "Bajas el pulso del partido."),
      option("Lanzar transicion", "passing", 14, "keyPass", "Encuentras la carrera del extremo."),
      option("Falta tactica limpia", "defending", 15, "tackle", "Cortas la salida sin perder la cabeza."),
    ]),
    scenario("Llegada de segunda linea", "El area se abre cuando tu delantero fija a los centrales.", [
      option("Picar al punto penal", "shooting", 16, "goal", "Llegas desde atras para marcar."),
      option("Pase al tercer hombre", "passing", 13, "assist", "Desarmas la marca con vision."),
      option("Reciclar posesion", "composure", 10, "control", "Tu equipo vuelve a mandar."),
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
    scenario("Doble marca", "El lateral recibe ayuda y te cierran el regate.", [
      option("Pisar y descargar", "passing", 11, "buildUp", "Sales de la trampa con apoyo."),
      option("Tunel al espacio", "dribbling", 16, "keyPass", "Dejas una ventaja dentro del area."),
      option("Forzar corner", "pace", 12, "corner", "Ganas linea y una pelota parada."),
    ]),
    scenario("Repliegue largo", "El rival contraataca por tu banda.", [
      option("Volver al sprint", "stamina", 13, "tackle", "Recuperas metros y tapas el centro."),
      option("Cerrar linea de pase", "defending", 14, "block", "Tu repliegue apaga la contra."),
      option("Robar y acelerar", "dribbling", 15, "keyPass", "Giras defensa en ataque."),
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
    scenario("Apoyo de espaldas", "El mediocentro te encuentra con un central encima.", [
      option("Descargar de cara", "passing", 11, "buildUp", "Tu apoyo sostiene el ataque."),
      option("Girar con control", "dribbling", 15, "keyPass", "Te sacas la marca y atraes ayuda."),
      option("Dejar al extremo", "passing", 14, "assist", "Tu toque libera el centro raso."),
    ]),
    scenario("Presion del nueve", "El portero rival duda con la pelota.", [
      option("Tapar pase corto", "composure", 12, "press", "Obligas al pelotazo."),
      option("Morder al central", "pace", 14, "press", "Tu presion deja un rebote util."),
      option("Robar y definir", "shooting", 18, "goal", "Castigas el error en un toque."),
    ]),
    scenario("Corner cerrado", "La pelota parada te da una chance entre empujones.", [
      option("Peinar al segundo", "passing", 13, "assist", "Tu roce deja el remate franco."),
      option("Cabecear fuerte", "shooting", 17, "goal", "Ganas el duelo aereo."),
      option("Bloquear al central", "stamina", 11, "corner", "Abres espacio para el rematador."),
    ]),
  ],
};

const els = {
  setupScreen: document.querySelector("#setupScreen"),
  careerScreen: document.querySelector("#careerScreen"),
  playerForm: document.querySelector("#playerForm"),
  playerName: document.querySelector("#playerName"),
  hairStyle: document.querySelector("#hairStyle"),
  hairColor: document.querySelector("#hairColor"),
  bootColor: document.querySelector("#bootColor"),
  skinChoices: document.querySelector("#skinChoices"),
  positionChoices: document.querySelector("#positionChoices"),
  positionHint: document.querySelector("#positionHint"),
  playerPreview: document.querySelector("#playerPreview"),
  previewName: document.querySelector("#previewName"),
  starterStats: document.querySelector("#starterStats"),
  starterClubs: document.querySelector("#starterClubs"),
  careerHud: document.querySelector("#careerHud"),
  seasonTitle: document.querySelector("#seasonTitle"),
  seasonStatus: document.querySelector("#seasonStatus"),
  seasonRoute: document.querySelector("#seasonRoute"),
  growthDock: document.querySelector("#growthDock"),
  matchBadge: document.querySelector("#matchBadge"),
  matchOverlay: document.querySelector("#matchOverlay"),
  matchStory: document.querySelector("#matchStory"),
  matchActions: document.querySelector("#matchActions"),
  dossierPlayer: document.querySelector("#dossierPlayer"),
  dossierLook: document.querySelector("#dossierLook"),
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
let matchTimer = null;

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

function hair(id, label) {
  return { id, label };
}

function scenario(title, copy, options) {
  return { title, copy, options };
}

function option(label, stat, dc, reward, success) {
  return { label, stat, dc, reward, success };
}

function boot() {
  bindEvents();
  renderHairStyles();
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
  els.hairStyle.addEventListener("change", updateSetupLook);
  els.hairColor.addEventListener("input", updateSetupLook);
  els.bootColor.addEventListener("input", updateSetupLook);
  els.openAtlasButton.addEventListener("click", () => els.clubAtlas.showModal());
  els.closeAtlasButton.addEventListener("click", () => els.clubAtlas.close());
  els.closeAwardButton.addEventListener("click", () => els.awardDialog.close());
  els.resetButton.addEventListener("click", resetCareer);
}

function createSetupState() {
  const starters = starterSelection();
  return {
    skin: SKINS[2].id,
    position: "st",
    hairStyle: "crop",
    hairColor: "#111827",
    bootColor: "#facc15",
    starters,
    starterClub: starters[0],
  };
}

function renderSetup() {
  els.setupScreen.classList.remove("hidden");
  els.careerScreen.classList.add("hidden");
  els.hairStyle.value = setup.hairStyle;
  els.hairColor.value = setup.hairColor;
  els.bootColor.value = setup.bootColor;
  renderStarterClubs();
  renderStarterStats();
  drawPlayerPreview();
}

function renderHairStyles() {
  els.hairStyle.innerHTML = HAIR_STYLES.map((style) => `<option value="${style.id}">${style.label}</option>`).join("");
  els.hairStyle.value = setup.hairStyle;
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

function updateSetupLook() {
  setup.hairStyle = els.hairStyle.value;
  setup.hairColor = els.hairColor.value;
  setup.bootColor = els.bootColor.value;
  drawPlayerPreview();
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
      hairStyle: setup.hairStyle,
      hairColor: setup.hairColor,
      bootColor: setup.bootColor,
      development: emptyDevelopment(),
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
      growthLog: [],
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
  renderGrowthDock();
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

function renderGrowthDock() {
  els.growthDock.innerHTML = "";
  if (state.offers) {
    els.growthDock.innerHTML = "<p class=\"growth-note\">El ano ya cerro. Las mejoras del jugador quedan guardadas en el dossier.</p>";
    return;
  }
  const recent = state.career.growthLog.slice(-3).reverse();
  els.growthDock.innerHTML = `
    <div class="growth-note">
      <strong>Desarrollo automatico</strong>
      <p>Los atributos suben al superar d20 durante partidos. Cada mejora aparece en el reloj y aqui.</p>
    </div>
    ${recent.map((entry) => `<div class="growth-note"><strong>${entry.label}</strong><small>${entry.copy}</small></div>`).join("")}
  `;
}

function renderMatchPanel() {
  const event = currentEvent();
  if (state.offers) {
    els.matchBadge.textContent = "Cierre";
    els.matchStory.innerHTML = `<strong>Temporada completada</strong><p>${state.message}</p>`;
    els.matchActions.innerHTML = "";
    renderClosedOverlay();
    return;
  }
  if (!state.match) {
    const rival = getClub(event.opponentId);
    els.matchBadge.textContent = event.type === "champions" ? "Europa" : "Liga";
    els.matchStory.innerHTML = `
      <strong>${getClub(state.career.clubId).short} vs ${rival.short}</strong>
      <p>${event.copy}</p>
      <p>${state.message || "Los d20 se resolveran en segundo plano durante el reloj."}</p>
    `;
    els.matchActions.innerHTML = "";
    const button = document.createElement("button");
    button.className = "pixel-button primary";
    button.type = "button";
    button.textContent = "Simular partido";
    button.addEventListener("click", beginMatch);
    els.matchActions.append(button);
    renderFixtureOverlay(event, rival);
    return;
  }

  els.matchBadge.textContent = `${formatMinute(state.match.clock)}'`;
  els.matchStory.innerHTML = `
    <strong>${state.match.narration.title}</strong>
    <p>${state.match.narration.copy}</p>
    ${state.match.lastRoll ? rollMarkup(state.match.lastRoll) : ""}
  `;
  els.matchActions.innerHTML = "<div class=\"growth-note\">La simulacion corre sola. Cambia velocidad desde el marcador.</div>";
  renderLiveOverlay();
}

function beginMatch() {
  const event = currentEvent();
  const context = event.type === "league" ? event.fixture : { home: state.career.clubId, away: event.opponentId };
  const baseline = simulateScore(context.home, context.away, event.type, 0.62);
  const highlights = buildHighlights(state.player.position, event.opponentId, event.type);
  state.match = {
    type: event.type,
    roundIndex: event.index,
    opponentId: event.opponentId,
    homeId: context.home,
    awayId: context.away,
    scoreFor: 0,
    scoreAgainst: 0,
    scorers: { for: [], against: [] },
    clock: 0,
    speed: 1,
    targetMinutes: 90,
    extraTime: false,
    highlights,
    events: buildMatchTimeline(highlights, baseline, context),
    processedEvents: [],
    feed: [{ minute: 0, text: "Pitazo inicial. Los d20 quedan en manos del simulador." }],
    step: 0,
    stats: emptyMatchStats(),
    lastRoll: null,
    narration: { title: "Partido en vivo", copy: "El reloj corre y los eventos aparecen cuando la jugada te alcanza." },
  };
  state.message = "La simulacion ya esta en marcha.";
  saveState();
  renderCareer();
  startMatchTimer();
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

function resolveBackgroundHighlight(highlight, minute) {
  const choice = autoSelectOption(highlight);
  const odds = previewRoll(choice);
  const die = randomInt(1, 20);
  const total = die + odds.modifier;
  const success = die === 20 || (die !== 1 && total >= odds.dc);
  state.match.lastRoll = { die, total, dc: odds.dc, modifier: odds.modifier, success, stat: choice.stat, minute };
  state.match.stats.decisions += 1;
  state.match.narration = { title: highlight.title, copy: `${highlight.copy} ${choice.label}.` };
  if (success) {
    applyReward(choice.reward, minute);
    state.match.stats.successes += 1;
    awardDevelopment(choice.stat, minute);
    pushMatchFeed(minute, `${choice.success} d20 ${die}${signed(odds.modifier)} supera DC ${odds.dc}.`);
  } else {
    applyFailure(choice.reward, minute);
    pushMatchFeed(minute, `${highlight.title}: d20 ${die}${signed(odds.modifier)} no llega a DC ${odds.dc}.`);
  }
  state.match.step += 1;
}

function applyReward(reward, minute) {
  const stats = state.match.stats;
  stats.rating += 0.48;
  if (reward === "goal") {
    stats.goals += 1;
    scoreGoal(state.career.clubId, state.player.name, minute);
  }
  if (reward === "assist") {
    stats.assists += 1;
    if (Math.random() < 0.76) scoreGoal(state.career.clubId, assistedScorer(), minute, state.player.name);
  }
  if (reward === "keyPass") {
    stats.keyPasses += 1;
    if (Math.random() < 0.22) scoreGoal(state.career.clubId, assistedScorer(), minute, state.player.name);
  }
  if (reward === "tackle") stats.tackles += 1;
  if (reward === "block") stats.blocks += 1;
  if (reward === "clearance") stats.clearances += 1;
  if (reward === "press") stats.presses += 1;
  if (reward === "organize") stats.commands += 1;
  if (reward === "control") stats.controls += 1;
  if (reward === "buildUp") {
    stats.buildUps += 1;
    if (Math.random() < 0.18) stats.keyPasses += 1;
  }
  if (reward === "corner") {
    stats.cornersWon += 1;
    if (Math.random() < 0.16) scoreGoal(state.career.clubId, assistedScorer(), minute, "Corner forzado");
  }
  if (reward === "save") stats.saves += 1;
  if (reward === "counter") {
    stats.saves += 1;
    stats.keyPasses += 1;
    if (Math.random() < 0.18) scoreGoal(state.career.clubId, assistedScorer(), minute, state.player.name);
  }
}

function applyFailure(reward, minute) {
  state.match.stats.rating -= 0.36;
  const defensive = ["gk", "def"].includes(state.player.position) || ["save", "tackle"].includes(reward);
  if (defensive && Math.random() < 0.42) scoreGoal(state.match.opponentId, goalScorerName(state.match.opponentId), minute);
}

function buildMatchTimeline(highlights, baseline, context) {
  const highlightMoments = eventMinutes(highlights.length, 9, 87);
  const events = highlights.map((highlight, index) => ({
    id: `roll-${index}`,
    kind: "highlight",
    minute: highlightMoments[index],
    highlight,
  }));
  const homeMoments = eventMinutes(baseline.homeGoals, 6, 88);
  const awayMoments = eventMinutes(baseline.awayGoals, 6, 88);
  homeMoments.forEach((minute, index) => {
    events.push({ id: `home-goal-${index}`, kind: "goal", minute, clubId: context.home, scorer: goalScorerName(context.home) });
  });
  awayMoments.forEach((minute, index) => {
    events.push({ id: `away-goal-${index}`, kind: "goal", minute, clubId: context.away, scorer: goalScorerName(context.away) });
  });
  return events.sort((a, b) => a.minute - b.minute || a.kind.localeCompare(b.kind));
}

function eventMinutes(count, min, max) {
  const minutes = new Set();
  while (minutes.size < count) minutes.add(randomInt(min, max));
  return [...minutes].sort((a, b) => a - b);
}

function autoSelectOption(highlight) {
  const options = highlight.options.map((choice) => ({ choice, weight: previewRoll(choice).chance + randomInt(0, 18) }));
  const total = options.reduce((sum, item) => sum + item.weight, 0);
  let cursor = Math.random() * total;
  for (const optionData of options) {
    cursor -= optionData.weight;
    if (cursor <= 0) return optionData.choice;
  }
  return options.at(-1).choice;
}

function startMatchTimer() {
  if (matchTimer || !state?.match) return;
  matchTimer = window.setInterval(tickMatchClock, 1000);
}

function stopMatchTimer() {
  if (!matchTimer) return;
  window.clearInterval(matchTimer);
  matchTimer = null;
}

function tickMatchClock() {
  if (!state?.match) {
    stopMatchTimer();
    return;
  }
  const match = state.match;
  match.clock = Math.min(match.targetMinutes, Number((match.clock + match.speed).toFixed(1)));
  processTimelineEvents(Math.floor(match.clock));
  if (match.clock >= match.targetMinutes) {
    if (shouldExtendMatch()) {
      extendMatchToExtraTime();
    } else {
      stopMatchTimer();
      finishPlayerMatch();
      return;
    }
  }
  saveState();
  renderMatchPanel();
  renderDossier();
  renderGrowthDock();
}

function processTimelineEvents(minute) {
  state.match.events.filter((event) => !event.done && event.minute <= minute).forEach((event) => {
    event.done = true;
    if (event.kind === "goal") {
      scoreGoal(event.clubId, event.scorer, event.minute);
      return;
    }
    resolveBackgroundHighlight(event.highlight, event.minute);
  });
}

function shouldExtendMatch() {
  return state.match.type === "champions"
    && !state.match.extraTime
    && state.match.targetMinutes === 90
    && state.match.scoreFor === state.match.scoreAgainst;
}

function extendMatchToExtraTime() {
  state.match.extraTime = true;
  state.match.targetMinutes = 120;
  pushMatchFeed(90, "Empate europeo: el partido entra a prorroga.");
  if (Math.random() < 0.66) {
    const stronger = Math.random() < matchWinWeight(state.career.clubId, state.match.opponentId)
      ? state.career.clubId
      : state.match.opponentId;
    state.match.events.push({
      id: "extra-time-goal",
      kind: "goal",
      minute: randomInt(101, 118),
      clubId: stronger,
      scorer: goalScorerName(stronger),
    });
    state.match.events.sort((a, b) => a.minute - b.minute);
  }
  state.match.narration = { title: "Prorroga", copy: "El reloj se estira a 120 minutos por el empate europeo." };
}

function setMatchSpeed(speed) {
  if (!state?.match) return;
  state.match.speed = Number(speed);
  saveState();
  renderMatchPanel();
}

function scoreGoal(clubId, scorer, minute, assist = "") {
  const forPlayer = clubId === state.career.clubId;
  const side = forPlayer ? "for" : "against";
  state.match[forPlayer ? "scoreFor" : "scoreAgainst"] += 1;
  state.match.scorers[side].push({ name: scorer, minute, assist });
  const assistCopy = assist ? `, asistencia ${assist}` : "";
  pushMatchFeed(minute, `Gol ${getClub(clubId).short}: ${scorer}${assistCopy}.`);
}

function pushMatchFeed(minute, text, tone = "info") {
  state.match.feed.push({ minute, text, tone });
  state.match.feed = state.match.feed.slice(-10);
}

function assistedScorer() {
  const candidates = STAR_PLAYERS.filter((player) => player.clubId === state.career.clubId && player.name !== state.player.name);
  return candidates.length ? weightedPick(candidates, "scoring").name : goalScorerName(state.career.clubId);
}

function goalScorerName(clubId) {
  const candidates = STAR_PLAYERS.filter((player) => player.clubId === clubId);
  return candidates.length ? weightedPick(candidates, "scoring").name : `${getClub(clubId).short} atacante`;
}

function matchWinWeight(clubA, clubB) {
  const edge = getClub(clubA).rating - getClub(clubB).rating;
  return 1 / (1 + Math.exp(-edge / 8));
}

function renderFixtureOverlay(event, rival) {
  const own = getClub(state.career.clubId);
  const fixture = event.fixture || { home: own.id, away: rival.id };
  els.matchOverlay.innerHTML = scoreOverlayMarkup({
    home: getClub(fixture.home),
    away: getClub(fixture.away),
    homeScore: 0,
    awayScore: 0,
    clock: "00",
    homeScorers: [],
    awayScorers: [],
    feed: [`${event.copy} Elige simular para activar el reloj.`],
    controls: false,
  });
}

function renderLiveOverlay() {
  const home = getClub(state.match.homeId);
  const away = getClub(state.match.awayId);
  const playerHome = state.match.homeId === state.career.clubId;
  els.matchOverlay.innerHTML = scoreOverlayMarkup({
    home,
    away,
    homeScore: playerHome ? state.match.scoreFor : state.match.scoreAgainst,
    awayScore: playerHome ? state.match.scoreAgainst : state.match.scoreFor,
    clock: formatMinute(state.match.clock),
    homeScorers: playerHome ? state.match.scorers.for : state.match.scorers.against,
    awayScorers: playerHome ? state.match.scorers.against : state.match.scorers.for,
    feed: state.match.feed,
    controls: true,
  });
  els.matchOverlay.querySelectorAll("[data-speed]").forEach((button) => {
    button.addEventListener("click", () => setMatchSpeed(button.dataset.speed));
  });
  startMatchTimer();
}

function renderClosedOverlay() {
  const last = allPlayerResults().at(-1);
  const clubData = getClub(state.career.clubId);
  const rival = getClub(last?.opponentId || state.career.clubId);
  els.matchOverlay.innerHTML = scoreOverlayMarkup({
    home: clubData,
    away: rival,
    homeScore: last ? last.score.split("-")[0] : "-",
    awayScore: last ? last.score.split("-")[1] : "-",
    clock: "FT",
    homeScorers: [],
    awayScorers: [],
    feed: [state.message],
    controls: false,
  });
}

function scoreOverlayMarkup({ home, away, homeScore, awayScore, clock, homeScorers, awayScorers, feed, controls }) {
  const clockText = clock === "FT" ? clock : `${clock}'`;
  return `
    <div class="score-clock"><span>${clockText}</span><span>${controls ? `${speedLabel(state.match.speed)} | EN VIVO` : "MODO CARRERA"}</span></div>
    <div class="scoreboard-grid">
      ${scoreTeamMarkup(home)}
      <div class="live-score">${homeScore} - ${awayScore}</div>
      ${scoreTeamMarkup(away)}
    </div>
    <div class="scorer-grid">
      ${scorerMarkup(home.short, homeScorers)}
      ${scorerMarkup(away.short, awayScorers)}
    </div>
    ${controls ? `
      <div class="speed-controls">
        ${[[1, "x1 Normal"], [1.5, "x1.5 Rapido"], [4, "x4 Muy rapido"]].map(([value, label]) => `<button class="speed-button${Number(state.match.speed) === value ? " active" : ""}" type="button" data-speed="${value}">${label}</button>`).join("")}
      </div>
    ` : ""}
    <div class="timeline-feed">
      <strong>Eventos</strong>
      <ul>${feed.slice(-5).reverse().map((entry) => `<li>${typeof entry === "string" ? entry : `${formatMinute(entry.minute)}' ${entry.text}`}</li>`).join("")}</ul>
    </div>
  `;
}

function scoreTeamMarkup(clubData) {
  return `<div class="score-team"><span class="team-crest" style="--club-a:${clubData.primary};--club-b:${clubData.secondary}"><span>${clubData.short}</span></span><strong>${clubData.name}</strong></div>`;
}

function scorerMarkup(short, scorers) {
  return `
    <div class="scorer-list">
      <strong>${short} goleadores</strong>
      <ul>${scorers.length ? scorers.map((scorer) => `<li>${formatMinute(scorer.minute)}' ${scorer.name}</li>`).join("") : "<li>Sin goles</li>"}</ul>
    </div>
  `;
}

function speedLabel(speed) {
  if (Number(speed) === 1.5) return "x1.5";
  if (Number(speed) === 4) return "x4";
  return "x1";
}

function finishPlayerMatch() {
  stopMatchTimer();
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
  state.world = createWorld(clubId, state.career.season, state.career.lastChampionsQualifiers);
  state.match = null;
  state.offers = null;
  state.message = `Temporada ${state.career.season}: ${getClub(clubId).name} te entrega uniforme.`;
  saveState();
  renderCareer();
}

function renderDossier() {
  els.overallBadge.textContent = `OVR ${getOverall()}`;
  drawDossierPlayer();
  els.dossierLook.innerHTML = `
    <strong>${state.player.name}</strong>
    <span>${HAIR_STYLES.find((style) => style.id === state.player.hairStyle).label} | Pelo ${state.player.hairColor} | Botas ${state.player.bootColor}</span>
    <span>${getClub(state.career.clubId).name} viste tu uniforme actual.</span>
  `;
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
    trackedStats().forEach((key) => totals[key] += result[key] || 0);
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
  if (state.player.position === "gk") return [...base, ["Paradas", stats.saves], ["Mandos", stats.commands], ["Salidas", stats.buildUps], ["Pases clave", stats.keyPasses]];
  if (state.player.position === "def") return [...base, ["Robos", stats.tackles], ["Bloqueos", stats.blocks], ["Despejes", stats.clearances], ["Goles", stats.goals]];
  if (state.player.position === "mid") return [...base, ["Asistencias", stats.assists], ["Pases clave", stats.keyPasses], ["Controles", stats.controls], ["Robos", stats.tackles]];
  if (state.player.position === "wing") return [...base, ["Asistencias", stats.assists], ["Goles", stats.goals], ["Corners", stats.cornersWon], ["Repliegues", stats.tackles + stats.blocks]];
  return [...base, ["Goles", stats.goals], ["Asistencias", stats.assists], ["Apoyos", stats.buildUps], ["Presiones", stats.presses]];
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
  if (state.player.position === "gk") return [["Paradas", "saves"], ["Mandos", "commands"]];
  if (state.player.position === "def") return [["Robos", "tackles"], ["Despejes", "clearances"]];
  if (state.player.position === "mid") return [["Asist", "assists"], ["P. clave", "keyPasses"]];
  if (state.player.position === "wing") return [["Asist", "assists"], ["Corners", "cornersWon"]];
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
  return `<div class="dice-log"><span class="dice-chip">${formatMinute(roll.minute)}' d20 ${roll.die}</span>${ATTRIBUTE_LABELS[roll.stat]} ${signed(roll.modifier)} = ${roll.total} contra DC ${roll.dc}: ${roll.success ? "exito" : "fallo"}.</div>`;
}

function emptyRow(clubId) {
  return { clubId, played: 0, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, points: 0 };
}

function emptyTotals() {
  return { matches: 0, goals: 0, assists: 0, keyPasses: 0, tackles: 0, blocks: 0, clearances: 0, presses: 0, commands: 0, controls: 0, buildUps: 0, cornersWon: 0, saves: 0, decisions: 0, successes: 0, ratingPoints: 0, wins: 0, draws: 0, losses: 0 };
}

function emptyMatchStats() {
  return { goals: 0, assists: 0, keyPasses: 0, tackles: 0, blocks: 0, clearances: 0, presses: 0, commands: 0, controls: 0, buildUps: 0, cornersWon: 0, saves: 0, decisions: 0, successes: 0, rating: 0 };
}

function mergeTotals(stats) {
  const totals = state.career.totals;
  totals.matches += 1;
  trackedStats().forEach((key) => totals[key] += stats[key] || 0);
  totals.ratingPoints += stats.rating;
  totals.wins += stats.result === "W" ? 1 : 0;
  totals.draws += stats.result === "D" ? 1 : 0;
  totals.losses += stats.result === "L" ? 1 : 0;
}

function awardGrowth(stats) {
  state.career.xp += Math.round(stats.rating * 2 + (stats.result === "W" ? 3 : 1));
}

function awardDevelopment(attribute, minute) {
  const development = state.player.development;
  development[attribute] += 1;
  const threshold = developmentThreshold(attribute);
  if (development[attribute] < threshold || state.player.attributes[attribute] >= 99) return;
  development[attribute] -= threshold;
  state.player.attributes[attribute] += 1;
  const label = `${ATTRIBUTE_LABELS[attribute]} +1`;
  const copy = `${ATTRIBUTE_LABELS[attribute]} sube a ${state.player.attributes[attribute]} tras superar d20 al ${formatMinute(minute)}'.`;
  state.career.growthLog.push({ label, copy, season: state.career.season });
  state.career.growthLog = state.career.growthLog.slice(-24);
  pushMatchFeed(minute, copy, "growth");
}

function emptyDevelopment() {
  return Object.fromEntries(ATTRIBUTES.map((attribute) => [attribute, 0]));
}

function developmentThreshold(attribute) {
  const current = state.player.attributes[attribute];
  return clamp(Math.ceil((current - 30) / 11), 3, 8);
}

function buildHighlights(positionId, opponentId, type) {
  const count = highlightCount(opponentId, type);
  const source = HIGHLIGHTS[positionId];
  return shuffle([...source, ...source]).slice(0, count).map((highlight) => structuredClone(highlight));
}

function highlightCount(opponentId, type) {
  const rival = getClub(opponentId);
  const own = getClub(state.career.clubId);
  const pressure = clamp(Math.round((rival.rating - own.rating) / 8), -2, 3);
  const european = type === "champions" ? 1 : 0;
  const swing = randomInt(0, 2);
  return clamp(2 + swing + Math.max(0, pressure) + european, 2, 5);
}

function trackedStats() {
  return ["goals", "assists", "keyPasses", "tackles", "blocks", "clearances", "presses", "commands", "controls", "buildUps", "cornersWon", "saves", "decisions", "successes"];
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
  const selectedClub = getClub(setup.starterClub);
  const skin = SKINS.find((candidate) => candidate.id === setup.skin);
  const name = cleanName(els.playerName.value);
  els.previewName.textContent = name;
  drawAvatar(ctx, {
    name,
    position: setup.position,
    skin,
    hairStyle: setup.hairStyle,
    hairColor: setup.hairColor,
    bootColor: setup.bootColor,
    primary: selectedClub.primary,
    secondary: selectedClub.secondary,
  });
}

function drawDossierPlayer() {
  const ctx = els.dossierPlayer.getContext("2d");
  const clubData = getClub(state.career.clubId);
  drawAvatar(ctx, {
    name: state.player.name,
    position: state.player.position,
    skin: getSkin(),
    hairStyle: state.player.hairStyle,
    hairColor: state.player.hairColor,
    bootColor: state.player.bootColor,
    primary: clubData.primary,
    secondary: clubData.secondary,
  });
}

function drawAvatar(ctx, look) {
  drawPitch(ctx, 176, 208, 22);
  pixelRect(ctx, look.skin.shadow, 64, 28, 48, 42);
  pixelRect(ctx, look.skin.color, 68, 24, 40, 42);
  drawHair(ctx, look.hairStyle, look.hairColor);
  pixelRect(ctx, "#111827", 72, 36, 6, 6);
  pixelRect(ctx, "#111827", 98, 36, 6, 6);
  pixelRect(ctx, look.primary, 54, 74, 68, 54);
  pixelRect(ctx, look.secondary, 54, 74, 68, 8);
  pixelRect(ctx, look.secondary, 84, 82, 8, 46);
  pixelRect(ctx, look.skin.color, 42, 84, 12, 34);
  pixelRect(ctx, look.skin.color, 122, 84, 12, 34);
  pixelRect(ctx, "#10211a", 62, 128, 20, 38);
  pixelRect(ctx, "#10211a", 94, 128, 20, 38);
  pixelRect(ctx, "#f8fafc", 58, 166, 28, 8);
  pixelRect(ctx, "#f8fafc", 90, 166, 28, 8);
  pixelRect(ctx, look.bootColor, 58, 174, 28, 8);
  pixelRect(ctx, look.bootColor, 90, 174, 28, 8);
  pixelRect(ctx, "#fff4d2", 25, 186, 126, 17);
  pixelText(ctx, POSITIONS[look.position].label.toUpperCase(), 88, 16, "#fff4d2", "center");
  pixelText(ctx, look.name, 88, 198, "#07120e", "center", look.name.length > 12 ? 9 : 12);
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

function drawHair(ctx, styleId, color) {
  const hairColor = color || "#111827";
  const block = (x, y, width, height) => pixelRect(ctx, hairColor, x, y, width, height);
  block(68, 20, 40, 9);
  if (styleId === "buzz") block(70, 28, 36, 4);
  if (styleId === "crop") block(68, 20, 40, 14);
  if (styleId === "fade") { block(72, 18, 32, 14); block(68, 28, 5, 18); }
  if (styleId === "side") { block(64, 22, 44, 10); block(68, 32, 20, 5); }
  if (styleId === "wave") { block(64, 18, 12, 10); block(76, 16, 16, 12); block(92, 19, 18, 11); }
  if (styleId === "curly") { block(62, 18, 14, 13); block(76, 14, 15, 16); block(91, 17, 17, 14); block(103, 22, 10, 14); }
  if (styleId === "afro") { block(58, 12, 60, 18); block(62, 6, 52, 12); block(58, 28, 12, 22); block(106, 28, 12, 22); }
  if (styleId === "mohawk") { block(82, 7, 14, 28); block(76, 14, 26, 10); }
  if (styleId === "ponytail") { block(66, 19, 44, 14); block(109, 28, 10, 30); }
  if (styleId === "bun") { block(68, 20, 40, 12); block(82, 4, 15, 16); }
  if (styleId === "fringe") { block(66, 18, 44, 12); block(68, 30, 16, 10); block(88, 30, 12, 6); }
  if (styleId === "spikes") { block(64, 14, 8, 18); block(76, 8, 8, 24); block(88, 12, 8, 20); block(100, 6, 8, 26); }
  if (styleId === "braids") { block(66, 18, 44, 10); block(64, 28, 7, 36); block(76, 28, 6, 20); block(96, 28, 6, 20); block(106, 28, 7, 36); }
  if (styleId === "locs") { block(62, 16, 52, 14); block(62, 28, 8, 30); block(74, 28, 7, 20); block(96, 28, 7, 22); block(106, 28, 8, 34); }
  if (styleId === "long") { block(64, 16, 48, 14); block(60, 28, 12, 52); block(104, 28, 12, 52); }
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
  stopMatchTimer();
  localStorage.removeItem(STORAGE_KEY);
  state = null;
  setup = createSetupState();
  els.playerName.value = "Canterano";
  renderHairStyles();
  renderSkins();
  renderPositions();
  renderSetup();
}

function normalizeState() {
  state.career.totals = { ...emptyTotals(), ...state.career.totals };
  state.career.history ||= [];
  state.career.awards ||= [];
  state.career.lastChampionsQualifiers ||= [];
  state.career.growthLog ||= [];
  state.player.hairStyle ||= "crop";
  state.player.hairColor ||= "#111827";
  state.player.bootColor ||= "#facc15";
  state.player.development = { ...emptyDevelopment(), ...state.player.development };
  state.player.attributes = { ...POSITIONS[state.player.position].base, ...state.player.attributes };
  if (state.match && typeof state.match.clock !== "number") state.match = null;
  Object.values(state.world.leagues).forEach((league) => league.playerResults ||= []);
  selectedStatsLeague ||= getClub(state.career.clubId).league;
  selectedTableLeague ||= getClub(state.career.clubId).league;
}

function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function loadState() { try { return JSON.parse(localStorage.getItem(STORAGE_KEY)); } catch (error) { return null; } }
function cleanName(value) { return (value || "Canterano").replace(/[<>]/g, "").trim().slice(0, 18) || "Canterano"; }
function slug(value) { return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
function signed(value) { return value >= 0 ? `+${value}` : `${value}`; }
function formatMinute(value) { return String(Math.max(0, Math.floor(Number(value) || 0))).padStart(2, "0"); }
function uniqueClubs(items) { const seen = new Set(); return items.filter((item) => seen.has(item.id) ? false : (seen.add(item.id), true)); }
function clamp(value, min, max) { return Math.min(max, Math.max(min, value)); }
function randomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function shuffle(items) { const copy = [...items]; for (let index = copy.length - 1; index > 0; index -= 1) { const swap = randomInt(0, index); [copy[index], copy[swap]] = [copy[swap], copy[index]]; } return copy; }
function pixelRect(ctx, color, x, y, width, height) { ctx.fillStyle = color; ctx.fillRect(Math.round(x), Math.round(y), Math.round(width), Math.round(height)); }
function outlineRect(ctx, color, x, y, width, height, size) { pixelRect(ctx, color, x, y, width, size); pixelRect(ctx, color, x, y + height - size, width, size); pixelRect(ctx, color, x, y, size, height); pixelRect(ctx, color, x + width - size, y, size, height); }
function stripes(ctx, width, height, size) { for (let x = 0; x < width; x += size * 2) { ctx.fillStyle = "rgba(255, 255, 255, 0.06)"; ctx.fillRect(x, 0, size, height); } }
function pixelText(ctx, text, x, y, color, align = "left", size = 12) { ctx.fillStyle = color; ctx.font = `700 ${size}px "Courier New", monospace`; ctx.textAlign = align; ctx.fillText(text, x, y); }
