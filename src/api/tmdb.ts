import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Set the backend server URL
});

export const fetchTrending = async () => {
  const response = await axiosInstance.get('/trending');
  return response.data;
};

export const searchMovies = async (query: string) => {
  const response = await axiosInstance.get(`/search?q=${query}`);
  return response.data;
};

export default axiosInstance;
