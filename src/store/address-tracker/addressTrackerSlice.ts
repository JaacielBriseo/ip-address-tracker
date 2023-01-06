import { createSlice } from '@reduxjs/toolkit';

const initialValues = {
	data: {
		ip: '',
		location: {
			country: '',
			region: '',
			city: '',
			lat: 0,
			lng: 0,
			postalCode: '',
			timezone: '',
			geonameId: 0,
		},
		domains: ['', ''],
		as: {
			asn: 0,
			name: '',
			route: '',
			domain: '',
			type: '',
		},
		isp: '',
	},
	isLoading: true,
};
export const addressTrackerSlice = createSlice({
	name: 'addressTracker',
	initialState: initialValues,
	reducers: {
		setAddressTrackerData: (state, { payload }) => {
			state.data = payload;
			state.isLoading = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setAddressTrackerData } = addressTrackerSlice.actions;
