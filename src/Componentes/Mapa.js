import {
  MapContainer, TileLayer, Marker, Popup
} from "react-leaflet";
/* Info mapbox: https://docs.mapbox.com/help/getting-started/ */

const token = "pk.eyJ1IjoiYmVybmF0anYiLCJhIjoiY2tub2o2emxzMWVweTJxbnhicGxiejRvOCJ9.x-GGbqA5iOhR66FnJ4DWnw";
const urlMapbox = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${token}`;
const urlDefault = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const Mapa = () => (
  <MapContainer center={[41.38993034972496, 2.167612130848904]} zoom={14} scrollWheelZoom={false} className="mapa">
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url={urlMapbox}
    />
    <Marker position={[41.38993034972496, 2.167612130848904]}>
      <Popup>
        Tonto quien lo lea
      </Popup>
    </Marker>
  </MapContainer>
);

export default Mapa;
