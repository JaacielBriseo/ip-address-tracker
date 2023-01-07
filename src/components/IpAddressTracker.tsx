import styles from './styles.module.css'
interface InfoCardProps {
	children: React.ReactElement | React.ReactElement[];
}
export const IpAddressTracker = ({ children }: InfoCardProps) => (
	<div className={styles.ipAddressTracker}>{children}</div>
);
