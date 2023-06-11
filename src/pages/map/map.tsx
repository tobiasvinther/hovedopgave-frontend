import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { Grid } from "@mui/material";
import { Container } from "../../components/container/container";
import { useLocation } from "react-router-dom";

export default function MapView() {
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
    restriction: {
      latLngBounds: {
        north: 57.7525,
        south: 54.583333,
        east: 15.197222,
        west: 8.0725,
      },
    },
  };

  const containerStyle = {
    width: "800px",
    height: "800px",
  };

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
        <MarkerF position={markerFromState} />
      </GoogleMap>
    </Grid>
  );
}
