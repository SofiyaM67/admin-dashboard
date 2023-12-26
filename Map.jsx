
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

const Map = () => {
  const center = [0, 0];

  const markers = [
    { position: [51.505, -0.09], content: 'Marker 1' },
    { position: [62.515, -0.3], content: 'Marker 2' },
    { position: [74.505, -0.44], content: 'Marker 3' }
    // Add more markers as needed
  ];

  const defaultIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <MapContainer center={center} zoom={2} style={{ height: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position} icon={defaultIcon}>
          <Popup>{marker.content}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
