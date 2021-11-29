import React from 'react';

class PersonajeContainer extends React.Component {
    
    constructor (props) {
        super(props)

        this.state = {
            personajes: []
        }
    }


    componentDidMount() {          
        fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(json => {
            this.setState({ personajes: json.results });
        });
}

    render() {

        return (
          <section className="personajesContainer">
          {this.state.personajes.map(function(d, idx){
             return (
                <div key={idx} className="personaje">
                    <picture>
                        <img src={d.image} alt="" />
                    </picture>
                    <div>
                        <div>
                            <h1>{d.name}</h1>
                        </div>
                        <div className="flex-box">
                            <small>Origen</small>
                            <p>{d.origin.name}</p>
                        </div>
                        <div className="flex-box">
                            <small>Ubicación actual</small>
                            <p>{d.location.name}</p>
                        </div>
                        <ul>
                            <li className={d.status}>{d.status}</li>
                            <li>{d.gender}</li>
                            <li>{d.species}</li>
                        </ul>
                    </div>
                </div>
            )
           })}
          </section>
        );
    }

}

export default PersonajeContainer;