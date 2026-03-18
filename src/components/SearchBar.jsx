import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) { onSearch(value.trim()); setValue(''); }
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2">
      <input value={value} onChange={e => setValue(e.target.value)}
        placeholder="Search city..." className="flex-1 px-4 py-2 rounded-xl bg-white/20 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      <button type="submit" className="px-6 py-2 bg-blue-500 rounded-xl hover:bg-blue-400">Search</button>
    </form>
  );
}
