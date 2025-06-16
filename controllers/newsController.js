const axios = require('axios');
const {findUserByEmail} = require('../models/User');   
const { response } = require('../app');
const NEWS_API_KEY = process.env.NEWS_API_KEY || 'your_news_api_key';
const NEWS_API_URL = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=' + apikey;

const chache = {};

exports.getNews = async (req, res) => {
    try {
        const user = findUserByEmail(req.user.email);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const { categories, language, country } = user.Preferences;

        // Create a cache key based on user preferences
        const chached = chache[user.id]
        if (chached && Date.now()-chached.timestamp<10*60*1000){
            return res.json({ source: 'chache', articles: chached.data });
        }
        
        const catagory = categories[0]||'general';
        const response = await axios.get(NEWS_API_URL, {
            params: {
                category: catagory,
                language: language,
                country: country,
                apiKey: NEWS_API_KEY,
                pageSize: 10, // Limit to 10 articles
            }
        });

        const articles = response.data.articles;

        chache[user.id] = {     
            data: articles,
            timestamp: Date.now()
        };
        res.json({ source: 'API', articles });
    } catch (err) {
        console.error('newsApi error:', err.message );
        if (err.response && err.response.status === 429) {
            return res.status(429).json({ message: 'Rate limit exceeded. Please try again later.' });
        }
        res.status(500).json({ message: 'Failed to fetch news' });
    }
};