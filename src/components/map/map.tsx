import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";
import { mapStyles } from "../../components/map/mapStyles";

const mapOptions = {
  restriction: {
    latLngBounds: {
      north: 57.7525,
      south: 54.583333,
      east: 15.197222,
      west: 8.0725,
    },
  },

  styles: mapStyles,
};

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDefb997K9hhybXBqYvBNlemn_3nWTuuT0",
    language: "da",
  });

  const mapCenter = useMemo(() => ({ lat: 56, lng: 10.5 }), []); //Calculate once
  const markerCenter = useMemo(() => ({ lat: 55.45, lng: 12.18 }), []); //Calculate once

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap
      zoom={7}
      center={mapCenter}
      mapContainerClassName={"map-container"}
      options={mapOptions}
    >
      <MarkerF position={markerCenter} />
    </GoogleMap>
  );
}
