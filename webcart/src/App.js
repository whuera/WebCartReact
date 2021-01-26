import React , { Component } from 'react';
import './App.css';
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';

class App extends Component {


  state = {
    termino: "",
    users: []
  }


   datosBusqueda = (termino) => {     
     this.setState({
       termino
     }, () => {
       this.consultarApi();
     })
   }

  

   consultarApi = () => {
    const baseUrl = "http://192.168.100.67:8080/users";
    fetch(baseUrl)
             .then(respuesta => respuesta.json() )
             .then(resultado => this.setState({users: resultado }) )        
   }

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imagenes</p>          
          <Buscador
          datosBusqueda={this.datosBusqueda}
           />
        </div>        
        <Resultado 
        users = {this.state.users}
        />
      </div>      
    );
  }
}

export default App;
