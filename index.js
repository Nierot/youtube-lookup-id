const app = require('express')();
const cors = require('cors');
const YouTube = require('simple-youtube-api');
const { API_TOKEN, PORT, ROUTE } = require('./settings.json');

// Setup YouTube
const yt = new YouTube(API_TOKEN);

// Define Routes
app.get(`${ROUTE}/info`, (req, res) => {
    const id = req.query.id;
    if (!id) return res.status(400).json({
        code: 400, 
        status: 'id paramater missing'
    });

    yt.getVideoByID(id)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
});

// Configure server
app.use(cors())

// Start server
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}${ROUTE}`))