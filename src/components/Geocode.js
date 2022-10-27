import React from "react";
import Geocode from "react-geocode";

var coordinatesList = [];

Geocode.fromAddress("Red Barn Stores 3858-CUAJIMALPA").then(
    response => {
        let coordinates = {
            lat: 0,
            lng: 0
        }  

        coordinates.lat, coordinates.lng  = response.results[0].geometry.location;
        coordinatesList.push(coordinates);
        console.log(coordinates.lat, coordinates.lng);
    },
    error => {
        console.error(error);
    }
)

export var coordinatesList;