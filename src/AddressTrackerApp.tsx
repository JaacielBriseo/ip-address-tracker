import axios from 'axios';
import { useEffect } from 'react';
import { MapView } from './components';
import { setAddressTrackerData, useAppDispatch } from './store';

export const AddressTrackerApp = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}`).then(({ data }) => {
			dispatch(setAddressTrackerData(data));
		});
		// eslint-disable-next-line
	}, []);

	return (
		<div className='font-Rubik'>
			<MapView />
		</div>
	);
};
