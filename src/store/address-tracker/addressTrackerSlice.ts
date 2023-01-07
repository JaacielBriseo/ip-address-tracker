import { createSlice } from '@reduxjs/toolkit';
import { AddressTracker } from '../../interfaces';

type InitialStateSlice = { isLoading: boolean; data: AddressTracker | null };
const initialState: InitialStateSlice = {
	isLoading: true,
	data: null,
};
export const addressTrackerSlice = createSlice({
	name: 'addressTracker',
	initialState,
	reducers: {
		setAddressTrackerData: (state, { payload }) => {
			state.data = payload;
			state.isLoading = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setAddressTrackerData } = addressTrackerSlice.actions;
