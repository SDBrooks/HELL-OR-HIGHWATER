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

  return (
    <div className="App">
  
     <header > 
    <Navigation />
      </header>
      {brands.map((e) => (<div> {e.name}</div> ) )}
         {/* <main>
            <Routes>
            
            
            <Route />

            </Routes>

          </main> */}
    </div>
  );
}

export default App;
