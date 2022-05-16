class Artikel {

    counter = 1

    constructor(name,position,menge) {
        this.name = name
        this.position = position
        this.menge = 0
        this.gekauft = false
        this.id = Artikel.counter++

    }
}
export {Artikel}