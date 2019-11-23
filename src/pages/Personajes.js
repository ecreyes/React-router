import React from 'react';
import CardPersonaje from '../components/CardPersonaje';

class Personajes extends React.Component {
    render() {
        return (
            <div>
                <h1>Personajes</h1>
                <hr />
                <div className="card-columns">
                    <CardPersonaje />
                    <CardPersonaje />
                    <CardPersonaje />
                    <CardPersonaje />
                    <CardPersonaje />
                    <CardPersonaje />
                </div>
            </div>
        );
    }
}

export default Personajes;