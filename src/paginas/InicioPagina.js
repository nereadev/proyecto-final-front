import Cabecera from "../Componentes/Cabecera";
import Footer from "../Componentes/Footer";
import Listado from "../Componentes/Listado";
import Mapa from "../Componentes/Mapa";

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
