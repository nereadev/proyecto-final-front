import {
  BrowserRouter as Router, Redirect, Route, Switch
} from "react-router-dom";
import { Container } from "react-bootstrap";

import RegistroPagina from "./paginas/RegistroPagina";
import IncidenciaPagina from "./paginas/IncidenciaPagina";
import MiCuentaPagina from "./paginas/MiCuentaPagina";
import MisIncidenciasPagina from "./paginas/MisIncidenciasPagina";
import ContactoPagina from "./paginas/ContactoPagina";
import NotFoundPagina from "./paginas/NotFoundPagina";
import InicioPagina from "./paginas/InicioPagina";
import ComoFunciona from "./paginas/ComoFunciona";
import NuevaIncidenciaPagina from "./paginas/NuevaIncidenciaPagina";
import Cabecera from "./componentes/Cabecera";
import Footer from "./componentes/Footer";
import ContextoTokenProvider from "./contextos/ContextoTokenProvider";
import ContextoIncidenciasProvider from "./contextos/ContextoIncidenciasProvider";
import ContextoUsuarioProvider from "./contextos/ContextoUsuarioProvider";

function App() {
  return (
    <Container fluid>
      <Router>
        <ContextoTokenProvider>
          <ContextoUsuarioProvider>
            <Cabecera />
            <ContextoIncidenciasProvider>
              <Switch>
                <Route path="/inicio" exact>
                  <InicioPagina />
                </Route>
                <RutaProtegida path="/registro/:accion" exact>
                  <RegistroPagina />
                </RutaProtegida>
                <Route path="/incidencia/:id" exact>
                  <IncidenciaPagina />
                </Route>
                <RutaProtegida path="/nueva-incidencia" exact>
                  <NuevaIncidenciaPagina />
                </RutaProtegida>
                <Route path="/mi-cuenta" exact>
                  <MiCuentaPagina />
                </Route>
                <RutaProtegida path="/mis-incidencias" exact>
                  <MisIncidenciasPagina />
                </RutaProtegida>
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
            </ContextoIncidenciasProvider>
            <Footer />
          </ContextoUsuarioProvider>
        </ContextoTokenProvider>
      </Router>
    </Container>
  );
}

export default App;
