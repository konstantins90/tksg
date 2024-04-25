import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import projects from '../data/projects.json';


// Definieren Sie benutzerdefinierte Marker-Icons
const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41],
});

const AddressMap = () => {
  return (
    <>
    <MapContainer center={[52.52, 13.405]} zoom={7} scrollWheelZoom={false} style={{ height: '450px', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
          url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
        />
      {projects.map((address, index) => (
        <Marker
          key={index}
          position={[address.geo.lat, address.geo.lng]}
          icon={customIcon}
        >
          <Popup>
            <div>
              <h3>{address.name}</h3>
              <p>{address.street}</p>
              <p>{address.postcode} {address.city}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    </>
  );
};

export default AddressMap;
