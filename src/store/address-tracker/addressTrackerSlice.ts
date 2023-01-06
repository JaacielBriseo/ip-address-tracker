import { createSlice } from '@reduxjs/toolkit';
import { AddressTracker } from '../../interfaces';

const initialValues: AddressTracker | null = null;
export const addressTrackerSlice = createSlice({
	name: 'addressTracker',
	initialState: initialValues,
	reducers: {
		setAddressTrackerData: (state, { payload }) => {
			state = payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setAddressTrackerData } = addressTrackerSlice.actions;
