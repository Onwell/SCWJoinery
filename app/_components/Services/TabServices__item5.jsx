'use client';
import Image from 'next/image';
import Button from '../Common/Button';
import SectionTitle from '../Common/SectionTitle';
import style from './TabServices.module.css';

const TabsIndex__item5 = ({ onClickBtn }) => {
	return (
		<>
			<div className="md:flex md:gap-[30px] lg:gap-[60px] md:flex-row-reverse">
				<div className="md:basis-1/2">
					<div className="img__fixed-height">
						<Image
							src="/images/services/tab-img05.jpg"
							fill
							style={{ objectFit: 'cover' }}
							quality={100}
							loading="lazy"
							alt="100% Satisfaction Guarantee"
						/>
					</div>
				</div>
				<div className="md:basis-1/2 only-md:mt-[40px] sm-max:mt-[35px]">
					<SectionTitle
						dataTitle="Mirror Supply Services"
						dataAddClass="blocktitle__topNone2"
					/>
					<p>
						We provide a comprehensive range of custom mirror solutions, perfect for enhancing any space in your home. Whether you&apos;re looking for decorative mirrors, bathroom mirrors, or functional designs for wardrobes and cabinets, we ensure high-quality products tailored to your specific requirements.
					</p>
					<ul className="list__type1 list__top">
						<li>Quality material</li>
						<li>Affordable prices</li>
						<li>Fast installation</li>
					</ul>
					<Button
						className={style.btn__top}
						onClick={onClickBtn}
					>
						Get A Quote
					</Button>
				</div>
			</div>
		</>
	);
};

export default TabsIndex__item5;
