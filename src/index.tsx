import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { AddressTrackerApp } from './AddressTrackerApp';
import './index.css';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiamFhY2llbGIiLCJhIjoiY2xiajN1MXpoMTV2aTNucHIwZXRmY2tsdSJ9.C2-OLQLA45m2KWfV7LHYPQ';
if (!navigator.geolocation) {
	alert('Tu navegador no tiene opción de Geolocation');
	throw new Error('Tu navegador no tiene opción de Geolocation');
}
const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<AddressTrackerApp />
		</Provider>
	</React.StrictMode>
);
