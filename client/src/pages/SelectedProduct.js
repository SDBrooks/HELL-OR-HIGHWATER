import React from 'react';
import { useNavigate } from 'react-router-dom';
import Products from '../components/Products';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SelectedProduct = (props) => {
    const [productInfo, setProductInfo] = useState({})

   const { id } = useParams()

    useEffect(() => {  
        const getProduct = async () => {
            
            const product = await axios.get(`http://localhost:3000/api/products/${id}`)
            setProductInfo(product.data.products) 
        } 
        getProduct()
      },[])

console.log(productInfo)

    return (
        <div>
             <Products 

                            name={productInfo.name}
                            description={productInfo.description}
                            image={productInfo.image}
                         
                            // onClick={() => (`/products/${props.name}`)}
                        />
        </div>
    )
}

export default SelectedProduct;