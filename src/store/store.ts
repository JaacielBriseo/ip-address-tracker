import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { addressTrackerSlice } from './address-tracker/addressTrackerSlice';

export const store = configureStore({
	reducer: {
		addressTracker: addressTrackerSlice.reducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
