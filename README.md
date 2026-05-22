# FUOL_JUEGO

Primera version jugable de un modo carrera de futbol pixelado inspirado por la
estructura de progresion de los RPG de rutas y por los highlights de partidos.

## Probarlo

Abre `index.html` en el navegador o sirve la carpeta con un servidor estatico:

```powershell
npx serve .
```

El progreso de la carrera se guarda en `localStorage` del navegador. Las cuentas
online son opcionales: con Supabase configurado cada usuario puede iniciar
sesion y entrar a la sala de presencia para mirar partidos de amigos conectados
en tiempo real.

Chequeo rapido de navegador:

```powershell
npm install
npm run test:smoke
```

## Cuentas y amigos en vivo

La primera capa online usa Supabase Auth con correo/contrasena y Realtime
Presence. No copia todo el guardado al servidor: publica un resumen de la
carrera y, durante un partido, minuto, marcador, goleadores y narracion reciente
para la sala de amigos.

1. Crea un proyecto Supabase y habilita cuentas por correo en Auth.
2. Activa Realtime para el proyecto si no viene habilitado.
3. Para local puedes editar `online-config.js` con la URL y la clave publica del
   proyecto.
4. Para Vercel configura estas variables de entorno. `npm run build` genera la
   salida estatica `public` que Vercel publica:

```text
FUOL_SUPABASE_URL
FUOL_SUPABASE_ANON_KEY
FUOL_PRESENCE_ROOM
```

`FUOL_PRESENCE_ROOM` es opcional; por defecto todos entran en
`fuol-amigos-en-vivo`. La clave usada aqui debe ser la publica/anonima de
Supabase, nunca una service role key.

El repositorio incluye `vercel.json` para fijar `public` como Output Directory.
Si el proyecto ya tiene ajustes manuales en Vercel, vuelve a desplegar despues
de este commit para que el build genere esa carpeta.

## Incluye

- Creacion de jugador juvenil con edad de 16 a 19 anos, fecha de nacimiento,
  skin, posicion, botas, color de pelo y 15 peinados; el uniforme hereda
  colores del club.
- Tres ofertas iniciales de clubes de tabla baja.
- Temporadas domesticas completas de 38 jornadas o 34 jornadas segun la liga.
- Calendario diario para llegar a cada jornada y de 5 a 15 entrenamientos
  trivia por temporada con un banco de 200 preguntas.
- Partidos automaticos con reloj de 90 minutos, velocidades x1, x1.5 y x4,
  prorroga europea, cambios simulados, marcador en vivo, narracion e historial.
- Highlights de fondo con tiradas d20, dificultad por estadistica y poder del
  rival; las tiradas exitosas alimentan mejoras automaticas de atributos.
- Tablas de liga, panel de estadisticas por temporada, rankings de goleadores
  y asistentes y buscador de plantillas con 17 jugadores FC26 por cada club.
- Champions FUOL desde la segunda temporada para los 32 clubes con mas puntos
  domesticos del ano anterior.
- Gala anual del Balon de Oro con top 10, top 3 y filtros de candidatura por
  nivel, estadisticas, tabla local y Champions.
- Mercado de verano en diez intervalos con fichajes simulados, propuestas
  progresivas, progreso de atributos, reputacion e historial.
- Cuentas opcionales y panel `Amigos` para seguir marcadores en vivo de usuarios
  conectados en la misma sala online.
- Carrera con un maximo de 15 temporadas.
- Catalogo completo de clubes de primera division de Inglaterra, Espana,
  Alemania, Italia y Francia para la temporada usada por esta version.

Las plantillas compactas viven en `squad-seeds.js`. Para regenerarlas desde el
dataset de jugadores FC26 usado por el proyecto:

```powershell
npm run build:squads
```
