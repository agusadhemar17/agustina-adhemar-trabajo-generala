import React, { useState , useEffect} from 'react';
import './boardGame.css';
import './header.css';
import diceArr from './Appdata.jsx';
import TablaPuntajes from './TablaPuntajes';

   
 function BoardGame () {  
             
   const [randomDado1, setRandomDado1]= useState (diceArr[getRandomInt(6)]);
   const [randomDado2, setRandomDado2]= useState (diceArr[getRandomInt(6)]);
   const [randomDado3, setRandomDado3]= useState (diceArr[getRandomInt(6)]);
   const [randomDado4, setRandomDado4]= useState (diceArr[getRandomInt(6)]);
   const [randomDado5, setRandomDado5]= useState (diceArr[getRandomInt(6)]);
   const [isSelected1, setIsSelected1] = useState(false);
   const [isSelected2, setIsSelected2] = useState(false);
   const [isSelected3, setIsSelected3] = useState(false);
   const [isSelected4, setIsSelected4] = useState(false);
   const [isSelected5, setIsSelected5] = useState(false);
   const [puntosDado1, setPuntosDado1] = useState(0);
   const [puntosDado2, setPuntosDado2] = useState(0);
   const [puntosDado3, setPuntosDado3] = useState(0);
   const [puntosDado4, setPuntosDado4] = useState(0);
   const [puntosDado5, setPuntosDado5] = useState(0); 
   const [contadorJugadas, setContadorJugadas] = useState(0);
   var [listaDados, setListaDados] = useState([]);
   const [error, setError] = useState("No te quedan mas tiradas, presiona smar para anotar tus puntos");
   const [puntaje, setPuntaje] = useState(0);
   const [puntajeEscalera, setPuntajeEscalera] = useState(0);
   const [puntajeFull, setPuntajeFull] = useState (0);
   const [puntajePoker, setPuntajePoker] = useState(0);
   const [puntajeGenerala, setPuntajeGenerala] = useState(0);
   

  function getRandomInt (max)  {
      return Math.floor(Math.random() * Math.floor(max));
  }
  
  function esJugada1(){
    var puntos= 0;
    listaDados.forEach(function(elemento) {
      if(1 == elemento){ 
       puntos=puntos+1
      } return puntos
  });
     
      }
    
  function esJugada2(){
    var puntos= 0;
    listaDados.forEach(function(elemento) {
      if(2 == elemento){ 
       puntos=puntos+1
      } return 2*puntos.length
  })}
  
  function esJugada3(){
    var puntos= 0;
    listaDados.forEach(function(elemento) {
      if(3 == elemento){ 
       puntos=puntos+1
      } return 3*puntos.length
  })}
  
  function esJugada4(){  var puntos= 0;
    listaDados.forEach(function(elemento) {
      if(4 == elemento){ 
       puntos=puntos+1
      } return 4*puntos.length
  })}

  function esJugada5(){  var puntos= 0;
    listaDados.forEach(function(elemento) {
      if(5 == elemento){ 
       puntos=puntos+1
      } return 5*puntos.length
  })}

  function esJugada6(){  var puntos= 0;
    listaDados.forEach(function(elemento) {
      if(6 == elemento){ 
       puntos=puntos+1
      } return 6*puntos.length
  })}
     
  const tirar = () => {
    if(contadorJugadas < 3){
        if(!isSelected1){ setRandomDado1 (diceArr[getRandomInt(6)]); }
        if(!isSelected2){ setRandomDado2 (diceArr[getRandomInt(6)]);} 
        if(!isSelected3){ setRandomDado3 (diceArr[getRandomInt(6)]);}       
        if(!isSelected4){ setRandomDado4 (diceArr[getRandomInt(6)]);}
        if(!isSelected5){ setRandomDado5 (diceArr[getRandomInt(6)]);} 
        
        setContadorJugadas(contadorJugadas+1);
   }
  }
  const reset=()=>{
    setPuntosDado1(0);
    setPuntosDado2(0);
    setPuntosDado3(0);
    setPuntosDado4(0);
    setPuntosDado5(0);
    setContadorJugadas(0);
    setIsSelected1(false);
    setIsSelected2(false);
    setIsSelected3(false);
    setIsSelected4(false);
    setIsSelected5(false);
    
  }              
     
  const selectCheck1 = (event) => { setIsSelected1(!isSelected1);}
  const selectCheck2 = (event) => { setIsSelected2(!isSelected2);}
  const selectCheck3 = (event) => { setIsSelected3(!isSelected3);}
  const selectCheck4 = (event) => { setIsSelected4(!isSelected4);}
  const selectCheck5 = (event) => { setIsSelected5(!isSelected5);}
 
  const dadosPorJugada = () => {
    if(isSelected1) { setListaDados(...listaDados, 1)} 
    if(isSelected2) { setListaDados(...listaDados, 2)}
    if(isSelected3) { setListaDados(...listaDados, 3)}
    if(isSelected4) { setListaDados(...listaDados, 4)}
    if(isSelected5) { setListaDados(...listaDados, 5)}
  } 

  function evaluarJugada(){
    esEscalera() ? setPuntajeEscalera(20)  : setPuntajeEscalera(0);
    esFull() ? setPuntajeFull(30) : setPuntajeFull(0);
    esPoker() ? setPuntajePoker(40) : setPuntajePoker(0);
    esGenerala() ? setPuntajeGenerala(puntajeGenerala+50) : setPuntajeGenerala(0);
    esJugada1();  
    esJugada2();
    esJugada3();
    esJugada4();
    esJugada5();
    esJugada6();
    
  }

function esEscalera (){ 
  setListaDados(listaDados.sort())
  return esEscaleraA || esEscaleraB
}

function esEscaleraA () {
  var tags = [ [2, 3, 4, 5, 6], listaDados ]
  let items = listaDados.filter(p => (
    
    p.tags.every( item => tags.includes(item) ) ))
}

function esEscaleraB () {
  var tags = [ [1, 2, 3, 4, 5], listaDados ]
  let items = listaDados.filter(p => (
    
    p.tags.every( item => tags.includes(item) ) ))
} 
function esFull(){
  var contador1=0;
  var contador2=0;
  var contador3=0;
  var contador4=0;
  var contador5=0;
  var contador6=0;
  var retorno=false;

  for(var i=0;i<=4;i++){
    switch (listaDados[i]){ 
      case 1 :{
        contador1++;
        break;
      }
      case 2 :{
        contador2++
        break;
      }
      case 3 :{
        contador3++
        break;
      }
      case 4:{
        contador4++
        break;
      }
      case 5 :{
        contador5++
        break;
      }
      case 6 :{
      contador6++
      break;
      }
    }
  }
  if((contador1==3||contador2==3||contador3==3||contador4==3||contador5==3||contador6==3)&&
    (contador1==2||contador2==2||contador3==2||contador4==2||contador5==2||contador6==2)){
    retorno =true;	
    }  return retorno;	
}

function esPoker(){
  var retorno = false;
  var i=0;
  var contador=0;
  while (i<=4){
    if (listaDados[i] == listaDados[0]){
      contador++;
    }
    i++;
  }
  if(contador == 4){
    retorno=true;
  }else {
    i=0;
    contador= 0;
    while (i<=4){
      if (listaDados[i]== listaDados[1]){
        contador++;
      }
    i++;
    }	
  }
  if (contador == 4){
    retorno = true
  }
  return retorno;	
}

function esGenerala(){
  var contador=0;
  var retorno=false;
  for(var i=0;i<=3;i++){
    if(listaDados[i]==listaDados[i+1]){contador++;}
    if(contador==4){retorno=true;}
  }
  return retorno;
}




return(
       <>
       <div className="wraper">  
        
          <div className="dices">
            <div><p> Puntaje </p>
            <div><TablaPuntajes/></div> 
            </div>
            <div className="parent">
            <table class="table fil">
                
                <tbody>
                    <tr>
                        <th style={{border: 'inset 0pt'}} scope="row"> <img src={randomDado1} /></th>
                        <th style={{border: 'inset 0pt'}} scope="row"> <img src={randomDado2} /></th>
                        <th style={{border: 'inset 0pt'}} scope="row"> <img src={randomDado3} /></th>
                        <th style={{border: 'inset 0pt'}} scope="row"> <img src={randomDado4} /></th>
                        <th style={{border: 'inset 0pt'}} scope="row"> <img src={randomDado5} /></th>
                        {/* class contenedor-card-select */}

                    </tr>
                    <tr>
                        <td style={{border: 'inset 0pt'}}> <input id="d1" name="check1" type="checkbox" value={isSelected1} onChange={selectCheck1} /></td>
                        <td style={{border: 'inset 0pt'}}> <input id="d2" name="check1" type="checkbox" value={isSelected2} onChange={selectCheck2} /></td>
                        <td style={{border: 'inset 0pt'}}> <input id="d3" name="check1" type="checkbox" value={isSelected3} onChange={selectCheck3} /></td>
                        <td style={{border: 'inset 0pt'}}> <input id="d4" name="check1" type="checkbox" value={isSelected4} onChange={selectCheck4} /></td>
                        <td style={{border: 'inset 0pt'}}> <input id="d5" name="check1" type="checkbox" value={isSelected5} onChange={selectCheck5} /></td>
                    </tr>
                                         
                </tbody>
                </table>
               
            
          <div className="main">
              <button className="btn-general" onClick={tirar}>Tirar Dados</button>
              <button className="btn-general" onClick={evaluarJugada}>Terminar Mano</button>
              <button className="btn-general" onClick={reset}>Reiniciar Partida</button>  
             
          </div>
          </div>
          
          </div>
          </div> 
        </>
    );
  }
    
export default BoardGame;


{/*      
</div>
              <div className="parent">
                <img src={randomDado2} />
                <div>
                 <input id="check2" name="check2" type="checkbox" onChange={() => setIsSelected2(!isSelected2)} />
                </div>
              </div>
              <div className="parent">  
                <img src={randomDado3} />
                <div>
                 <input id="check3" name="check3" type="checkbox" onChange={() => setIsSelected3(!isSelected3)} />
                </div>
              </div>
              <div className="parent">
                <img src={randomDado4} />
                <div>
                 <input id="check4" name="check4" type="checkbox" onChange={() => setIsSelected4(!isSelected4)} />
                </div>
              </div>  
              <div className="parent">
                <img src={randomDado5} />
                <div>
                 <input id="check5" name="check5" type="checkbox" onChange={() => setIsSelected5(!isSelected5)} />
                </div>
              </div>
            </div>  
          </div> */}
