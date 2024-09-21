import axios from 'axios';

// Function to fetch user data based on the search term
const fetchUserData = async (username) => {
  const endpoint = `https://api.github.com/users/${username}`;

  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};

// Function for advanced search with parameters like location and repo count
const fetchAdvancedUserData = async ({ username, location, minRepos }) => {
  let query = '';

  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos} `;

  const endpoint = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;

  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export { fetchUserData, fetchAdvancedUserData };
