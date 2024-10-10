'use client';
import Image from 'next/legacy/image';
import Button from '../Common/Button';
import SectionTitle from '../Common/SectionTitle';
import style from './TabServices.module.css'
const TabsIndex__item2 = ({onClickBtn}) => {
	return (
		<>
			<div className={`md:flex md:gap-[30px] lg:gap-[60px] md:flex-row-reverse`}>
				<div className="md:basis-1/2">
					<div className='img__fixed-height'>
						<Image
							src='/images/services/tab-img02.jpg'
							layout='fill'
							objectFit='cover'
							quality={0}
							loading={`lazy`}
							alt='100% Satisfaction Guarantee'
						/>
					</div>
				</div>
				<div className="md:basis-1/2 only-md:mt-[40px] sm-max:mt-[35px]">
					<SectionTitle
						dataTitle="Custom Wardrobe Solutions"
						dataAddClass="blocktitle__topNone2"
					/>
					<p>
					Transform your space with a custom wardrobe designed to meet your unique needs. Whether you need to maximize storage or create a stylish feature, our team can design, build, and install wardrobes that fit seamlessly into your home.
					</p>
					<ul className='list__type1 list__top'>
						<li>Consultation & Design</li>
						<li>Prices: Starting at $1,200</li>
						<li>Average time to complete: 2-4 weeks</li>
					</ul>
					<Button
						className={`${style.btn__top}`}
						onClick={(e) => {
							onClickBtn();
						}}
					>
						Get A Quote
					</Button>
				</div>
			</div>
		</>
	)
};
export default TabsIndex__item2;