import React, {useState} from 'react';
import './tablapuntajes.css';


function TablaPuntajes() {

    const[sumar1, setSumar1]=useState(0);
     const[sumar2, setSumar2]=useState(0);
     const[sumar3,setSumar3]=useState(0);
     const[sumar4,setSumar4]=useState(0);
     const[sumar5, setSumar5]=useState(0);
     const[sumar6, setSumar6]=useState(0);
     const[puntosEscalera, setPuntosEscalera]=useState(0);
     const[puntosFull, setPuntosFull]=useState(0);
     const[puntosPoker, setPuntosPocker]=useState(0);
     const[puntosGenerala, setPuntosGenerala]=useState(0);
     const[puntosDobleGenerala, setPuntosDobleGenerala]=useState(0);
     
     function sumaTotal () { return sumar1+sumar2+sumar3+sumar4+sumar5+sumar6+puntosEscalera+puntosFull+puntosPoker+puntosGenerala+puntosDobleGenerala}
     

    
    return (
        <div>
            <table class="table fil">
                <thead>
                    <tr>
                        <th scope="col">Juego</th>
                        <th scope="col">Puntuación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{sumar1}</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>{sumar2}</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>{sumar3}</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>{sumar4}</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>{sumar5}</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>{sumar6}</td>
                    </tr>
                    <tr>
                        <th scope="row">Escalera</th>
                        <td>{puntosEscalera}</td>
                    </tr>
                    <tr>
                        <th scope="row">Full</th>
                        <td>{puntosFull}</td>
                    </tr>
                    <tr>
                        <th scope="row">Poker</th>
                        <td>{puntosPoker}</td>
                    </tr>
                    <tr>
                        <th scope="row">Generala</th>
                        <td>{puntosGenerala}</td>
                    </tr>
                    <tr>
                        <th scope="row">Doble Generala</th>
                        <td>{puntosDobleGenerala}</td>
                    </tr>
                    <tr>
                        <th scope="row">Total Puntos</th>
                        <td>{sumaTotal}</td>
                    </tr>
                   
                </tbody>
                </table>
                        </div>
    )
}

export default TablaPuntajes

