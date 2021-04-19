import {
  BrowserRouter as Router, Redirect, Route, Switch
} from "react-router-dom";
import { Container } from "react-bootstrap";

import FormularioPagina from "./paginas/FormularioPagina";
import RegistroPagina from "./paginas/RegistroPagina";
import IncidenciaPagina from "./paginas/IncidenciaPagina";
import MiCuentaPagina from "./paginas/MiCuentaPagina";
import MisIncidenciasPagina from "./paginas/MisIncidenciasPagina";
import ContactoPagina from "./paginas/ContactoPagina";
import NotFoundPagina from "./paginas/NotFoundPagina";
import InicioPagina from "./paginas/InicioPagina";
import ComoFunciona from "./paginas/ComoFunciona";

function App() {
  return (
    <Container fluid className="contenedorApp">
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
          <Route path="/como-funciona">
            <ComoFunciona />
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
