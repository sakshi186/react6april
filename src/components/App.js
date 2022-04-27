import React,{useState} from 'react'
import Home from './Home'
import Contact from './Contact'
import '../App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default function App() {
    //1.states/variables
    //2.functions
    //3.return statements
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
        <Route index element={<Home />} />
        <Route index element={<Contact />} />
    </Routes>
  </BrowserRouter>
  )
}
