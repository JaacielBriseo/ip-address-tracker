import { Map } from 'mapbox-gl';
import { useEffect, useRef, useState } from 'react';

export const MapView = () => {
	const mapContainer = useRef<HTMLDivElement>(null);
	const mapRef = useRef<Map | null>(null);
	const [lng, setLng] = useState(-70.9);
	const [lat, setLat] = useState(42.35);
	const [zoom, setZoom] = useState(9);

	useEffect(() => {
		if (mapRef.current) return; // initialize map only once
		mapRef.current = new Map({
			container: mapContainer.current!,
			style: 'mapbox://styles/mapbox/dark-v10',
			center: [lng, lat],
			zoom: zoom,
		});
	});
	return <div ref={mapContainer} className='h-[400px]'></div>;
};
