export default function WeatherCard({ weather }) {
  const { name, main, weather: conditions, wind } = weather;
  return (
    <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-4xl font-bold">{name}</h2>
          <p className="text-blue-200 capitalize mt-1">{conditions[0]?.description}</p>
        </div>
        <div className="text-right">
          <div className="text-7xl font-thin">{Math.round(main.temp)}°C</div>
          <p className="text-blue-200">Feels like {Math.round(main.feels_like)}°C</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-6 border-t border-white/20 pt-6">
        <div><p className="text-blue-300 text-sm">Humidity</p><p className="text-xl font-semibold">{main.humidity}%</p></div>
        <div><p className="text-blue-300 text-sm">Wind</p><p className="text-xl font-semibold">{Math.round(wind.speed)} m/s</p></div>
        <div><p className="text-blue-300 text-sm">Pressure</p><p className="text-xl font-semibold">{main.pressure} hPa</p></div>
      </div>
    </div>
  );
}
