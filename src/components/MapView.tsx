import { Map } from 'mapbox-gl';
import { useLayoutEffect, useRef } from 'react';
import { Loading } from '.';
import { useAppSelector } from '../store';

export const MapView = () => {
	const mapContainer = useRef<HTMLDivElement>(null);
	const { data, isLoading } = useAppSelector((state) => state.addressTracker);
	useLayoutEffect(() => {
		if (!isLoading) {
			// eslint-disable-next-line
			const map = new Map({
				container: mapContainer.current!, // container ID
				style: 'mapbox://styles/mapbox/dark-v10', // style URL
				center: [data.location.lng, data.location.lat], // starting position [lng, lat]
				zoom: 14, // starting zoom
			});
		}
	}, [isLoading, data.location.lng, data.location.lat]);

	if (isLoading) {
		return <Loading />;
	}
	return <div ref={mapContainer} className='h-screen w-screen'></div>;
};
