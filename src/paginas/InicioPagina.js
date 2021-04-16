import Cabecera from "../componentes/Cabecera";
import Footer from "../componentes/Footer";
import Listado from "../componentes/Listado";
import Mapa from "../componentes/Mapa";

const InicioPagina = () => (
  <>
    <Cabecera />
    <div>
      <Mapa />
      <Listado />
    </div>
    <Footer />
  </>
);

export default InicioPagina;
