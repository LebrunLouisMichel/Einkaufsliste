import React from 'react'
import GruppenTag from './components/GruppenTag'
import App from './model/Shopping'


class ShoppingList extends React.Component {
  constructor(props) {
    super(props)
    this.initialisieren()
  }

  initialisieren() {
    let obstundGemuese = App.gruppeHinzufuegen("Obst und Gemüse")
    let artikel1 = obstundGemuese.artikelHinzufuegen("Bananen")
    artikel1.gekauft = true
    obstundGemuese.artikelHinzufuegen("Kartoffeln 4 Kg")
    let brot = App.gruppeHinzufuegen("Brot")
    let artikel2 = brot.artikelHinzufuegen("Weltmeister")
    artikel2.gekauft = true
    brot.artikelHinzufuegen("Weizen Toast")
    let milchprodukte = App.gruppeHinzufuegen("Lacktose Bar")
    let artikel3= milchprodukte.artikelHinzufuegen("Milch")
    artikel3.gekauft = true
    milchprodukte.artikelHinzufuegen("Gouda")
  }

  render() {
    let nochZuKaufen = []
    for (const gruppe of App.gruppenListe) {
      nochZuKaufen.push(<GruppenTag
        key={gruppe.id}
        gruppe={gruppe}
        gekauft={false}/>)
    }


    let schonGekauft = []
    for (const gruppe of App.gruppenListe) {
      schonGekauft.push(<GruppenTag
        key={gruppe.id}
        gruppe={gruppe}
        gekauft={true}/>)
    }

    return (
      <div id="container">
        {/* ToDo: füge hier drunter Deinen HTML-Code ein */}
        <header>
          <h1>Lebensmittel Inventar</h1>
          <label
            className="mdc-text-field mdc-text-field--filled mdc-text-field--with-trailing-icon mdc-text-field--no-label">
            <span className="mdc-text-field__ripple"></span>
            <input className="mdc-text-field__input" type="search"
                   id="artikelEingabe" placeholder="Artikel hinzufügen"/>
            <i className="material-icons mdc-text-field__icon mdc-text-field__icon--trailing"
               role="button">add_circle</i>
            <span className="mdc-line-ripple"></span>
          </label>
        </header>
        <hr/>

        <main>
          <section>
            <h2>Das bräuchten wir
              <i className="material-icons">expand_less</i>
            </h2>
            <dl>
              {nochZuKaufen}
            </dl>
          </section>
          <hr/>
          <section>
            <h2>Das haben wir
              <i className="material-icons">expand_less</i>
            </h2>
            <dl>
              {schonGekauft}
            </dl>
          </section>
        </main>
        <hr/>

        <footer>
          <button className="mdc-button mdc-button--raised">
            <span className="material-icons">bookmark_add</span>
            <span className="mdc-button__ripple"></span> Gruppen
          </button>
          <button className="mdc-button mdc-button--raised">
            <span className="material-icons">sort</span>
            <span className="mdc-button__ripple"></span> Sort
          </button>
          <button className="mdc-button mdc-button--raised">
            <span className="material-icons">settings</span>
            <span className="mdc-button__ripple"></span> Setup
          </button>
        </footer>
      </div>
    )
  }
}

export default ShoppingList
