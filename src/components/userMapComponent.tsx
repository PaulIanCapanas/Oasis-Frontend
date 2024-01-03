import { useRef, useEffect } from 'react';
import GeoServices from './map/GeoServices';

export default function UserMapComponent() {
    const mapRef = useRef(null);

    useEffect(() => {
        async function geoCode() {
            const geocoder = new GeoServices();
            const { latitude, longitude } = await geocoder.geocode();

            const google = await geocoder.getBackingInstance().load();
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
        }

        geoCode().catch(console.error);
    }, [])

    return (
        <div style={{ height: 500, width: 500 }} ref={mapRef}></div>
    )
}