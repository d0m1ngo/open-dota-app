import React from 'react';
import '../CardHolder/CardHolder.css'

const CardHolder = (props) => {
    let data = null;

    if (props.loaded) {
        data = <div className="cards">{props.Cards}</div>
    }
    else if (props.loaded === null) {
        data = null
    }
    else {
        data = <div className="loader"></div>
    }

    return (
        <div className="row">
            {data}
        </div>
    )
}

export default CardHolder