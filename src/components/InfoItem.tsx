import styles from './styles.module.css';
export const InfoItem = ({ infoTitle, infoData }: { infoTitle: string; infoData: string }) => {
	return (
		<div className={styles.infoItemDiv}>
			<h1 className={styles.infoItemHeader}>{infoTitle}</h1>
			<span className={styles.infoItemSpan}>{infoData}</span>
		</div>
	);
};
