import React from 'react'
import { useState, useEffect } from 'react'
import './style/App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navigation from './components/Navigation';
import Home from './pages/Home';

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

 const deleteProducts = async(e,id) => {
  // e.preventDefault();
  axios.delete(`${BASE_URL}/products/62434430ceb13c13530921b0`)
}

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
