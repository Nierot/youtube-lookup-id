const app = require('express')();
const { API_TOKEN, PORT, ROUTE } = require('./settings.json');

app.get(`${ROUTE}/`, (req, res) => {
    res.send('Youtube-lookup-id API')
});

app.get(`${ROUTE}/id`, (req, res) => {
    res.send('id');
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}${ROUTE}`))