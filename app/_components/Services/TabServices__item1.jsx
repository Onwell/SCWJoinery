'use client';
import Image from 'next/legacy/image';
import Button from '../Common/Button';
import SectionTitle from '../Common/SectionTitle';
import style from './TabServices.module.css'
const TabsIndex__item1 = ({onClickBtn}) => {
	return (
		<>
			<div className={`md:flex md:gap-[30px] lg:gap-[60px] md:flex-row-reverse`}>
				<div className="md:basis-1/2">
					<div className='img__fixed-height'>
						<Image
							className='img__fixed-height'
							src='/images/services/tab-img01.jpg'
							loading={`lazy`}
							layout='fill'
							objectFit='cover'
							quality={0}
							alt='100% Satisfaction Guarantee'
						/>
					</div>
				</div>
				<div className="md:basis-1/2 only-md:mt-[40px] sm-max:mt-[35px]">
					<SectionTitle
						dataTitle="Kitchen Renovation Services"
						dataAddClass="blocktitle__topNone2"
					/>
					<p>
					A kitchen is the heart of your home, and outdated designs or layouts can affect your daily routine. Renovating your kitchen not only improves functionality but also adds value to your property. With our expert team, we’ll create a space that blends beauty, practicality, and your unique style.
					</p>
					<ul className='list__type1 list__top'>
						<li>Consultation & Design</li>
						<li>Prices: Starting at $5,000</li>
						<li>Average time to complete: 4-6 weeks</li>
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
export default TabsIndex__item1;