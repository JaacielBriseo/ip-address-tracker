import { ChangeEvent, useRef, useState } from 'react';
import { addressTrackerApi } from '../apis';

import { setAddressTrackerData, useAppDispatch } from '../store';

export const useSearchedIp = () => {
	const debounceRef = useRef<NodeJS.Timeout>();
	const dispatch = useAppDispatch();
	const [isValidIp, setIsValidIp] = useState(false);

	const searchByIp = async (query: string) => {
		if (query.length === 0) return;

		const resp = await addressTrackerApi.get(`/country,city`, {
			params: {
				ipAddress: query,
			},
		});
		dispatch(setAddressTrackerData(resp.data));
		return resp.data;
	};

	const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
		const ipRegex =
			/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
		setIsValidIp(ipRegex.test(event.target.value));

		if (debounceRef.current) clearTimeout(debounceRef.current);

		if (isValidIp) {
			debounceRef.current = setTimeout(() => {
				searchByIp(event.target.value);
			}, 1000);
		}
	};
	return {
		isValidIp,
		onQueryChange,
	};
};
