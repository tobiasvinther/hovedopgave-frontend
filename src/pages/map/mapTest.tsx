import {
  GoogleMap,
  useLoadScript,
  Marker,
  MarkerF,
} from "@react-google-maps/api";
import { useMemo, useRef } from "react";
import { mapStyles } from "../../components/map/mapStyles";
import { Grid } from "@mui/material";
import { Container } from "../../components/container/container";
//mport * as dotenv from "dotenv"
//import Map from "../../components/map/map";
//import pin from "Frontend/graphics/pin.png"
//import { Wrapper, Status } from "@googlemaps/react-wrapper"
import { useLocation } from "react-router-dom";

export default function MapView() {
  //dotenv.config()

  let key = "";

  if (process.env.REACT_APP_GOOGLE_API) {
    key = process.env.REACT_APP_GOOGLE_API;
    console.log("API key loaded");
  }

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: key,
    language: "da",
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Container>
        <Map />
      </Container>
    </>
  );
}

function Map() {
  const location = useLocation();
  const data = location.state;
  console.log(data);

  const markerFromState = { lat: data.latitude, lng: data.longitude };

  const mapOptions = {
    //mapTypeId: 'terrain',
    restriction: {
      latLngBounds: {
        north: 57.7525,
        south: 54.583333,
        east: 15.197222,
        west: 8.0725,
      },
      //strictBounds: true,
    },

    //styles: mapStyles
  };

  const containerStyle = {
    width: "800px",
    height: "800px",
  };

  const markerOptions = {
    icon: {
      //url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      //url: pin,
      //scaledSize: { width: 50, height: 50 }
    },
  };

  const mapCenter = useMemo(() => ({ lat: 56, lng: 10.5 }), []); //Calculate once
  const markerCenter = useMemo(() => ({ lat: 55.45, lng: 12.18 }), []); //Calculate once

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "50vh" }}
    >
      <GoogleMap
        zoom={12}
        center={markerFromState}
        mapContainerStyle={containerStyle}
        mapContainerClassName={"map-container"}
        options={mapOptions}
      >
        {/*<MarkerF position={markerCenter} />*/}
        <MarkerF position={markerFromState} />
      </GoogleMap>
    </Grid>
  );
}

/*
export default function MapView() {
    
    return (
    <><div>Hej</div><Map></Map></>
    )
}
*/
