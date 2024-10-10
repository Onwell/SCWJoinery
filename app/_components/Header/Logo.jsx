'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Logo.module.css';

const Logo = () => {
	return (
		<>
			<div className={`${styles.logo__wrapper} logo__wrapper`}>
				<Link href="/">
					<div className={`${styles.logo} ttlogo absolute inline-block leading-none outline-none`}>
						{/* Optimized Image component from Next.js */}
						<div className={`${styles.logo__icon} logo__icon mx-[auto]`}>
							<Image
								src="https://scwjoinery.theadvertisingcompany.com.au/img/demos/medical/SCW-Joinery-Logo.webp"
								alt="SCW Joinery Logo"
								width={150}
								height={50} 
								priority={true} 
							/>
						</div>
						<div className={`${styles.logo__text} logo__text overflow-hidden relative`}>
							SCW
							<div className={`${styles.wave_container} wave_container absolute overflow-hidden`}>
								<svg viewBox="0 0 1140 125" fill="none">
									<path d="M 0 59.9547 C 307.185 122.808 534.699 46.5899 847.24 39.6827 C 1159.78 32.7756 1270.98 45.0236 1440 59.9547 V 351.955 H 0 V 59.9547 Z">
										<animate
											repeatCount="indefinite"
											attributeName="d"
											dur="6s"
											values="M0 95.654C277.431 -69.1705 408 11.654 720 95.654C1032 179.654 1207.5 144.328 1440 95.654V387.654H0V95.654Z; M0 51.8168C277 169.163 433 131.471 720 51.8168C1007 -27.8372 1199 -5.83717 1440 51.8168V343.817H0V51.8168Z; M0 69.3411C342 69.3411 652 -51.313 994 25.687C1336 102.687 1354 103.687 1440 69.3411V361.341H0V69.3411Z; M0 95.654C277.431 -69.1705 408 11.654 720 95.654C1032 179.654 1207.5 144.328 1440 95.654V387.654H0V95.654Z&nbsp;">
										</animate>
									</path>
								</svg>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</>
	);
}

export default Logo;
