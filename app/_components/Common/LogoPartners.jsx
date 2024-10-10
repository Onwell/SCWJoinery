import Image from 'next/legacy/image';
import styles from './LogoPartners.module.css';
const imgData = [
	{
		id: 1,
		path: '/images/hettich.png',
		link: '/',
		alt: 'PLANET',
	},
	{
		id: 2,
		path: '/images/hafele.jpg',
		link: '/',
		alt: 'TREE LIFE',
	},
	{
		id: 3,
		path: '/images/laminex.png',
		link: '/',
		alt: 'LOGISTICS',
	},
	{
		id: 4,
		path: '/images/silestone.png',
		link: '/',
		alt: 'OVERLAP',
	}
];
const LogoPartners = ({wrapperClass}) => {
	return (
		<div className={`${wrapperClass} md:mt-[11px]`}>
			{imgData.map(({ id, path, link, alt }) => (
				<a key={id} href={link} target="_blank" className={`${styles.hover__border} ${styles.hover__borderw2} cursor-pointer inline-flex justify-center relative z-[1] content-center items-center`} rel="noreferrer noopener">
					<Image
						src={path}
						width={246}
						height={100}
						quality={0}
						alt={alt}
					/>
				</a>
			))}
		</div>
	);
};
export default LogoPartners;