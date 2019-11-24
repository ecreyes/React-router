import React from 'react';
import { Link, useParams } from "react-router-dom";

function Detalle(props) {
    const { id } = useParams();
    const { nombre, bio, img, aparicion, casa } = props.personajes[id];
    return (
        <div>
            <h1 >{nombre} <small>({aparicion})</small></h1>
            <div className="row">
                <div className="col-md-4">
                    <img src={img} className="img-fluid" alt={nombre} width="250" height="500" />
                    <Link to="/personajes" className="btn btn-outline-danger btn-block">Regresar</Link>
                </div>
                <div className="col-md-8">
                    <h3>{nombre}</h3>
                    <hr />
                    <p>{bio}</p>
                    <img src={casa} alt="casa" className="img-logo" width="200" height="200" />
                </div>

            </div>

        </div>
    );
}

export default Detalle;