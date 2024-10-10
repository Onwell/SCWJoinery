import styles from './RowInfo.module.css'
const infoData = [
	{
	  id: 1,
	  icon: 'icon-786204',
	  title: 'Head Office:',
	  text: 'Unit 9/414 Marion St, Condell Park NSW 2200'
	},
	{
		id: 2,
		icon: 'icon-126509',
		title: 'Give Us A Call:',
		telephone: '(02) 8764 0405',
		text: ''
	},
	{
		id: 3,
		icon: 'icon-9927001',
		title: 'Working hours:',
		text: 'Mon - Fri (08:00 - 17:00) \n Weekends - Closed'
	}
]
const InfoHolder = () => {
	if (!infoData) return null;
	return (
		<>
			<div className={`${styles.finfo__wrapper} 690-min:grid-cols-3 690-min:grid  690-min:grid-flow-col 690-min:gap-[30px]`}>
				{infoData.map(({ id, icon, title, text, telephone }) => (
					<div className={`${styles.finfo} relative text-center no-resize-text`} key={id}>
						<div className={`${styles.finfo__icon} icon-694055 text-center relative inline-block`}><i className={`${icon} absolute z-[1]`}></i></div>
						<div className={`${styles.finfo__title} text-center`}>{title}</div>
						{telephone ? (
							<address>{telephone}</address>
						):null}
						<p className='mx-[auto]'>{text}</p>
					</div>
				))}
			</div>
		</>
	)
};
export default InfoHolder;