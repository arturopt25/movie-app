const axios = require('axios');

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

const fetchTrending = async () => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}movie/11?api_key=${TMDB_API_KEY}`, {
      params: {
        api_key: TMDB_API_KEY
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching trending data');
  }
};

const search = async (query) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/search/multi`, {
      params: {
        api_key: TMDB_API_KEY,
        query
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error searching for data');
  }
};

const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/${id}`, {
      params: {
        api_key: TMDB_API_KEY
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching movie details');
  }
};

const fetchTVShowDetails = async (id) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/tv/${id}`, {
      params: {
        api_key: TMDB_API_KEY
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching TV show details');
  }
};

module.exports = {
  fetchTrending,
  search,
  fetchMovieDetails,
  fetchTVShowDetails
};
