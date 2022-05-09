/**
 * Lektion 6: Funktionen
 */

// Variablen für die Einkaufsliste
let gruppenListe = ["Obst & Gemüse", "Getreideprodukte", "Milchprodukte", "Hülsenfrüchte"]
let aktiveGruppe = 3


// TODO: Füge hier die Funktionen `gruppeFinden`, `gruppeHinzufuegen`, `gruppeUmbenennen` und `gruppeEntfernen` hinzu
function gruppeFinden(gruppenName) {
    let gruppenIndex = gruppenListe.indexOf(gruppenName)
    if (gruppenIndex >= 0) {
        return gruppenName
    } else {
        console.debug("Gruppe\"" + gruppenName + "\" nicht gefunden")
        return null

    }
}

function gruppeHinzufuegen(name) {
    let gleicheGruppe = gruppenListe.indexOf(name)
    if (gleicheGruppe == -1) {
        let neueGruppe = name
        gruppenListe.push(neueGruppe)
        aktiveGruppe = neueGruppe
        console.debug("Gruppe " + neueGruppe + " hinzugefügt")
    } else {
        console.debug("Gruppe " + name + " existiert schon")
        return null
    }
}

function gruppeUmbenennen( alterName, neuerName) {
    let vorhandeneGruppe = gruppeFinden(alterName)
    if (vorhandeneGruppe != null) {
        let index = gruppenListe.indexOf(alterName)
        gruppenListe[index]=neuerName
        console.debug("Gruppe wurde von " + alterName + " nach " + neuerName + " umbenannt")
    }
}

function gruppeEntfernen(gruppenName) {
    let entfernGruppe = gruppeFinden(gruppenName)
    if(gruppeFinden !=null){
        let index = gruppenListe.indexOf(gruppenName)
        gruppenListe.splice(index,1)
        console.debug("Gruppe "+gruppenName+" wurde entfernt")
    }
}

export {
    gruppenListe, aktiveGruppe,
    gruppeFinden, gruppeHinzufuegen, gruppeUmbenennen, gruppeEntfernen
}