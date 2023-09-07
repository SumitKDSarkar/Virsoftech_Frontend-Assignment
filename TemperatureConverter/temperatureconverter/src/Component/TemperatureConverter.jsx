import React, { useState } from 'react';
import './TemperatureConverter.css'; 

function TemperatureConverter() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('Celsius');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleTemperatureChange = (event) => {
    setTemperature(event.target.value);
    setResult('');
    setError('');
  };

  const handleScaleChange = (event) => {
    setScale(event.target.value);
    setResult('');
    setError('');
  };

  const convertToCelsius = () => {
    if (!isNaN(temperature)) {
      const celsius = scale === 'Celsius' ? parseFloat(temperature) : (parseFloat(temperature) - 32) * (5 / 9);
      setResult(`${temperature}${scale} is equal to ${celsius.toFixed(2)}°C`);
      setError('');
    } else {
      setError('Please enter a valid number');
    }
  };

  const convertToFahrenheit = () => {
    if (!isNaN(temperature)) {
      const fahrenheit = scale === 'Fahrenheit' ? parseFloat(temperature) : (parseFloat(temperature) * (9 / 5)) + 32;
      setResult(`${temperature}${scale} is equal to ${fahrenheit.toFixed(2)}°F`);
      setError('');
    } else {
      setError('Please enter a valid number');
    }
  };

  return (
    <div className="temperature-converter">
      <h1>Temperature Converter</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter temperature"
          value={temperature}
          onChange={handleTemperatureChange}
        />
        <select value={scale} onChange={handleScaleChange}>
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
        </select>
      </div>
      <div className="buttons-container">
        <button onClick={convertToCelsius}>Convert to Celsius</button>
        <button onClick={convertToFahrenheit}>Convert to Fahrenheit</button>
      </div>
      {error && <p className="error">{error}</p>}
      {result && <p className="result">{result}</p>}
    </div>
  );
}

export default TemperatureConverter;
