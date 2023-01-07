import { useMapView } from '../hooks';

export const MapView = () => {
	const mapContainer = useMapView();

	return <div ref={mapContainer} className='h-screen w-screen'></div>;
};
