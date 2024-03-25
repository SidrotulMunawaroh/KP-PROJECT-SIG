import React, { useState } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import Sidebar from './Sidebar';
import MapContainer from './components/GoogleMap';
import './App.css';

const libraries = ['places'];

const App = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAtxv_YGV-BRegOOqy60wk2MWj2lHlTjKo', 
    libraries,
  }); 

  const [selectedLatLng, setSelectedLatLng] = useState(null);
  const [mapCenter, setMapCenter] = useState({ lat: -6.173381, lng: 106.824869 });

  const handleSetCoordinates = (lat, lng) => {
    setSelectedLatLng({ lat, lng });
    setMapCenter({ lat, lng }); // Perbarui pusat peta
  };

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div className="app-container">
      <Sidebar onSetCoordinates={handleSetCoordinates} />
      <MapContainer
        center={mapCenter} 
        selectedLatLng={selectedLatLng}
        setSelectedLatLng={setSelectedLatLng}
      />
    </div>
  );
};

export default App;
