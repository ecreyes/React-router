import React from 'react';
import { Link } from 'react-router-dom';

class CardPersonaje extends React.Component {
    render() {
        const id = this.props.personaje.id;
        const nombre = this.props.personaje.nombre;
        const img = this.props.personaje.img;
        const bio = this.props.personaje.bio;
        const aparicion = this.props.personaje.aparicion;
        return (
            <div className="card">
                <img src={process.env.PUBLIC_URL + img} alt={nombre} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">{bio}</p>
                    <p className="card-text"><small className="text-muted">{aparicion}</small></p>
                    <Link className="btn btn-outline-primary btn-block" to={"/personajes/"+id}>Ver</Link>
                </div>
            </div>
        );
    }
}

export default CardPersonaje;