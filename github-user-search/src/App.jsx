import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import { searchGitHubUsers } from './services/githubApi';

const App = () => {
  const [users, setUsers] = useState([]);

  const handleSearch = async (query) => {
    try {
      const usersData = await searchGitHubUsers(query);
      setUsers(usersData);
    } catch (error) {
      console.error("Error fetching GitHub users:", error);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
