import Artikel from "./Artikel.js"
import artikel from "./Artikel.js";

/**
 * Klasse zum Gruppieren der Artikel
 *
 * @property {Number}    counter      - dient zur Erzeugung eindeutiger Gruppen-IDs
 * @property {Number}    id           - eindeutige ID-Nummer der Gruppe
 * @property {Number}    index        - Position der Gruppe innerhalb der Gruppenliste
 * @property {String}    name         - Name der Gruppe
 * @property {Artikel[]} artikelListe - Liste der Artikel in dieser Gruppe
 */
class Gruppe {
    static counter = 1
    id = Gruppe.counter++
    index
    name
    artikelListe = []

    constructor(name, index) {
        this.name = name
        this.index = index
    }

    /**
     * Sucht einen Artikel anhand seines Namens
     * @param {String} suchName - Name des gesuchten Artikels
     * @param {Boolean} meldungAusgeben - steuert, ob eine Meldung ausgegeben wird
     * @returns {Artikel|null}
     */
    artikelFinden(suchName, meldungAusgeben) {
        // TODO: füge hier Deinen Code ein

        for (let artikel of this.artikelListe) {

            if (artikel.name == suchName) {
                return artikel
            }
        }

        return null
    }

    /**
     * Listet die Artikel in dieser Gruppe in der Konsole auf
     * @param {Boolean} gekauft - steuert die Anzeige der gekauften oder noch zu kaufenden Artikel
     * String: "das hier ist ein String"
     * boolean: true ODER false
     *
     */
    artikelAuflisten(gekauft) {
        // TODO: füge hier Deinen Code ein


    }

    /**
     * Fügt einen Artikel zur ArtikelListe hinzu und gibt diesen als Wert zurück
     * @param {String} name - Name des neuen Artikels
     * @returns {Artikel} neuerArtikel - der neu erzeugte Artikel
     */
    artikelHinzufuegen(name) {
        // TODO: doppelte Artikel abfangen!
        let neuerArtikel = new Artikel(name)
        this.artikelListe.push(neuerArtikel)
        return neuerArtikel
    }

    /**
     *
     * @param {String} name
     */
    artikelEntfernen(name) {
        // TODO: Artikel finden, position ermitteln
        let position = 0;
        this.artikelListe.splice(position, 1)
    }

}

function main() {

    let zahl = 0
    let gruppe = new Gruppe("produktGruppe1", 0)
    gruppe.artikelHinzufuegen(artikel)
    console.debug(gruppe.artikelListe)
    gruppe.artikelFinden("")
    gruppe.artikelFinden("")

}

main()

export default Gruppe

