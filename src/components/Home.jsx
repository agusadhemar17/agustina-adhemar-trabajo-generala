import React from 'react';
import logo from '../logo.png';
import Partida from './Partida';
import './home.css';


export default function Home() {
    return (
        
            <div className="">
                <div className="home">
                    <img src={logo} className="" alt="logo" />
               </div> 
               <div className="home">    
                    <a href='/partida' class="btn-general">Comenzar Juego</a>
                </div>
            </div>
     
    )
}


