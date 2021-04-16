import {
  BrowserRouter as Router, Redirect, Route, Switch
} from "react-router-dom";
import { Container } from "react-bootstrap";
import FormularioPagina from "./Paginas/FormularioPagina";
import ListaPagina from "./Paginas/ListaPagina";
import RegistroPagina from "./Paginas/RegistroPagina";
import IncidenciaPagina from "./Paginas/IncidenciaPagina";
import MiCuentaPagina from "./Paginas/MiCuentaPagina";
import MisIncidenciasPagina from "./Paginas/MisIncidenciasPagina";
import ContactoPagina from "./Paginas/ContactoPagina";
import NotFoundPagina from "./Paginas/NotFoundPagina";
import InicioPagina from "./Paginas/InicioPagina";

function App() {
  return (
    <Container fluid>
      <Router>
        <Switch>
          <Route path="/inicio" exact>
            <InicioPagina />
          </Route>
          <Route path="/registro" exact>
            <RegistroPagina />
          </Route>
          <Route path="/formulario-incidencia" exact>
            <FormularioPagina />
          </Route>
          <Route path="/lista-incidencias" exact>
            <ListaPagina />
          </Route>
          <Route path="/incidencia" exact>
            <IncidenciaPagina />
          </Route>
          <Route path="/mi-cuenta" exact>
            <MiCuentaPagina />
          </Route>
          <Route path="/mis-incidencias" exact>
            <MisIncidenciasPagina />
          </Route>
          <Route path="/contacto" exact>
            <ContactoPagina />
          </Route>
          <Route path="/" exact>
            <Redirect to="/inicio" />
          </Route>
          <Route path="*">
            <NotFoundPagina />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
