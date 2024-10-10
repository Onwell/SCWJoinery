'use client';
import Image from 'next/legacy/image';
import Button from '../Common/Button';
import SectionTitle from '../Common/SectionTitle';
import style from './TabServices.module.css'
const TabsIndex__item3 = ({onClickBtn}) => {
	return (
		<>
			<div className={`md:flex md:gap-[30px] lg:gap-[60px] md:flex-row-reverse`}>
				<div className="md:basis-1/2">
					<div className='img__fixed-height'>
						<Image
							src='/images/services/tab-img03.jpg'
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
						dataTitle="Laundry Design & Renovation Services"
						dataAddClass="blocktitle__topNone2"
					/>
					<p>
					We offer custom laundry design and renovation services to help you optimize space and functionality while maintaining a modern, stylish look. Our expert team collaborates with you to create a laundry room that is not only practical but also complements the aesthetics of your home.
					</p>
					<ul className='list__type1 list__top'>
						<li>Consultation & Design</li>
						<li>Fast Installation</li>
						<li>Quality materials</li>
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
export default TabsIndex__item3;