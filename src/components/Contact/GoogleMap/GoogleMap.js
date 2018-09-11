import  { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import React, {Component} from 'react';

class MyMapComponent extends Component {
    render(){
        const ContactMaps = withGoogleMap(props=>
        <GoogleMap
            defaultZoom={18}
            defaultCenter={{ lat: 34.0471, lng: -118.239209}}
        >
        <Marker position={{ lat: 34.0471, lng: -118.239209}} /> 
        </GoogleMap>    
    ) ;
    return (
        <div className="map-container">
            <ContactMaps
 
                containerElement={ <div style={{height: '100%', width:'100%'}} />}
                mapElement={<div style={{height:'500px'}}/>}
                isMarkerShown
            />
        </div>
    )
    }
} 

export default MyMapComponent;


