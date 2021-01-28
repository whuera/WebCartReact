import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contacto from "./components/Contacto";
import Nosotros from "./components/Nosotros";
import Inicio from "./components/Inicio";
import Buscador from "./components/Buscador";
import Resultado from "./components/Resultado";

class App extends Component {
  state = {
    termino: "",
    users: [],
  };

  datosBusqueda = (termino) => {
    this.setState(
      {
        termino,
      },
      () => {
        this.consultarApi();
      }
    );
  };

  consultarApi = () => {
    const baseUrl = "http://192.168.100.67:8080/users";
    fetch(baseUrl)
      .then((respuesta) => respuesta.json())
      .then((resultado) => this.setState({ users: resultado }));
  };

  render() {
    return (
      <Router>
        <div className="container-md mt-5">
          <div className="btn-group">
            <Link to="/" className="btn btn-dark">
              Inicio
            </Link>
            <Link to="/contacto" className="btn btn-dark">
              Contacto
            </Link>
            <Link to="/nosotros" className="btn btn-dark">
              Nosotros
            </Link>
          </div>
          <hr />
          <Switch>
            <Route path="/contacto">
              <Contacto />
            </Route>
            <Route path="/nosotros">
              <Nosotros />
            </Route>
            <Route path="/" exact>
              <div className="app container">
                <div className="jumbotron">
                  <p className="lead text-center">Buscador de imagenes</p>
                  <Buscador datosBusqueda={this.datosBusqueda} />
                </div>
                <Resultado users={this.state.users} />
              </div>
            </Route>
          </Switch>       
        </div>
      </Router>
    );
  }
}

export default App;
