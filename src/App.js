// import logo from './logo.png';
import './App.css';
import Partida from './components/Partida';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import BoardGame from './components/BoardGame';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';

function App() {
  return (
   
     
      <BrowserRouter>
          <div className="">
        
         <div className="">
           <div>
              <Switch> 
              <Route exact path="/" component= {Home}/>
              <Route path="/partida" component= {Partida}/>
                 <Route path="/boardGame" component={BoardGame} />
                 <Route path="/header" component={Header} />
                  <Route path ="*" render = {() => <h1> NOT FOUND </h1>}/>
              </Switch>
           </div> 
         </div>
          </div>
      
       </BrowserRouter> 
        
  
  );
}

export default App;
