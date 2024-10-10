import styles from './Telephone.module.css'
export default function Telephone(){
	return (
		<div className={`${styles.tel__holder} whitespace-nowrap relative`}>
			<span className={`${styles.tel__text} md-max:hidden`}>Need Help Now? Call Us!</span>
			<a href="tel:028764 0405" className={`${styles.tel__tel} flex`} title='Сall me (02) 8764 0405' aria-label={`Сall me 123456789`}>
				<i className={`${styles.tel__icon} icon-25453 relative inline-block`}></i>
				(02) 8764 0405
			</a>
		</div>
	);
}