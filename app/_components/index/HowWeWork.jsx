import styles from './HowWeWork.module.css'
import Image from 'next/legacy/image';
import SectionTitle from '../Common/SectionTitle';
const infoData = [
	{
	  id: 1,
	  path: '/images/step1.png',
	  title: 'Consultation',
	},
	{
		id: 2,
		path: '/images/step2.png',
		title: 'Quote & Provide Service',
	},
	{
		id: 3,
		path: '/images/step3.png',
		title: 'Clean & Finalize',
	},
]
const WorkSpecifics = () => {
	if (!infoData) return null;
	return (
		<>
			<div className="container container__fluid-xl section__indent">
				<SectionTitle
					dataSubtitle="how we work"
					dataTitle="Seamless Solutions for Your Dream Spaces!"
					dataTextUnder="Our Work"
					dataText="We take pride in delivering reliable, high-quality craftsmanship with friendly, professional service."
					dataAddClass="text-center"
					dataMaxWidth="580px"
				/>
				<div className={`
					text-center
					grid gap-[30px]
					690-min:grid-cols-3 690-min:grid-flow-col
					690-max:grid 690-max:grid-cols-2
				`}>
					{infoData.map(({ id, path, title }) => (
						<div className={`
							${styles.step}
						`} key={id}>
							{path ? (
								<div className={`leading-none`}>
									<Image
										src={path}
										width={294}
										height={276}
										className='inline-block relative'
										alt={title || 'img'}
										quality={0}
									/>
								</div>
							):null}
							{title ? (
								<h6 className={`${styles.step__title} ttsubtitle_sm`}>{title}</h6>
							):null}
						</div>
					))}
				</div>
			</div>
		</>
	)
};
export default WorkSpecifics;