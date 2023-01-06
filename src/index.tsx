import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { AddressTrackerApp } from './AddressTrackerApp';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<AddressTrackerApp />
		</Provider>
	</React.StrictMode>
);
