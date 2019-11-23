import React from 'react';

class CardPersonaje extends React.Component{
    render(){
        return(
            <div className="card">
                <img src={process.env.PUBLIC_URL + '/img/boruto.png'} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-outline-primary btn-block">Go somewhere</a>
                </div>
            </div>
        );
    }
}

export default CardPersonaje;