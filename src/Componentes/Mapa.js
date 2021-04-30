import { icon } from "leaflet";
import {
  MapContainer, TileLayer, Marker, Popup
} from "react-leaflet";
import { useContext, useState } from "react";
import {
  Button, Col, Container, Row, Nav, NavLink
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { ContextoIncidencias } from "../contextos/ContextoIncidencias";
import { ContextoToken } from "../contextos/ContextoToken";

/* Info mapbox:
https://docs.mapbox.com/help/getting-started/ */
/* Reverse geocoding per trobar barri o districte a partir de coordenades:
https://docs.mapbox.com/api/search/geocoding/#reverse-geocoding */
/* Exemple de com fer un cloropleth:
https://docs.mapbox.com/help/tutorials/choropleth-studio-gl-pt-1/ */
/* D'on has tret el geoJson:
https://vangdata.carto.com/tables/shapefiles_barcelona_distrito/public */
/* Webs random que potser serveixen:
https://w33.bcn.cat/geoBCN/exemples/1.0/capes.aspx
https://github.com/martgnz/bcn-geodata */
/* https://api.mapbox.com/styles/v1/bernatjv/cknouqecv5hu017s5twegcpys/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYmVybmF0anYiLCJhIjoiY2tub2o2emxzMWVweTJxbnhicGxiejRvOCJ9.x-GGbqA5iOhR66FnJ4DWnw */

const urlMapbox = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${process.env.REACT_APP_TOKEN_MAPBOX}`;
const urlMapboxDistritos = `https://api.mapbox.com/styles/v1/bernatjv/cknow7tl91o6l17o1awn9zgcf/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_TOKEN_MAPBOX}`;
const urlDistritos = `https://api.mapbox.com/geocoding/v5/mapbox.places/2.167612130848904,41.38993034972496.json?access_token=${process.env.REACT_APP_TOKEN_MAPBOX}`;
const coordsBCN = [41.39993034972496, 2.147612130848904];

const Mapa = () => {
  const { getIncidencias } = useContext(ContextoIncidencias);
  const { existeToken } = useContext(ContextoToken);
  const incidencias = getIncidencias.incidencias;
  const setQuery = getIncidencias.setQuery;
  const [mapaDistritos, setMapaDistritos] = useState(false);
  const history = useHistory();

  const filtrarTipo = tipo => { setQuery(tipo); };
  const imgPopup = idIncidencia => (`${process.env.REACT_APP_FIREBOX_URL}${idIncidencia}?alt=media`);
  const getIconCircular = (tipoIncidencia) => `/img/${tipoIncidencia.split(" ").join("-")}-circular.png`;
  const getIcon = (tipoIncidencia) => icon({
    iconUrl: `/img/${tipoIncidencia.split(" ").join("-")}.png`,
    iconSize: [40],
  });

  const linkNuevaIncidencia = () => {
    if (existeToken) {
      history.push("/nueva-incidencia");
    } else {
      history.push("/registro/acceder");
    }
  };

  return (
    <>
      <Nav fill defaultActiveKey="incidencias">
        <Nav.Item>
          <NavLink eventKey="incidencias" className="tiposMapa" onSelect={() => setMapaDistritos(false)}>Puntos de incidencia</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink eventKey="distritos" className="tiposMapa" onSelect={() => setMapaDistritos(true)}>Incidencias por distritos</NavLink>
        </Nav.Item>
      </Nav>
      {!mapaDistritos && (
        <Nav fill className="filtros-mapa">
          <Nav.Item>
            <NavLink onClick={() => filtrarTipo("civismo")} eventKey="civismo" className="filtro-iconos">
              <img src="img/civismo-circular.png" alt="icono civismo" />
              Civismo
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink onClick={() => filtrarTipo("medio ambiente")} eventKey="medio-ambiente" className="filtro-iconos">
              <img src="img/medio-ambiente-circular.png" alt="icono civismo" />
              Medio Ambiente
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink onClick={() => filtrarTipo("infraestructura")} eventKey="infraestructura" className="filtro-iconos">
              <img src="img/infraestructura-circular.png" alt="icono civismo" />
              Infraestructura
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink onClick={() => filtrarTipo("otros")} eventKey="otros" className="filtro-iconos">
              <img src="img/otros-circular.png" alt="icono civismo" />
              Otros
            </NavLink>
          </Nav.Item>
        </Nav>
      )}
      <Row className="mapa-padre">
        <Button onClick={linkNuevaIncidencia} className="nueva-incidencia inicio">
          + Incidencia
        </Button>
        <MapContainer center={coordsBCN} zoom={13} scrollWheelZoom={false} className="mapa">
          {!mapaDistritos || (
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url={urlMapboxDistritos}
            />
          )}
          {mapaDistritos || (
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url={urlMapbox}
            />
          )}
          {
            (incidencias.length !== 0 && !mapaDistritos) && (
              incidencias.body.incidencias.map(incidencia => (
                !incidencia.latitud || (
                  <Marker key={incidencia._id} position={[incidencia.latitud, incidencia.longitud]} icon={getIcon(incidencia.tipoIncidencia.tipo)}>
                    <Popup>
                      <Row className="align-items-center">
                        <Col sm={12} as="img" className="popimg" src={imgPopup(incidencia.fotoIncidencia)} alt={incidencia.descripcion} />
                        <Col sm={2}>
                          <img className="circular" src={getIconCircular(incidencia.tipoIncidencia.tipo)} alt="" />
                        </Col>
                        <Col sm={10}>
                          <h4 className="titulo-popup d-inline mr-2">
                            {incidencia.nombre}
                          </h4>
                          <Link to={(`/incidencia/${incidencia._id}`)}><i className="fas fa-chevron-right" /></Link>
                        </Col>
                        <Col className="popup-votos">
                          {`${incidencia.votos} ${incidencia.votos !== 1 ? "votos" : "voto"}`}
                        </Col>
                      </Row>
                    </Popup>
                  </Marker>
                )
              ))
            )
          }
        </MapContainer>
      </Row>
    </>
  );
};

export default Mapa;
