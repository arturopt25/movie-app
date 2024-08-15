const express = require('express');
const axios = require('axios');
const router = express.Router();

const tmdbApiKey = process.env.TMDB_API_KEY;

router.get('/trending', async (req, res) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/11?api_key=11147301b1fc86eac3eb89f0b2555d02`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching trending data');
    }
});

router.get('/search', async (req, res) => {
    const query = req.query.q;
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/multi?query=${query}&api_key=${tmdbApiKey}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error searching for movies or TV shows');
    }
});

module.exports = router;
