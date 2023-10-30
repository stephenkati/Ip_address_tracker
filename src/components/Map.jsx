import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from '/icon-location.svg';

const Map = ({ data }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (data && data.location) {
      const lat = data.location.lat;
      const lng = data.location.lng;

      if (!mapRef.current._leaflet_id) {
        const map = L.map(mapRef.current).setView([lat, lng], 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
        }).addTo(map);

        const marker = L.icon({ iconUrl: markerIcon });

        L.marker([lat, lng], { icon: marker }).addTo(map);
      }
    }
  }, [data]);

  return <div ref={mapRef} className='map' />;
};

export default Map;
