import React from 'react';

export default function Products(props) {
    return (
           <div className="card">
                 <div className="card game-card">
                    <div className="image-wrapper">
                        <img src={props.image} alt="Product"/>
                    </div>
                 <h1>{props.name}</h1>
                 </div>   
          </div>
      )
}