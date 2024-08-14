const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const tmddbRoutes = require('./routes/tmdb');
const { fetchTrending, search, fetchMovieDetails, fetchTVShowDetails } = require('./tmdbService');



const  tmdbApiKey = process.env.TMDB_API_KEY;
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use('/api', tmddbRoutes)

app.get('/api/trending', async (req, res) => {
    try {
      const data = await fetchTrending();
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  app.get('/api/search', async (req, res) => {
    const { q } = req.query;
    try {
      const data = await search(q);
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  app.get('/api/movie/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const data = await fetchMovieDetails(id);
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  app.get('/api/tv/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const data = await fetchTVShowDetails(id);
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


app.get('/', (req, res) => {
    res.send('TMDB API Backend')
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));