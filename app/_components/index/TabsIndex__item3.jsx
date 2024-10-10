import Image from 'next/legacy/image';
import SectionTitle from '../Common/SectionTitle';
import ListWithTitle from '../Common/ListWithTitle';
//Import Data
export const dataPriority = [
	{
		id: 1,
		title: 'Accountability:',
		text: 'We take responsibility for our actions and are committed to delivering the highest standards to our clients and the communities we serve.',
	},
	{
		id: 2,
		title: 'Innovation:',
		text: 'We constantly evolve our techniques and designs, ensuring cutting-edge solutions that push the boundaries of modern joinery.',
	},
	{
		id: 3,
		title: 'Professional Service:',
		text: 'Our unwavering commitment to superior craftsmanship sets us apart, as we consistently aim for perfection in every project.',
	}
]
const TabsIndex__item3 = () => {
	return (
		<>
			<div className="md:grid-cols-2 md:grid  md:grid-flow-col md:gap-[30px]">
				<div className={`basis-1/2 md-max:mt-[-8px]`}>
					<SectionTitle
						dataSubtitle="mission statement"
						dataTitle="Our Mission & Vision"
						dataMaxWidth="422px"
					/>
					<ListWithTitle
						dataLayout={dataPriority}
						dataAddClass="grid md-max:gap-[16px] md:gap-[6px]"
					/>
				</div>
				<div className={`basis-1/2 sm-max:mt-[35px] only-md:mt-[40px] md:mt-[7px]`}>
					<div className='img__fixed-height'>
						<Image
							src='/images/home__tabimg02.jpg'
							layout='fill'
							quality={0}
							objectFit='cover'
							alt='Our Approach'
						/>
					</div>
				</div>
			</div>
			<div className={`relative sm-max:mt-[35px] only-md:mt-[40px] md:mt-[55px] grid md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px] lg-max:gap-[20px]`}>
				<div className={`basis-1/3`}>
					<div className='ttsubtitle_sm'>Our Vision</div>
					<p>
					To be the leading provider of bespoke joinery solutions, offering quality designs that enhance the beauty and functionality of every space. We measure success by client satisfaction, repeat business, and our reputation for excellence.
					</p>
				</div>
				<div className={`basis-1/3`}>
					<div className='ttsubtitle_sm'>Our Principles</div>
					<p>
					Honesty, Integrity, Innovation, Reliability, Respect, Empowerment, Teamwork, and Commitment to Customer Satisfaction.
					</p>
				</div>
				<div className={`basis-1/3`}>
					<div className='ttsubtitle_sm'>Values</div>
					<ul className='list__type1'>
						<li>Foster transparency and accountability</li>
						<li>Exceed client expectations</li>
						<li>Lead with a client-first mindset</li>
					</ul>
				</div>
			</div>
		</>
	)
};
export default TabsIndex__item3;