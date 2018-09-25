import React, { Component } from 'react';


const Input = (props) => {
    return (
        <div className="row col-sm-6 m-auto mt-5">
            <div className="input-group mt-5">
                <input type="text" className="form-control" value={props.value} onChange={props.handleChange} placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" onClick={props.handleClick} type="button">Search</button>
                </div>
            </div>
        </div>
    )
}



export default Input