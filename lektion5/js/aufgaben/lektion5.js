/**
 * Lektion 5: Schleifen
 */

/**
 * 1) Schreibe ein Array `artikelListe`, fülle es und geb es auf der Konsole mithilfe einer Schleife aus
 */
function artikelAuflisten() {
    // ToDo: füge ab hier deinen Code ein
    let artikelListe2 = ["Milch"]
    let artikelListe = ["Brokoli","Reis","Streukäse"]
    for(let i= 0; i < artikelListe.length; i++){
        console.debug(artikelListe[i])
    }

}

/**
 * 2) Erstelle die Arrays `milchListe`, `gemüseListe` und `getreideListe`, fülle diese, füge sie der gruppenListe hinzu und
 * gebe sie auf der Konsole aus
 */
function allesAuflisten() {
    let gruppenListe = []
    let gemueseListe =["Brokoli","Zwiebeln" , "Salat"]
    let getreideListe = ["Reis","Nudeln","Quinoa"]
    let milchListe = ["Streukäse","Sahne","Joghurt"]
    gruppenListe.push(gemueseListe, getreideListe ,milchListe)
    for(let i = 0; i < gruppenListe.length; i++)
        console.debug("Gruppe"+i,":",gruppenListe[i])

// ToDo: füge ab hier deinen Code ein
}

/**
 * 3) Erstelle ein befülltes Array `gemueseListe`, entferne diese Elemente aus dem Array und gebe es vor und nach dem Entfernen
 * auf der Konsole aus
 */
function artikelEntfernen() {
    // ToDo: füge ab hier deinen Code ein
        let gruppenListe = []
    let gemueseListe =["Brokoli","Zwiebeln" , "Salat"]
    gruppenListe.push(gemueseListe)
        console.debug("gemueseGruppe vorher:",gemueseListe)
    for(let i = 0; i < gemueseListe.length ;i++){
        gemueseListe.splice(0,1)
    }
        console.debug("gemueseGruppe nachher:",gemueseListe)



}

/**
 * 4) Schreibe die Sortieren-Funktion
 */
function sortieren() {
    // ToDo: füge ab hier deinen Code ein
}

export {
    artikelAuflisten, allesAuflisten, artikelEntfernen, sortieren
}