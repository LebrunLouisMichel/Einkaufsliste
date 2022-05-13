import {Gruppe} from "./Gruppe.js"


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
        let gleicheGruppe = this.gruppeFinden(name)
        if (gleicheGruppe == -1) {
            let neueGruppe = (name)
            gruppenListe.push(neueGruppe)
            this.aktiveGruppe = neueGruppe
            console.debug("Gruppe " + neueGruppe + " hinzugefügt")
        } else {
            console.debug("Gruppe " + name + " existiert schon")
            return null
        }
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
