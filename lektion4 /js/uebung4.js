/**
 * Uebung 4: Bedingungen
 */

/**
 * 1) Erstelle deine if-Bedingung!
 */
function aufgabe1() {
  console.debug("Aufgabe 1 ==========================")

  let bankRobbed = "success"

  //ToDo: füge ab hier deinen Code ein

  if ( bankRobbed == "success") {

    console.debug("GO! GO! GO!")
  }

}

/**
 * 2) Erstelle deine if-Bedingung mit einem negativen Wert!
 */
function aufgabe2() {
  console.debug("Aufgabe 2 ==========================")

  let bankRobbed = "unsuccessful"

  //ToDo: füge ab hier deinen Code ein

  if (bankRobbed != "success"){

    console.debug("WOOP WOOP")
  }
}

/**
 * 3) Bastel deine if-else Ampel!
 */
  //ToDo: füge ab hier Deinen Code ein

function aufgabe3() {
  console.debug("Aufgabe 3 ==========================")

  let bankRobbed = "success"

  if (bankRobbed == "success") {
    console.debug("GO! GO! GO!")
  } else {
    console.debug("GET THE FCK OUT OF HERE!")
  }

}

/**
 * 4) Bastel deinen Switch Wochenkalender!
 */
function aufgabe4() {
  console.debug("Aufgabe 4 ==========================")

  let tag = 5

  //ToDo: füge ab hier Deinen Code ein

  switch (tag) {
    case 1:
        console.debug("Heute ist Freitag")
          break
    case 2:
        console.debug("Heute ist Freitag")
          break
    case 3:
        console.debug("Heute ist Freitag")
        break
    case 4:
        console.debug("Heute ist Freitag")
        break
    case 5:
        console.debug("Heute ist Freitag")
        break
    default:
      console.debug("Heute ist Freitag")
  }
}

/**
 * Hauptfunktion, in der die Aufgaben aufgerufen werden
 */
function main() {
  aufgabe1()
  aufgabe2()
  aufgabe3()
  aufgabe4()
}
main()