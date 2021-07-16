import React from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../logo.png';


class Header extends React.Component {

    render() {
        return (
            <>
            <div class="conteiner">
    <div class="left">
        <img className= "img-logo" src={logo} width="125" height="auto" href="/"/>
    </div>
    
    <div class="center">
        <p className="titulo">¡Bienvenidos!</p>

    </div>
</div>
   

            </> 

        );

    }
}
export default Header;