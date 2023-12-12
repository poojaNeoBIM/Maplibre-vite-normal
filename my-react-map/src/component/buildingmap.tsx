// import MapTiler SDK JS and the required React functions
import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './buildingmap.css';


// set up your map’s default state.
export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const location = { lng: 6.953101, lat: 50.935173 };
    const [zoom] = useState(14);
    maptilersdk.config.apiKey = 'ghWAJGJDFy898MQpbDI2';
  

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once
  
    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [location.lng, location.lat],
      zoom: zoom
    });
  
  }, [location.lng, location.lat, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}