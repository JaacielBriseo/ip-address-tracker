/* eslint import/no-webpack-loader-syntax: off */
import { useLayoutEffect, useRef } from 'react';
//@ts-ignore
import { Marker, Map } from '!mapbox-gl';
import { useAppSelector } from '../store';

export const useMapView = () => {
	const mapContainer = useRef<HTMLDivElement>(null);
	const { data, isLoading } = useAppSelector((state) => state.addressTracker);
	useLayoutEffect(() => {
		if (!isLoading && data) {
			// eslint-disable-next-line
			const map = new Map({
				container: mapContainer.current!, // container ID
				style: 'mapbox://styles/mapbox/light-v11', // style URL
				center: [data ? data.location.lng : 0, data ? data.location.lat : 0], // starting position [lng, lat]
				zoom: 14, // starting zoom
			});
			new Marker({
				color: '#000000',
			})
				.setLngLat([data ? data.location.lng : 0, data ? data.location.lat : 0])
				.addTo(map);
		}
	}, [isLoading, data]);
	return mapContainer;
};
