import Image from 'next/legacy/image';
import SectionTitle from '../Common/SectionTitle';

import BoxIcon2 from '../Common/BoxIcon2';
export const BoxIcon2Data = [
	{
		id: 1,
		icon: `icon-2891086`,
		title: `Expert Joinery Specialists`,
		text: `Our team works diligently to create bespoke designs that perfectly suit your space.`
	},
	{
		id: 2,
		icon: `icon-3731419`,
		title: `Personalized Service`,
		text: `We take the time to understand your vision, ensuring a collaborative and smooth process from start to finish.`
	},
	{
		id: 3,
		icon: `icon-1365455`,
		title: `Industry Innovators`,
		text: `By embracing the latest techniques and materials, we stay at the forefront of innovation in joinery.`
	},
  ]
const TabsIndex__item1 = () => {
	return (
		<>
			<div className="md:grid-cols-2 md:grid  md:grid-flow-col md:gap-[30px]">
				<div className={`basis-1/2 md-max:mt-[-8px]`}>
					<SectionTitle
						dataSubtitle="what expect from us"
						dataTitle="Our Approach"
						dataMaxWidth="422px"
					/>
					<p>
					At JCW Joinery, our approach is straightforward. We offer competitive pricing with no hidden fees, backed by a 100% guarantee on all craftsmanship. Our skilled joiners are available to handle any renovation or custom installation, ensuring your home or business is transformed with precision and care.
					</p>
						<ul className="list__type1 lg-max:mt-[19px] lg:mt-[33px]">
						<li>Custom Solutions Tailored to Your Needs</li>
						<li>Guaranteed Excellence in Every Detail</li>
					</ul>
				</div>
				<div className={`basis-1/2 sm-max:mt-[35px] only-md:mt-[40px] md:mt-[7px]`}>
					<div className='img__fixed-height'>
						<Image
							src='/images/home__tabimg01.jpg'
							layout='fill'
							quality={0}
							objectFit='cover'
							alt='Our Approach'
						/>
					</div>
				</div>
			</div>
			<div className={`relative sm-max:mt-[35px] only-md:mt-[40px] md:mt-[55px] grid md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px] lg-max:gap-[20px]`}>
				<BoxIcon2 dataSrcData={BoxIcon2Data} />
			</div>
		</>
	)
};
export default TabsIndex__item1;