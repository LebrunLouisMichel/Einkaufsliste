import {Artikel} from "./Artikel.js"
import {Shopping} from "./Shopping.js"

class Gruppe {

    counter = 1

    constructor(name,index) {
        this.name = name
        this.index = index
        this.artikelListe = []
        this.id = Gruppe.counter++

    }

    artikelAuflisten(gekauft) {
        for (let artikel of this.artikelListe) {
            if (artikel.gekauft == gekauft) {
                console.debug(`${artikel.name}`)
            }


        }

    }




}

export {Gruppe}
export {Shopping}
