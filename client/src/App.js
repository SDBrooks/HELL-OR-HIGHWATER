import React from 'react'
import { useState, useEffect } from 'react'
import './style/App.css';
import { router } from 'react-router-dom';
import axios from 'axios';
import Navigation from './components/Navigation';
// import Home from './pages/Home';

  function App() {

  const BASE_URL = 'http://localhost:3000'
  
  const [brands, setBrands] = useState([])
  const [products, setProducts] = useState([])

   const getBrand = async () => {
   const res = await axios.get(`${BASE_URL}/brands`)
   console.log(res.data)
    setBrands(res.data)
    
  }

  const getProduct = async () => {
    const res = await axios.get(`${BASE_URL}/products`)
    console.log(res.data)
    setProducts(res.data)
    console.log(products)
  }

  useEffect( () => {
    getBrand()
    getProduct()

  }, [])

 const deleteProducts = async(e) => {
  // e.preventDefault();
 await axios.delete(`${BASE_URL}/products/:${e.target.id}`)
 window.location.reload();
};

const updateProducts = async(e) => { 
  // e.preventDefault();
  axios.update(`${BASE_URL}/products/`)
}

  return (
    <div className="App">
  
     <header > 
    <Navigation />
      </header>
      {products.map((e) => (

        <div className='productInfo'> 
        <h1> {e.name} </h1>
        <h2> {e.price} </h2>
      <div> 
            <img src={e.image} alt='product'/>
            {/* {e.brand} */}
        
        
        </div>
        
      <button onClick={()=>deleteProducts(products)}> Delete </button>
      

      <button onClick={() => updateProducts(products)}> Update </button>
      </div>   ) )}
    </div>
    
  );
  }
  
export default App;
