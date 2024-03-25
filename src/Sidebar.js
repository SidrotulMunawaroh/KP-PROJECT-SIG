import React from 'react';

const Sidebar = ({ onSetCoordinates }) => {
  const [inputLat, setInputLat] = React.useState('');
  const [inputLng, setInputLng] = React.useState('');

  const handleSetCoordinates = () => {
    const lat = parseFloat(inputLat);
    const lng = parseFloat(inputLng);

    if (!isNaN(lat) && !isNaN(lng)) {
      onSetCoordinates(lat, lng);
      setInputLat('');
      setInputLng('');
    } else {
      alert('Invalid coordinates!');
    }
  };

  return (
    <div className="sidebar">
      <div className="input-container">
        <label>Latitude:</label>
        <input
          type="text"
          value={inputLat}
          onChange={(e) => setInputLat(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Longitude:</label>
        <input
          type="text"
          value={inputLng}
          onChange={(e) => setInputLng(e.target.value)}
        />
      </div>
      <button onClick={handleSetCoordinates}>Set Coordinates</button>
    </div>
  );
};

export default Sidebar;
