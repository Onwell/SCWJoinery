import SectionTitle from '../Common/SectionTitle';
import Signature from '../Common/Signature';
import BoxLayout from './BoxLayout'
import styles from './TabsIndex.module.css'
const colData = [
	{
		id: 1,
		icon: 'icon-780840',
		title: 'Experienced Team',
		text: 'Our highly skilled professionals bring years of expertise to every project.'
	},
	
	{
		id: 3,
		icon: 'icon-1179233',
		title: 'Fully Licensed',
		text: 'All of our craftsmen are fully licensed and trained to meet the highest industry standards.'
	},
	{
		id: 4,
		icon: 'icon-1233103',
		title: 'Quality Every Time',
		text: 'We guarantee impeccable results on every project, ensuring your satisfaction.'
	},
]
const colRightData = colData.filter(colData => colData.id % 2 == 0);
const colLeftData = colData.filter(colData => colData.id % 2 !== 0);
const TabsIndex__item2 = () => {
	return (
		<div className='md:flex md:gap-[30px]'>
			<div className={`basis-1/2 md-max:mt-[-8px]`}>
				<SectionTitle
					dataSubtitle="why choose us"
					dataTitle="Expect the Best with Our Service"
					dataMaxWidth="422px"
				/>
				<p>
				At SCW Joinery, our mission is to deliver top-tier craftsmanship with a personal touch. 
				We take pride in providing reliable, expert joinery services that our clients can trust. 
				From custom kitchens to tailored wardrobes, 
				our experienced team is ready to bring your vision to life with precision and care.
				</p>
				<ul className="list__type1 lg-max:mt-[19px] lg:mt-[33px]">
					<li>Transparent Pricing</li>
					<li>We Treat Your Home as Our Own</li>
				</ul>
				<div className={styles.signature__indent}>
					<Signature
						dataSrcImg="/images/signature-img01.png"
						dataTitle="Manager"
					/>
				</div>
			</div>
			<div className="basis-1/2 flex
				lg:gap-[30px]  lg-max:gap-[15px]
				only-md:mt-[40px] sm-max:mt-[35px]">
				<div className={`basis-1/2 ${styles.custom__col}`}>
					<BoxLayout dataSrcData={colLeftData} />
				</div>
				<div className={`basis-1/2 ${styles.custom__col}`}>
					<BoxLayout dataSrcData={colRightData} />
				</div>
			</div>
		</div>
	)
};
export default TabsIndex__item2;