import React, {Component} from "react";
import "./App.css";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Contacto from "./components/Contacto";
import Nosotros from "./components/Nosotros";
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
    const baseUrl = "http://18.216.140.87:8080/api/customer/customers";
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
                  <p className="lead text-center">Buscador de Clientes</p>
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
