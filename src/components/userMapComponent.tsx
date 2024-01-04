import { useRef, useEffect } from 'react';
import GeoServices from './map/GeoServices';

export default function UserMapComponent() {
  const mapRef = useRef(null);

  useEffect(() => {
    async function geoCode() {
      const geocoder = new GeoServices();
      const { latitude, longitude } = await geocoder.geocode();

      const google = await geocoder.getBackingInstance().load();
      const searchBox = new google.maps.places.SearchBox(document.getElementById('search-box') as HTMLInputElement);
      const map = new google.maps.Map(mapRef.current as unknown as HTMLDivElement, {
        center: { lat: latitude, lng: longitude },
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
  }, [])

  return (
    <div>
      <input id="search-box" type="text" placeholder="Search places..." />
      <div style={{ height: "100vh", width: "100%" }} ref={mapRef}></div>
    </div>
  )
}