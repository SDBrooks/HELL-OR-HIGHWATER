import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
  

function Main() {

  const BASE_URL = 'http://localhost:3000'
  
  const [brands, setBrands] = useState([])
  const [products, setProducts] = useState([])

   const getBrand = async () => {
   const res = await axios.get(`${BASE_URL}/api/brands`)
   console.log(res.data)
    setBrands(res.data.brands)
    
  }

  const getProduct = async () => {
    const res = await axios.get(`${BASE_URL}/api/products`)
    console.log(res.data)
    setProducts(res.data.products)
    console.log(products)
  }

  useEffect( () => {
    getBrand()
    getProduct()

  }, [])

 const deleteProduct = async(e) => {
//   e.preventDefault();
 await axios.delete(`${BASE_URL}/api/products/${e.target.id}`)
 window.location.reload();
 console.log("hello")
};

const updateProduct = async(e) => { 
  // e.preventDefault();
  axios.put(`${BASE_URL}/products/`)
}

  return (
    <div className="App">
  
     <header className='HOH-header'> 
    <Navigation />
      </header>
    
      {products.map((e) => (
         <div>
         <Link to={`/${e._id}`}>
        
        <div className='productInfo'> 
        <h1> {e.name} </h1>
        <h2> {e.price} </h2>
      <div>
            <img src={e.image} alt='product'/>
            {/* {e.brand} */}
         
        </div>
       
          
     
      </div>  </Link> 
<div>
<button name='Friday' className={e._id} onClick={()=>deleteProduct(products)}> Delete </button>
      

<button onClick={() => updateProduct(products)}> Update </button>
</div>
</div>
      ) )}
     
    </div>
    
  );
  }
  
export default Main;
