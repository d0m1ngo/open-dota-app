import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <img className="card-img-top" src={props.avatar} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.personaname}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go to player</a>
            </div>
        </div>
    )
}

export default Card