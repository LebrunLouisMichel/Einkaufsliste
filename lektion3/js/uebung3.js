/**
 * Uebung 3: Maps
 */

/**
 * 1) Erstelle die Map.
 */
function aufgabe1() {
  console.debug("Aufgabe 1 ==========================");

  //ToDo: füge ab hier Deinen Code ein

  let pizza = {

    art: "Tono Speziale ChewyBetton",
    belag: "Thunfisch, Salami, Sauce-Hollandaise, Jalapenos",
    skala: 10,
    gerneIsst: true,
  }

  console.debug(pizza)
}

/**
 * 2) Rufe keys, value und entries auf.
 */
function aufgabe2() {
  console.debug("Aufgabe 2 ==========================");

  let pastafiore= {
    name: "Chewycana",
    gruendung: 1648,
    medium: "margheritta"
  }

  //ToDo: füge ab hier in den debugs Deinen Code ein

  console.debug(Object.keys(pastafiore))
  console.debug(Object.values(pastafiore))
  console.debug(Object.entries(pastafiore))
}

/**
 * 3) Erstelle eine weitere Map.
 */
function aufgabe3() {
  console.debug("Aufgabe 3 ==========================");

  //ToDo: füge ab hier Deinen Code ein

  let kuenstler= {

    name:"MeatLoaf",
    alter: 74 ,
    Beruf: "Saenger, Songwriter, Schauspieler",
    greatestMovies: "Rocky Horror Picture Show, Fight Club",
    greatestHits: "I´d do anithing for love, Paradise by the dashboard light",
    genre: "Musical/Rock",
    inspiration: "Richard Wagner",
    verstorben: true,
    todesJahr: 2022,
    Zitat: "The angels had guitars before they had wings!",
    letzteWorte: "Love You, God Bless, Be Well, and most of all Stay Safe. Meat."

  }

  for (let key of Object.keys(kuenstler)) {
    console.debug(key + ": " + kuenstler[key])

  }
}

/**
 * Hauptfunktion, in der die Aufgaben aufgerufen werden
 */
function main() {
  aufgabe1()
  aufgabe2()
  aufgabe3()
}
main()