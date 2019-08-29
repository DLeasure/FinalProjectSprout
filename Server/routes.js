const express = require('express');
const routes = express.Router();
// const https = require('https');
const axios = require('axios');

// routes.use(books);

routes.get("/", (req, res) => {
    let latLon = {
        'latitude': "",
        'longitude': ""
    };
    res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Content-Type", "application/json");
    axios.get('https://api.earth911.com/earth911.getPostalData?api_key=eb3751a3e2f435e6&country=US&postal_code=48044')
        .then(response => {
            latLon.latitude = response.data.result.latitude;
            latLon.longitude = response.data.result.longitude;
            res.status(200).send(latLon);
        })
        .catch(error => {
            console.log(error);
        });
    // res.status(200).send(latLon);
    // res.end();
});


module.exports = routes; 