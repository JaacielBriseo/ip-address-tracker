import { useAppSelector } from '../store';
import { InfoItem } from '.';
import styles from './styles.module.css'

export const CardInfo = () => {
	const { data } = useAppSelector((state) => state.addressTracker);
	return (
		<div className={styles.cardInfo}>
			<InfoItem infoTitle='ip address' infoData={data ? data.ip : ''} />
			<InfoItem
				infoTitle='location'
				infoData={`${data ? data.location.city : ''}, ${data ? data.location.country : ''}`}
			/>
			<InfoItem infoTitle='timezone' infoData={data ? data.location.timezone : ''} />
			<InfoItem infoTitle='isp' infoData={data ? data.isp : ''} />
		</div>
	);
};
