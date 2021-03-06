import {
  BrowserRouter as Router, Redirect, Route, Switch
} from "react-router-dom";
import { Container } from "react-bootstrap";
import { RutaProtegida } from "./componentes/RutaProtegida";
import RegistroPagina from "./paginas/RegistroPagina";
import IncidenciaPagina from "./paginas/IncidenciaPagina";
import MiCuentaPagina from "./paginas/MiCuentaPagina";
import MisIncidenciasPagina from "./paginas/MisIncidenciasPagina";
import ContactoPagina from "./paginas/ContactoPagina";
import NotFoundPagina from "./paginas/NotFoundPagina";
import InicioPagina from "./paginas/InicioPagina";
import ComoFuncionaPagina from "./paginas/ComoFuncionaPagina";
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
          <Cabecera />
          <Switch>
            <ContextoIncidenciasProvider>
              <ContextoUsuarioProvider>
                <Route path="/inicio" exact>
                  <InicioPagina />
                </Route>
                <Route path="/mi-cuenta" exact>
                  <MiCuentaPagina />
                </Route>
              </ContextoUsuarioProvider>
              <RutaProtegida path="/nueva-incidencia" exact>
                <NuevaIncidenciaPagina />
              </RutaProtegida>
              <RutaProtegida path="/mis-incidencias" exact>
                <MisIncidenciasPagina />
              </RutaProtegida>
            </ContextoIncidenciasProvider>
          </Switch>
          <Switch>
            {/* para si la encuentra, que no renderice nada */}
            <Route path="/inicio" exact />
            <Route path="/nueva-incidencia" exact />
            <Route path="/mis-incidencias" exact />
            <Route path="/mi-cuenta" exact />
            <Route path="/incidencia/:id" exact>
              <IncidenciaPagina />
            </Route>
            <RutaProtegida path="/registro/:accion" exact>
              <RegistroPagina />
            </RutaProtegida>
            <Route path="/como-funciona" exact>
              <ComoFuncionaPagina />
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
          <Footer />
        </ContextoTokenProvider>
      </Router>
    </Container>
  );
}

export default App;
