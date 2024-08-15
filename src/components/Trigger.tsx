import React, { useState } from 'react';
import axios from 'axios';

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/search?q=${query}`
      );
      setResults(response.data.results);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies or TV shows"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((result: any) => (
          <li key={result.id}>{result.title || result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
