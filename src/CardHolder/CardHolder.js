import React from 'react';

const CardHolder = (props) => {
    return (
        <div className="row">
            {props.Cards}
        </div>
    )
}

export default CardHolder