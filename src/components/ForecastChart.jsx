import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function ForecastChart({ forecast }) {
  const data = forecast.map(item => ({
    time: new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    temp: Math.round(item.main.temp),
    humidity: item.main.humidity,
  }));

  return (
    <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-4">24-Hour Forecast</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="time" stroke="#93c5fd" tick={{ fontSize: 12 }} />
          <YAxis stroke="#93c5fd" tick={{ fontSize: 12 }} />
          <Tooltip contentStyle={{ background: '#1e3a5f', border: 'none', borderRadius: 8 }} />
          <Line type="monotone" dataKey="temp" stroke="#60a5fa" strokeWidth={2} dot={false} name="Temp (°C)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
