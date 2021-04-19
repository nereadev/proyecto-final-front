import {
  MapContainer, TileLayer, Marker, Popup
} from "react-leaflet";

const Mapa = () => (
  <MapContainer center={[41.38993034972496, 2.167612130848904]} zoom={14} scrollWheelZoom={false} className="mapa">
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[41.38993034972496, 2.167612130848904]}>
      <Popup>
        Tonto quien lo lea
      </Popup>
    </Marker>
  </MapContainer>
);

export default Mapa;
