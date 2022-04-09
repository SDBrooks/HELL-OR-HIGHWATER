import React from 'react'
import Main from './components/Main';
import './style/App.css';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Navigation from './components/Navigation';
import SelectedProduct from './pages/SelectedProduct';

const BASE_URL = 'http://localhost:3000'

  function App() {

 
  return (
    <div>
      <Routes> 
        <Route path='/' element={<Main />}/>
        <Route path='/:id' element={<SelectedProduct />}/>
      </Routes>
    </div>
  )
  }
  
export default App;
