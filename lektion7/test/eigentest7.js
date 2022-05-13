import {Gruppe} from "../../js/Gruppe.js"
import {Artikel} from "../../js/Artikel.js"
import {Shopping} from "../../js/Shopping.js"


function teste_artikelAuflisten() {
    console.debug("Aufgabe 1 ----------------------");
    console.debug("Artikel auflisten:");

    let saft = new Artikel("saft", 1)
    let wasser = new Artikel("wasser", 2)
    let cola = new Artikel("cola", 3)
    let alkoholfreieGetraenke = new Gruppe("Alkoholfreie Getränke", 1)
    alkoholfreieGetraenke.artikelListe = [saft, wasser, cola]
    alkoholfreieGetraenke.artikelAuflisten(false)
}

function teste_gruppeFinden() {
    console.debug("Aufgabe 2 ----------------------");
    console.debug("Gruppe finden:");

    let einkaufen = new Shopping()
    einkaufen.gruppeHinzufuegen("Obst & Gemüse")
    einkaufen.gruppeHinzufuegen("Getreideprodukte")
    einkaufen.gruppeHinzufuegen("Milchprodukte")
    einkaufen.gruppeHinzufuegen("Brot")
    einkaufen.gruppeHinzufuegen("Essig & co")
    einkaufen.gruppeHinzufuegen("Saucen & Dips")
    einkaufen.gruppeHinzufuegen("Andere")
    einkaufen.gruppeHinzufuegen("Aufstrich")
    einkaufen.gruppeHinzufuegen("Fleisch")
    einkaufen.gruppeHinzufuegen("Getränke")
    einkaufen.gruppeHinzufuegen("Fette und Öle")
    einkaufen.gruppeHinzufuegen("Konserven")
    einkaufen.gruppeHinzufuegen("Gewürze")
    einkaufen.gruppeHinzufuegen("Koch & Backhelfer")


    // ToDo: füge ab hier deinen Code ein
    let gruppe1 = einkaufen.gruppeFinden("Obst & Gemüse")
    console.debug("gruppe1: ", gruppe1)

    let gruppe2 = einkaufen.gruppeFinden("Getreideprodukte")
    console.debug("gruppe2: ", gruppe2)

    let gruppe3 = einkaufen.gruppeFinden("Milchprodukte")
    console.debug("gruppe3: ", gruppe3)

    let gruppe4 = einkaufen.gruppeFinden("Brot")
    console.debug("gruppe4:", gruppe4)

    let gruppe5 = einkaufen.gruppeFinden("Essig & co")
    console.debug("gruppe5:", gruppe5)

    let gruppe6 = einkaufen.gruppeFinden("Saucen & Dips")
    console.debug("gruppe6:", gruppe6)

    let gruppe7 = einkaufen.gruppeFinden("Andere")
    console.debug("gruppe7:", gruppe7)

    let gruppe8 = einkaufen.gruppeFinden("Aufstrich")
    console.debug("gruppe8:", gruppe8)

    let gruppe9 = einkaufen.gruppeFinden("Fleisch")
    console.debug("gruppe9:", gruppe9)

    let gruppe10 = einkaufen.gruppeFinden("Getränke")
    console.debug("gruppe10:", gruppe10)

    let gruppe11 = einkaufen.gruppeFinden("Fette und Öle")
    console.debug("gruppe11:", gruppe11)

    let gruppe12 = einkaufen.gruppeFinden("Konserven")
    console.debug("gruppe12:", gruppe12)

    let gruppe13 = einkaufen.gruppeFinden("Gewürze")
    console.debug("gruppe13:", gruppe13)

    let gruppe14 = einkaufen.gruppeFinden("Koch & Backhelfer")
    console.debug("gruppe14:", gruppe14)

}

function main() {
    console.debug("[Lektion 7] ============================")
    teste_artikelAuflisten()
    teste_gruppeFinden()

}
main()
