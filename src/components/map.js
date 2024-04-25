import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import projects from '../data/projects.json';

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
