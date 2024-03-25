import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const MapContainer = ({ center, selectedLatLng, setSelectedLatLng }) => {
  const onMapClick = (event) => {
    setSelectedLatLng({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

  return (
    <GoogleMap
      mapContainerStyle={{
        width: 'calc(100vw - 300px)',
        height: '100vh',
        float: 'right'
      }}
      zoom={10}
      center={center}
      onClick={onMapClick}
    >
      {selectedLatLng && (
        <Marker
          position={{ lat: selectedLatLng.lat, lng: selectedLatLng.lng }}
        />
      )}
    </GoogleMap>
  );
};

export default MapContainer;
