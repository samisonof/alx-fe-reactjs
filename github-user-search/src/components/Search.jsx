import React, { useState } from 'react';
import fetchAdvancedUserData from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const data = await fetchAdvancedUserData({ username, location, minRepos });
      setUsers(data.items); // GitHub search returns the result inside an 'items' key
      setLoading(false);
    } catch (error) {
      if (error.message === 'User not found') {
        setError('Looks like we can’t find the user');
      } else {
        setError('An error occurred while fetching the data');
      }

      setLoading(false);
      setError('An error occurred while fetching the data');
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {users.length > 0 && (
        <div className="mt-4">
          {users.map((user) => (
            <div key={user.id} className="p-4 border-b border-gray-200">
              <img src={user.avatar_url} alt={`${user.login} avatar`} className="w-16 h-16" />
              <p>{user.login}</p>
              <p>Location: {user.location || 'Not available'}</p>
              <p>Repositories: {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
