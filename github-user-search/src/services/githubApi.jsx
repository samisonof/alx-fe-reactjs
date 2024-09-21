import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

export const searchGitHubUsers = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: { q: query },
      headers: {
        Authorization: `token ${API_KEY}`,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export default githubApi; 