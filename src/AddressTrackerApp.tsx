import { useEffect } from 'react';
import { addressTrackerApi } from './apis';
import { setAddressTrackerData, useAppDispatch, useAppSelector } from './store';
import { CardInfo, IpAddressTracker, Loading, MapView, SearchInput, Title } from './components';

export const AddressTrackerApp = () => {
	const dispatch = useAppDispatch();
	const { isLoading } = useAppSelector((state) => state.addressTracker);

	useEffect(() => {
		addressTrackerApi
			.get(`/country,city`)
			.then(({ data }) => dispatch(setAddressTrackerData(data)))
			.catch((err) => {
				console.log(err);
				throw new Error('Ipify api not working');
			});
		// eslint-disable-next-line
	}, []);
	if (isLoading) {
		return <Loading />;
	}
	return (
		<div className='font-Rubik flex flex-col items-center'>
			<IpAddressTracker>
				<Title title='IP Address Tracker' />
				<SearchInput />
			</IpAddressTracker>
			<CardInfo />
			<MapView />
		</div>
	);
};
