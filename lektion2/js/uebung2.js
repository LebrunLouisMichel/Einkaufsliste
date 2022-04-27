/**
 * Uebung 2: Arrays
 */

/**
 * 1) Erstelle das Array.
 */
function aufgabe1() {
    console.debug("Aufgabe 1 ==========================");

    //ToDo: füge ab hier Deinen Code ein

    let laender = ["Belgium","Austria","Ukraine","Israel","Columbia"]
    console.debug(laender)
}

/**
 * 2) Gebe die Laenge des Arrays aus.
 */
function aufgabe2() {
    console.debug("Aufgabe 2 ==========================");

    let helden = ["Iron-Man", "Cptn.A.", "Hulk"]

    //ToDo: füge ab hier Deinen Code in der console.debug ein
    
    console.debug(helden.length)
}

/**
 * 3) Greife auf die Elemente zu.
 */
function aufgabe3() {
    console.debug("Aufgabe 3 ==========================");

    let willkommen = ["Hallo", "Tschuess", "Mittag", "Planet", "Welt!"]

    //ToDo: füge ab hier Deinen Code ein

    let liste = ["Hallo","Tschuess","Mittag","Planet","Welt"]
    console.debug(liste[0],liste[4])
}

/**
 * 4) Fuege Brot am anfang hinzu.
 */
function aufgabe4() {
    console.debug("Aufgabe 4 ==========================")

    let warenkorb = ["Milch", "Eier", "Wurst"]
    //ToDo: füge ab hier Deinen Code ein

    warenkorb.unshift("Brot")
    console.debug(warenkorb)
}

/**
 * 5) Loesche x, y und z.
 */
function aufgabe5() {
    console.debug("Aufgabe 5 ==========================");

    let buchstaben = ["a", "b", "x", "y", "z", "c", "d"]
    //ToDo: füge ab hier Deinen Code ein

    buchstaben.splice(2,3)

    console.debug(buchstaben)
}

/**
 * 6) Fuelle das Array mit Daten.
 */
function aufgabe6() {
    console.debug("Aufgabe 6 ==========================");

    //ToDo: füge ab hier in das Array und die console.debugs Deinen Code ein
    let developer = []
    console.debug("Vorname: ", "Louis-Michel Adoindo" )
    console.debug("Nachname: ", "Lebrun")
    console.debug("Alter: ", 39 )
    console.debug("Groesse: ", 180 )
    console.debug("Aufgabe erledigt: ", true )
}

/**
 * Hauptfunktion, in der die Aufgaben aufgerufen werden
 */
function main() {
    aufgabe1()
    aufgabe2()
    aufgabe3()
    aufgabe4()
    aufgabe5()
    aufgabe6()
}
main()