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
                    {props.Products.map((Products) => (
                        <Products
                            name={Products.name}
                            description={Products.description}
                            image={Products.image}
                         
                            onClick={() => navigate(`/products/${Products.name}`)}
                        />
                    ))}
                    
                </div>
            </div>        
        </div>
    );
}

export default Home;