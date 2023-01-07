import styles from './styles.module.css';
export const Title = ({ title }: { title: string }) => {
	return <h1 className={styles.title}>{title}</h1>;
};
