import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import projects from '../data/projects.json';
import L from 'leaflet';

let customIcon = '';
if(typeof window !== 'undefined'){
  customIcon = new L.icon({
    iconUrl: '/pin.png',
    iconSize: [32, 32], // Size of the icon
    iconAnchor: [12, 55], // Point of the icon which will correspond to marker's location
    popupAnchor: [0, -55] // Point from which the popup should open relative to the iconAnchor
  });
}

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
