import React, { Component } from 'react';
import GoogleMaps from 'simple-react-google-maps';
import Geocode from "react-geocode";


export default class Map extends Component {
    render() {
        return (
            <div className="container">
                <GoogleMaps
                    apiKey={"AIzaSyCBJmYUv6kdeBVy5uQGloE2kP42ZgBNd28"}
                    style={{ height: "500px", width: "370px" }}
                    zoom={10}
                    center={{
                        lat: 9.423765,
                        lng: -1.664428,
                    }}
                    markers={[
                        {lat: 9.423765,lng: -1.664428,}
                    ]}

                />
            </div>
        );
    }
}

