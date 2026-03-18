import { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard';
import ForecastChart from './components/ForecastChart';
import SearchBar from './components/SearchBar';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export default function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState('London');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);
    try {
      const [weatherRes, forecastRes] = await Promise.all([
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`),
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`)
      ]);
      const weatherData = await weatherRes.json();
      const forecastData = await forecastRes.json();
      setWeather(weatherData);
      setForecast(forecastData.list?.slice(0, 8) || []);
    } catch (err) {
      setError('Failed to fetch weather data. Check your API key.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchWeather(city); }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Weather Dashboard</h1>
      <SearchBar onSearch={(c) => { setCity(c); fetchWeather(c); }} />
      {loading && <p className="text-center mt-8">Loading...</p>}
      {error && <p className="text-center text-red-400 mt-8">{error}</p>}
      {weather && !loading && (
        <div className="max-w-4xl mx-auto mt-8 grid gap-6">
          <WeatherCard weather={weather} />
          <ForecastChart forecast={forecast} />
        </div>
      )}
    </div>
  );
}
