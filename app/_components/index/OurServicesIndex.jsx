import SectionTitle from '../Common/SectionTitle';
import CaruselServices from '../Common/CaruselServices';
const OurServicesIndex = () => {
	return (
		<>
			<div className="container container__fluid-lg section__indent-top ">
				<div className="md:flex md:gap-[30px] holder__title">
					<div className="md:basis-1/2">
						<SectionTitle
							dataSubtitle="our services"
							dataTitle="From Custom Designs to Full Renovations"
							dataTextUnder="Services"
							dataAddClass="blocktitle__nomargin blocktitle__left"
							dataMaxWidth="430px"
						/>
					</div>
					<div className="md:basis-1/2 relative">
						<p className='ttnotes no-resize-text'>
						Whether you’re looking to optimize your kitchen, wardrobes, or bathroom, our expert team at SCW Joinery is here to transform your vision into reality. Let us help you create beautiful, functional spaces tailored to your needs.
						</p>
					</div>
				</div>
			</div>
			<div className="container__fluid">
				<div className='lg__indent-x'>
					<CaruselServices />
				</div>
			</div>
		</>
	)
};
export default OurServicesIndex;