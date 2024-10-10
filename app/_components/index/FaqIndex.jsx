'use client';
import SectionTitle from '../Common/SectionTitle';
import Accordion from '../Common/Accordion';
import Link from 'next/link'
import {dataAccordion} from '../Common/AccordionData__index';
const FaqIndex = () => {
	return (
		<>
			<div className="container container__fluid-lg section__inner">
				<div className="md:flex md:gap-[30px]">
					<div className="md:basis-1/2">
						<SectionTitle
							dataSubtitle="frequently asked questions"
							dataTitle={`You Have Questions, \n We Have Answers`}
							dataTextUnder="FAQ"
							dataMaxWidth="480px"
							dataAddClass="blocktitle__left"
						/>
						<p className='no-resize-text'>
						Joinery projects can raise a lot of questions, especially when you’re looking to 
						optimize your space. Whether it’s about materials, design options, or installation processes, 
						we’re here to help. Got a question about your next renovation or custom design?
						</p>
						<Link
							href='/faq'
							className="lg:mt-[33px] lg-max:mt-[19px] btn"
						><span>Ask question</span></Link>
					</div>
					<div className="md:basis-1/2 sm-max:mt-[35px] only-md:mt-[40px]">
						<Accordion
							dataSrcData={dataAccordion}
						/>
					</div>
				</div>
			</div>
		</>
	)
};
export default FaqIndex;