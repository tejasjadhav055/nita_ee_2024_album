import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Main from './Components/Container/Main'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upload from '../src/Components/Upload/Upload';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <BrowserRouter>
    <Routes>
      <Route exact path="/upload" element={<Upload />} />
      <Route exact path="/" element={<Main />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
