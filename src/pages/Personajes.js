import React from 'react';
import CardPersonaje from '../components/CardPersonaje';

class Personajes extends React.Component {
    render() {
        const personajeItems = this.props.personajes.map((personaje) =>
            <CardPersonaje key={personaje.id} personaje={personaje} />
        );
        return (
            <div>
                <h1>Personajes</h1>
                <hr />
                <div className="card-columns">
                    {personajeItems}
                </div>
            </div>
        );
    }
}

export default Personajes;