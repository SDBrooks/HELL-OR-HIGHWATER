import React from 'react';
import { useNavigate } from 'react-router-dom'
import Products from '../components/Products';


function Home(props) {
    let navigate = useNavigate()

    return (
        <div>
            <h1> HELL OR HIGHWATER! </h1>
            <div className='HomePage'>
                <h2> Most Popular </h2>
                <div className='container-grid'>
                    {props.products.map((e) => (
                        <Products
                            name={props.name}
                            description={props.description}
                            image={props.image}
                         
                            onClick={() => navigate(`/products/${props.name}`)}
                        />
                    ))}
                    
                </div>
            </div>        
        </div>
    );
}

export default Home;