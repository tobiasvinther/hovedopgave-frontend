import {GoogleMap, useLoadScript, Marker, MarkerF} from "@react-google-maps/api"
import {useMemo} from "react";
import { mapStyles } from "../../components/map/mapStyles"
//import pin from "Frontend/graphics/pin.png"
//import { Wrapper, Status } from "@googlemaps/react-wrapper"



const mapOptions = {
    //mapTypeId: 'terrain',
    restriction: {
        latLngBounds: {
            north: 57.7525,
            south: 54.583333,
            east: 15.197222,
            west: 8.0725
        }
        //strictBounds: true,
    },

    styles: mapStyles
};

const markerOptions = {
    icon: {
        //url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        //url: pin,
        //scaledSize: { width: 50, height: 50 }
    }
};



export default function Map() {

    const { isLoaded } = useLoadScript({
    googleMapsApiKey : "AIzaSyDefb997K9hhybXBqYvBNlemn_3nWTuuT0",
    language: "da"
    })

    const mapCenter = useMemo(() => ({lat: 56, lng: 10.5}), []) //Calculate once
    const markerCenter = useMemo(() => ({lat: 55.45, lng: 12.18}), []) //Calculate once
        
        if(!isLoaded) {
            return <div>Loading...</div>
        }

        return <GoogleMap zoom={7} center={mapCenter} mapContainerClassName={"map-container"} options={mapOptions}>
            <MarkerF position={markerCenter} />
        </GoogleMap>
    }