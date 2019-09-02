const express = require('express');
const routes = express.Router();
// const https = require('https');
const axios = require('axios');

// routes.use(books);

routes.get("/latLon/:country/:postalCode", (req, res) => {
    let latLon = {
        'latitude': "",
        'longitude': ""
    };
    res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Content-Type", "application/json");
    axios.get('https://api.earth911.com/earth911.getPostalData?api_key=eb3751a3e2f435e6&country=' + req.params.country + '&postal_code=' + req.params.postalCode)
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

routes.get("/location/:latitude/:longitude", (req, res) => {
    // let latLon = {
    //     'latitude': "",
    //     'longitude': ""
    // };
    res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Content-Type", "application/json");
    axios.get('https://api.earth911.com/earth911.searchLocations?api_key=eb3751a3e2f435e6&latitude=' + req.params.latitude + '&longitude=' + req.params.longitude)
        .then(response => {
            // console.log("worked");
            // latLon.latitude = response.data.result.latitude;
            // latLon.longitude = response.data.result.longitude;
            res.status(200).send(response.data.result[0]);
        })
        .catch(error => {
            console.log(error);
        });
    // res.status(200).send(latLon);
    // res.end();
});

routes.get("/reduce", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    axios.get('https://api.earth911.com/earth911.searchArticles?api_key=eb3751a3e2f435e6&query=reduce').then(response => {
        res.status(200).send(response.data);
    })
    .catch(error => {
        console.log(error);
    })
})

module.exports = routes; 