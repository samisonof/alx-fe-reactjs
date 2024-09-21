import axios from 'axios';

const fetchAdvancedUserData = async ({ username, location, minRepos }) => {
  let query = '';

  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos} `;

  // Construct API endpoint using the query
  const endpoint = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;

  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export default fetchAdvancedUserData;
