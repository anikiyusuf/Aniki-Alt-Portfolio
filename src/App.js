import React from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar'
import About from './component/About'
import Project from './component/Project'
import Contact from './component/Contact'
 import Tools from './component/Tools'
import './sass/App.scss'



export default function App(){
    return(
        
        <div  className='App'>
            
               <Navbar/>
                <About/>
                 <Project/>
                <Tools />   
               <Contact />                
              
    </div>
    )
}