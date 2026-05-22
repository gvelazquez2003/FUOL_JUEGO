(() => {
  const direct = [
    trivia("Que jugador tiene mas Balones de Oro?", "Lionel Messi", ["Cristiano Ronaldo", "Michel Platini", "Johan Cruyff"], 1),
    trivia("Cuantos jugadores forman el once inicial de un equipo?", "11", ["10", "12", "9"], 1),
    trivia("Que tarjeta expulsa a un jugador?", "Roja", ["Amarilla", "Azul", "Verde"], 1),
    trivia("Que posicion protege la porteria con las manos dentro del area?", "Portero", ["Lateral", "Extremo", "Pivote"], 1),
    trivia("Cuantos puntos da una victoria en liga?", "3", ["1", "2", "4"], 1),
    trivia("Como se llama el pase que termina en gol?", "Asistencia", ["Regate", "Despeje", "Barrida"], 1),
    trivia("Que torneo juegan selecciones nacionales cada cuatro anos?", "Copa del Mundo", ["Champions League", "Premier League", "Copa Libertadores"], 1),
    trivia("Que jugador es conocido como CR7?", "Cristiano Ronaldo", ["Ronaldo Nazario", "Ronaldinho", "Robert Lewandowski"], 1),
    trivia("Que seleccion viste tradicionalmente de albiceleste?", "Argentina", ["Italia", "Alemania", "Portugal"], 1),
    trivia("Que club juega de local en Anfield?", "Liverpool", ["Arsenal", "Chelsea", "Manchester City"], 1),
    trivia("Que accion reinicia el juego desde la esquina?", "Corner", ["Penal", "Saque de banda", "Bote neutral"], 1),
    trivia("Que jugador marco la Mano de Dios?", "Diego Maradona", ["Pele", "Zinedine Zidane", "Lionel Messi"], 2),
    trivia("Que club es llamado Blaugrana?", "FC Barcelona", ["Real Madrid", "Atletico de Madrid", "Valencia"], 2),
    trivia("Que pais gano el Mundial 2010?", "Espana", ["Paises Bajos", "Alemania", "Brasil"], 2),
    trivia("Que jugador es apodado Il Fenomeno?", "Ronaldo Nazario", ["Kaka", "Neymar", "Romario"], 2),
    trivia("Que club italiano es conocido como la Vecchia Signora?", "Juventus", ["Inter", "Napoli", "Roma"], 2),
    trivia("Quien marco la volea de la final de Champions 2002?", "Zinedine Zidane", ["Raul", "Luis Figo", "Michael Ballack"], 3),
    trivia("Que seleccion gano la Euro 2016?", "Portugal", ["Francia", "Espana", "Italia"], 3),
    trivia("Que portero gano el Balon de Oro 1963?", "Lev Yashin", ["Gianluigi Buffon", "Iker Casillas", "Oliver Kahn"], 4),
    trivia("Que club completo el triplete ingles en 1999?", "Manchester United", ["Liverpool", "Arsenal", "Chelsea"], 4),
  ];

  const worldCupWinners = [
    [1930, "Uruguay"], [1934, "Italia"], [1938, "Italia"], [1950, "Uruguay"], [1954, "Alemania"],
    [1958, "Brasil"], [1962, "Brasil"], [1966, "Inglaterra"], [1970, "Brasil"], [1974, "Alemania"],
    [1978, "Argentina"], [1982, "Italia"], [1986, "Argentina"], [1990, "Alemania"], [1994, "Brasil"],
    [1998, "Francia"], [2002, "Brasil"], [2006, "Italia"], [2010, "Espana"], [2014, "Alemania"],
    [2018, "Francia"], [2022, "Argentina"],
  ];
  const worldCupScorers = [
    [1958, "Just Fontaine"], [1970, "Gerd Muller"], [1978, "Mario Kempes"], [1982, "Paolo Rossi"],
    [1986, "Gary Lineker"], [1990, "Salvatore Schillaci"], [1994, "Hristo Stoichkov"],
    [1998, "Davor Suker"], [2002, "Ronaldo Nazario"], [2006, "Miroslav Klose"],
    [2010, "Thomas Muller"], [2014, "James Rodriguez"], [2018, "Harry Kane"], [2022, "Kylian Mbappe"],
  ];
  const ballonWinners = [
    [1995, "George Weah"], [1996, "Matthias Sammer"], [1997, "Ronaldo Nazario"], [1998, "Zinedine Zidane"],
    [1999, "Rivaldo"], [2000, "Luis Figo"], [2001, "Michael Owen"], [2002, "Ronaldo Nazario"],
    [2003, "Pavel Nedved"], [2004, "Andriy Shevchenko"], [2005, "Ronaldinho"], [2006, "Fabio Cannavaro"],
    [2007, "Kaka"], [2008, "Cristiano Ronaldo"], [2009, "Lionel Messi"], [2010, "Lionel Messi"],
    [2011, "Lionel Messi"], [2012, "Lionel Messi"], [2013, "Cristiano Ronaldo"], [2014, "Cristiano Ronaldo"],
    [2015, "Lionel Messi"], [2016, "Cristiano Ronaldo"], [2017, "Cristiano Ronaldo"], [2018, "Luka Modric"],
    [2019, "Lionel Messi"], [2021, "Lionel Messi"], [2022, "Karim Benzema"], [2023, "Lionel Messi"],
    [2024, "Rodri"],
  ];
  const championsWinners = [
    [1993, "Marseille"], [1994, "AC Milan"], [1995, "Ajax"], [1996, "Juventus"], [1997, "Borussia Dortmund"],
    [1998, "Real Madrid"], [1999, "Manchester United"], [2000, "Real Madrid"], [2001, "Bayern Munich"],
    [2002, "Real Madrid"], [2003, "AC Milan"], [2004, "Porto"], [2005, "Liverpool"], [2006, "FC Barcelona"],
    [2007, "AC Milan"], [2008, "Manchester United"], [2009, "FC Barcelona"], [2010, "Inter"],
    [2011, "FC Barcelona"], [2012, "Chelsea"], [2013, "Bayern Munich"], [2014, "Real Madrid"],
    [2015, "FC Barcelona"], [2016, "Real Madrid"], [2017, "Real Madrid"], [2018, "Real Madrid"],
    [2019, "Liverpool"], [2020, "Bayern Munich"], [2021, "Chelsea"], [2022, "Real Madrid"],
    [2023, "Manchester City"], [2024, "Real Madrid"],
  ];
  const stadiums = [
    ["Real Madrid", "Santiago Bernabeu"], ["FC Barcelona", "Camp Nou"], ["Arsenal", "Emirates Stadium"],
    ["Manchester City", "Etihad Stadium"], ["Manchester United", "Old Trafford"], ["Liverpool", "Anfield"],
    ["Tottenham", "Tottenham Hotspur Stadium"], ["Chelsea", "Stamford Bridge"], ["Bayern Munich", "Allianz Arena"],
    ["Borussia Dortmund", "Signal Iduna Park"], ["Inter", "San Siro"], ["AC Milan", "San Siro"],
    ["Juventus", "Allianz Stadium"], ["Napoli", "Diego Armando Maradona"], ["Roma", "Stadio Olimpico"],
    ["PSG", "Parc des Princes"], ["Marseille", "Orange Velodrome"], ["Atletico de Madrid", "Metropolitano"],
    ["Valencia", "Mestalla"], ["Athletic Club", "San Mames"], ["Newcastle", "St James' Park"],
    ["West Ham", "London Stadium"], ["Everton", "Hill Dickinson Stadium"], ["Leverkusen", "BayArena"],
  ];
  const nationalRecords = [
    ["Que seleccion gano mas Copas del Mundo masculinas?", "Brasil", ["Alemania", "Italia", "Argentina"], 2],
    ["Que jugador marco 13 goles en un solo Mundial?", "Just Fontaine", ["Gerd Muller", "Miroslav Klose", "Eusebio"], 4],
    ["Que seleccion organizo y gano el Mundial 1998?", "Francia", ["Brasil", "Italia", "Argentina"], 2],
    ["Que tecnico dirigio a Espana en el titulo mundial 2010?", "Vicente del Bosque", ["Luis Aragones", "Pep Guardiola", "Rafa Benitez"], 4],
    ["Que seleccion elimino a Brasil 7-1 en 2014?", "Alemania", ["Argentina", "Paises Bajos", "Francia"], 2],
    ["Quien marco el gol de la final del Mundial 2014?", "Mario Gotze", ["Thomas Muller", "Toni Kroos", "Miroslav Klose"], 3],
    ["Que seleccion gano el Mundial 1966 en casa?", "Inglaterra", ["Francia", "Alemania", "Uruguay"], 2],
    ["Quien es el maximo goleador historico de los Mundiales masculinos?", "Miroslav Klose", ["Ronaldo Nazario", "Gerd Muller", "Pele"], 3],
    ["Que capitan levanto el Mundial 2022?", "Lionel Messi", ["Angel Di Maria", "Kylian Mbappe", "Luka Modric"], 2],
    ["Que pais gano la primera Copa del Mundo?", "Uruguay", ["Argentina", "Brasil", "Italia"], 2],
  ].map(([prompt, answer, wrong, difficulty]) => trivia(prompt, answer, wrong, difficulty));

  const questions = [...direct, ...nationalRecords];
  appendYearQuestions(questions, worldCupWinners, "Que seleccion gano el Mundial de", "Campeon mundial de", 2);
  appendYearQuestions(questions, worldCupScorers, "Quien fue goleador del Mundial de", "Bota goleadora del Mundial de", 4);
  appendYearQuestions(questions, ballonWinners, "Quien gano el Balon de Oro de", "Balon de Oro", 3);
  appendYearQuestions(questions, championsWinners, "Que club gano la Champions de", "Campeon de Champions", 4);
  appendStadiumQuestions(questions, stadiums);

  window.TRIVIA_QUESTIONS = questions.slice(0, 200).map((question, index) => ({ ...question, id: `trivia-${index + 1}` }));

  function appendYearQuestions(target, facts, wording, label, difficulty) {
    const pool = facts.map(([, answer]) => answer);
    facts.forEach(([year, answer], index) => {
      target.push(trivia(`${wording} ${year}?`, answer, wrongAnswers(pool, answer, index), difficulty));
      target.push(trivia(`${label} ${year}: quien corresponde?`, answer, wrongAnswers(pool, answer, index + 2), difficulty + 1));
    });
  }

  function appendStadiumQuestions(target, facts) {
    const clubPool = facts.map(([club]) => club);
    const stadiumPool = facts.map(([, stadium]) => stadium);
    facts.forEach(([club, stadium], index) => {
      target.push(trivia(`En que estadio juega ${club}?`, stadium, wrongAnswers(stadiumPool, stadium, index), 3));
      target.push(trivia(`Que club juega en ${stadium}?`, club, wrongAnswers(clubPool, club, index + 1), 3));
    });
  }

  function wrongAnswers(pool, answer, offset) {
    const distinct = [...new Set(pool)].filter((candidate) => candidate !== answer);
    return [0, 1, 2].map((step) => distinct[(offset + step * 3) % distinct.length]);
  }

  function trivia(prompt, answer, wrong, difficulty) {
    return { prompt, answer, options: rotate([answer, ...wrong].slice(0, 4), prompt.length), difficulty: Math.min(5, difficulty) };
  }

  function rotate(items, amount) {
    const shift = amount % items.length;
    return [...items.slice(shift), ...items.slice(0, shift)];
  }
})();
