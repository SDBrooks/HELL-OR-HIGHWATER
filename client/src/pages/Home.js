import React from 'react';
import { useParams } from 'react-router-dom';

function Brands(props) {
    let {name} = useParams()

    const brands = props.Brands.find((result) => name === result.name)

    return (
        <div className="info">
        <div className='info-picture' >
            <br />
            <img src={brands.image} alt="brands"/>
        </div>
        <div className="info-text">
             <h1>{brands.name} </h1>
             <h4>{brands.location}</h4>
             <p>{brands.description}</p>
        </div>
    </div>
    )
}
