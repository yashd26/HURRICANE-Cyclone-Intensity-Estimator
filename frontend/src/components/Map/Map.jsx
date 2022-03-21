import React, { useState, useEffect } from "react";
import MapGl, { Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapControl from "./MapControl";
import axios from "axios";

const Map = () => {
  const [marker, setMarker] = useState([]);
  const[cityMarker, setCityMarker] = useState([]);
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "calc(100vh - 64px)",
    latitude: 32.7795,
    longitude: -97.3463,
    zoom: 2,
  });

  useEffect(() => {
    const getMarker = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:3002/data");
        setMarker(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    const getMarkerWithCity = async(city) => {
      try{
        const res = await axios.get(`http://127.0.0.1:3002/data/?city=${city}`)
        setCityMarker(res.data)
        console.log(res.data)
      }catch(err){
        console.log(err)
      }
    }
    getMarker();
    getMarkerWithCity();
  }, []);

  const handleMarkerClick = (lng, lat) => {
    console.log(lng);
    console.log(lat);
    setViewport({ ...viewport, latitude: lat, longitude: lng, zoom: 4 });
  };

  return (
    <div>
      <MapGl
        {...viewport}
        mapStyle="mapbox://styles/priyanshup891/ckzdpbo1w005p14p93iljoz95"
        mapboxApiAccessToken="pk.eyJ1IjoicHJpeWFuc2h1cDg5MSIsImEiOiJja3ppYnlwbnMyemkyMm5vMTByeXIwZHJvIn0.joRfFaZ6lJmH2U5OBtVGyg"
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        transitionDuration={200}
      >
        {marker.map((mark) => (
          <Marker longitude={mark.longitude} latitude={mark.latitude}>
            <img
            className="rotate"
              style={{ cursor: "pointer" }}
              src="https://pngimg.com/uploads/hurricane/hurricane_PNG42.png"
              width="40px"
              alt="hurricane"
              onClick={() => handleMarkerClick(mark.longitude, mark.latitude)}
            />
          </Marker>
        ))}
        <NavigationControl  style={{position:"absolute", right:"0",marginTop:"20px", marginRight:"10px"}}/>
      </MapGl>
      <MapControl />
    </div>
  );
};

export default Map;
