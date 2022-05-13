class Artikel {

    counter = 1

    constructor(name,position) {
        this.name = name
        this.position = position
        this.gekauft = false
        this.id = Artikel.counter++

    }
}
export {Artikel}
