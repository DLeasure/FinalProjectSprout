const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.static('./dist/Sprout'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '/dist/Sprout/index.html'));
});

app.use(routes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Server Running");
});