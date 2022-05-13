import {Gruppe} from "./Gruppe.js"
import Artikel from "../src/model/Artikel.js";


class Shopping {
    gruppenListe
    aktiveGruppe
    setup

    constructor() {
        this.gruppenListe = []
        this.aktiveGruppe = null
        this.setup = null
    }

    gruppeFinden(gruppenName) {
        let gruppenIndex = this.gruppenListe.indexOf(gruppenName)
        if (gruppenIndex >= 0) {
            return gruppenName
        } else {
            console.debug("Gruppe\"" + gruppenName + "\" nicht gefunden")
            return null

        }
    }

    gruppeHinzufuegen(name) {
        let neueGruppe = new Gruppe(name)
        this.gruppenListe.push(neueGruppe)
        return neueGruppe
    }


    gruppeUmbenennen(alterName, neuerName) {
        let vorhandeneGruppe = this.gruppeFinden(alterName)
        if (vorhandeneGruppe != null) {
            let index = gruppenListe.indexOf(alterName)
            gruppenListe[index] = neuerName
            console.debug("Gruppe wurde von " + alterName + " nach " + neuerName + " umbenannt")
        }
    }

    gruppeEntfernen(gruppenName) {
        let entfernGruppe = this.gruppeFinden(gruppenName)
        if (entfernGruppe != null) {
            let index = gruppenListe.indexOf(gruppenName)
            gruppenListe.splice(index, 1)
            console.debug("Gruppe " + gruppenName + " wurde entfernt")
        }
    }
}

export {Shopping}
