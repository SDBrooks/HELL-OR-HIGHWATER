import React from 'react'
import { useState, useEffect } from 'react'
import './style/App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navigation from './components/Navigation';
import Home from './pages/Home';
// import { append } from 'express/lib/response';


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

 const deleteBrand = async(e) => {
  e.preventDefault();
  const res = await axios.delete(`${BASE_URL}/brands/${e.target.id}`)
}

// const updateBrand = async(e) => { 
//   e.preventDefault();
//   const res = await axios.update( )
// }

  
  
//   const element = document.querySelector('#delete-request .status');
// axios.delete('https://localhost:3001/brands/1')
//     .then(() => element.innerHTML = 'Delete successful');
//  function deleteBrand() {
//   alert(brands)
//  }

  return (
    <div className="App">
  
     <header > 
    <Navigation />
      </header>
      {brands.map((e) => (

        <div> 

      <div> {e.name}</div>
      
      
      <button onClick={()=>deleteBrand(brands)}> Delete </button>
      

      <button> Update </button>
      </div>   ) )}
    </div>
    
  );
  // function deleteBrand() {
  //   axios 
  //     .delete(`${BASE_URL}/1`)
  //     .then(() => {
  //       alert("Brand deleted!");
  //       setBrands(null)
  //     });  }

 
  

  // if (!brand) return "No Brand!"

  // return (
  //   <div>
  //     <h1> {brand.name} </h1>
  //     <button onClick={deleteBrand}>Delete Brand</button>
  //   </div>
  // );

 

      }
  
export default App;
