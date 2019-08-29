const express = require('express');
const routes = express.Router();
const https = require('https');

// routes.use(books);

routes.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Content-Type", "application/json");
    https.get('https://api.earth911.com/earth911.getPostalData?api_key=eb3751a3e2f435e6&country=US&postal_code=48044', (resp) => {
        // console.log(resp);
        let data = 'D';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            console.log(JSON.parse(data).explanation);
        });
        
    });
    res.status(200).send("Hello!");
    res.end();
});


module.exports = routes; 