import { useSearchedIp } from '../hooks';

export const SearchInput = () => {
	const { onQueryChange } = useSearchedIp();
	return (
		<div className='flex w-80 h-14 justify-center lg:w-[555px]'>
			<input type='text' placeholder='Search for any IP' onChange={onQueryChange} />
			<button>
				<img src='./images/icon-arrow.svg' alt='' />
			</button>
		</div>
	);
};
