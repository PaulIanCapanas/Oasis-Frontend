/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState, useEffect } from 'react';
import GeoServices from './map/GeoServices';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type UserMapComponentProp = {
  onSetLocation: (lat: string, lng: string, address: string) => void;
}

export default function UserMapComponent(prop: UserMapComponentProp) {
  const mapRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function geoCode() {
      const geocoder = new GeoServices();

      const google = await geocoder.getBackingInstance().load();
      console.log(google);
      const searchBox = new google.maps.places.SearchBox(document.getElementById('search-box') as HTMLInputElement);
      const map = new google.maps.Map(mapRef.current as unknown as HTMLDivElement, {
        center: { lat: 0, lng: 0 },
        zoom: 16
      });

      map.setOptions({
        styles: [
          {
            featureType: 'poi',
            stylers: []
          }
        ]
      })

      map.addListener('bounds_changed', () => {
        searchBox.setBounds(map.getBounds() as google.maps.LatLngBounds);
      });

      map.addListener('click', async (event: any) => {
        const marker = new google.maps.Marker({
          position: event.latLng,
          map: map
        });

        setTimeout(function () {
          const reverse = new google.maps.Geocoder();
          reverse.geocode({
            location: {
              lat: event.latLng.lat(),
              lng: event.latLng.lng()
            }
          }).then(response => {
            prop.onSetLocation(event.latLng.lat().toFixed(9), event.latLng.lng().toFixed(9), response.results[0].formatted_address)
          })
        }, 1000);
      });

      searchBox.addListener('places_changed', () => {
        const places = searchBox.getPlaces();

        if (!places) {
          return new Error("Undefined place")
        }

        if (places.length == 0) {
          return;
        }

        // For each place, get the icon, name and location.
        const bounds = new google.maps.LatLngBounds();
        places.forEach((place) => {
          if (!place.geometry) {
            console.log("Returned place contains no geometry");
            return;
          }
          if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
          } else {
            if (place.geometry.location) {
              bounds.extend(place.geometry.location);
            }
          }
        });
        map.fitBounds(bounds);
      });
    }

    geoCode().catch(console.error);
  }, []);

  return (
    <div className="relative h-screen">
      <div style={{ height: "70%", width: "100%" }} ref={mapRef}></div>
      <div className="absolute top-0 left-0 right-0 text-center p-4">
        <input
          id="search-box"
          type="text"
          placeholder="Search places..."
          className="p-2 border border-gray-300 rounded-md text-pink-500"
        />
      </div>
    </div>
  )
}