import { GoogleMap,InfoWindowF, MarkerF, useLoadScript } from '@react-google-maps/api';

import './App.css'
import {Fragment, useState} from "react";

const markers = [

  {
    id: 1,
    names: "Qobustan",
    position: { lat: 40.0709493, lng: 49.3694411},
  },
  {
    id: 2,
    names: "Sumqayit",
    position: { lat: 40.5788843, lng: 49.5485073},
  },
  {
    id: 3,
    names: "Baku",
    position: { lat: 40.3947365, lng: 49.6898045},
  }
]


function App() {
 const {isLoaded} = useLoadScript ({
   googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY
 }) ;
  
 const [activeMarker, setActiveMarker] = useState(null);

 const handleActiveMarker = (marker) => {
   if (marker === activeMarker) {
     return;
   }
   setActiveMarker(marker);
 };
  


  return (
   <Fragment>
    <div className='container'>
      <h1 className='text-center'>Vite + react | Google Map Markers</h1>
      <div style= {{width: "100%", height: "90vh"}}>
       {isLoaded ? (
           <GoogleMap center={{ lat: 40.3947365, lng: 49.6898045}} zoom={10}
           onClick={() => setActiveMarker(null)}
           mapContainerStyle={{
            width:"100%",
            height: "90vh",
            
            }}>
              
              {markers.map(({ id, names, position }) => (
                <MarkerF
                key={id}
                position={position}
                onClick={() => handleActiveMarker(id)}
                icon={{
                   url:"https://www.pngitem.com/pimgs/m/243-2434291_transparent-face-png-one-piece-luffy-face-png.png",
                   scaledSize: { width: 50, height: 50 }
                }}>
              
                
                {activeMarker === id ? (
                    <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                      <div>
                        <p>{names}</p>
                      </div>
                    </InfoWindowF>
                  ) : null}
                </MarkerF>
              ))}
              


          </GoogleMap>


        ) : null}
      </div>
    </div>
   </Fragment>
  );
}

export default App 
