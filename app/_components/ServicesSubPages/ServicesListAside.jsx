import Link from 'next/link'
import styles from './ServicesListAside.module.css';
const ServicesListAside = ({dataList}) => {
	return (			
		<ul className={`${styles.aside_nav}`}>
			{dataList.map(({ id, text }) => (
				<li key={id}>
					<Link href="/services.html"> 
						{text}
					</Link>
				</li>
			))}
		</ul>
	)
};
export default ServicesListAside;