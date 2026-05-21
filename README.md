# FUOL_JUEGO

Primera version jugable de un modo carrera de futbol pixelado inspirado por la
estructura de progresion de los RPG de rutas y por los highlights de partidos.

## Probarlo

Abre `index.html` en el navegador o sirve la carpeta con un servidor estatico:

```powershell
npx serve .
```

El progreso de la carrera se guarda en `localStorage` del navegador.

Chequeo rapido de navegador:

```powershell
npm install
npm run test:smoke
```

## Incluye

- Creacion de jugador con skin, posicion, botas, color de pelo y 15 peinados;
  el uniforme hereda colores del club.
- Tres ofertas iniciales de clubes de tabla baja.
- Temporadas domesticas completas de 38 jornadas o 34 jornadas segun la liga.
- Partidos automaticos con reloj de 90 minutos, velocidades x1, x1.5 y x4,
  prorroga europea, marcador en vivo, narracion e historial por partido.
- Highlights de fondo con tiradas d20, dificultad por estadistica y poder del
  rival; las tiradas exitosas alimentan mejoras automaticas de atributos.
- Tablas de liga, panel de estadisticas por temporada, rankings de goleadores
  y asistentes y buscador de plantillas con XI reales por cada club.
- Champions FUOL desde la segunda temporada para los 32 clubes con mas puntos
  domesticos del ano anterior.
- Gala anual del Balon de Oro con top 10, top 3 y ganador.
- Mercado de verano en diez intervalos con fichajes simulados, propuestas
  progresivas, progreso de atributos, reputacion e historial.
- Carrera con un maximo de 15 temporadas.
- Catalogo completo de clubes de primera division de Inglaterra, Espana,
  Alemania, Italia y Francia para la temporada usada por esta version.

Las plantillas compactas viven en `squad-seeds.js`. Para regenerarlas desde el
dataset de jugadores FC26 usado por el proyecto:

```powershell
npm run build:squads
```
