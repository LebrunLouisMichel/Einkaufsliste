import React from 'react'

class GruppeBearbeitenTag extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            newName: this.props.gruppe.name
        }
    }

    handleChange(event) {
        // ToDo: implementieren
        let gruppenName
        this.setState({gruppenName: event.target.value})
    }

    /**
     *
     * @param {Gruppe} gruppe
     * @param {Event.KEYPRESS} event
     */

    gruppeUmbenennen(gruppe, event) {
        if (event && event.key != "Enter") return
        // ToDo: implementieren
        gruppe.name = this.state.newName
        this.setState({isEditing: false})
    }

    render() {
        const gruppe = this.props.gruppe
        const viewTemplate = (
            ""
        )
        const editTemplate = (
            ""
        )

        return (
            this.state.isEditing
                ? editTemplate
                : viewTemplate
        )
    }
}

export default GruppeBearbeitenTag
