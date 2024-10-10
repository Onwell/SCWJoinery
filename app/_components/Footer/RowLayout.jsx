import Image from 'next/image'
import styles from './RowLayout.module.css'
import SocialsFooter from "../Footer/SocialsFooter"
const LayoutHolder = () => (
	<>
		<div className={`${styles.rowLayout} f-logo-layout text-center no-resize-text`}>
			<a href="index.html" className={`${styles.fLogo} inline-flex`}>
				<Image
					src='/images/f-logo.png'
					width={146}
					height={102}
					quality={0}
					alt='SCW Joinery'
				/>
			</a>
			<p>
				From custom designs to flawless finishes, we’re committed to bringing your dream spaces to life with exceptional craftsmanship and service.
			</p>
			<SocialsFooter />
		</div>
	</>
);
export default LayoutHolder;


