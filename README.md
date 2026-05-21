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

- Creacion de jugador con skin y posicion; el uniforme hereda colores del club.
- Tres ofertas iniciales de clubes de tabla baja.
- Temporadas domesticas completas de 38 jornadas o 34 jornadas segun la liga.
- Partidos de highlights interactivos con tiradas d20, dificultad por estadistica
  y poder del rival.
- Tablas de liga, panel de estadisticas por temporada y rankings de goleadores
  y asistentes con jugadores reales sembrados para cada gran liga.
- Champions FUOL desde la segunda temporada para los 32 clubes con mas puntos
  domesticos del ano anterior.
- Gala anual del Balon de Oro con top 10, top 3 y ganador.
- Progreso de atributos, reputacion, historial y ofertas tras cada temporada.
- Carrera con un maximo de 15 temporadas.
- Catalogo completo de clubes de primera division de Inglaterra, Espana,
  Alemania, Italia y Francia para la temporada usada por esta version.
