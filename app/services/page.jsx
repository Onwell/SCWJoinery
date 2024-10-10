import PageTitle from "../_components/Common/PageTitle";
import SectionTitle from '../_components/Common/SectionTitle';
import TabsServices from '../_components/Services/TabServices';
import WhatIsIncluded from '../_components/Services/WhatIsIncluded';
import ListWithTitle from '../_components/Common/ListWithTitle';
import TabInfo from '../_components/Services/TabInfo';
//Import Data
import {dataImpactCost} from '../_components/Services/WhatImpactsCostData';
//Page Layout
export default function Services() {
  return (
    <>
        <PageTitle dataTitle="Services" />
        <main id="tt-pageContent" className="overflow-hidden">
            <div className="section__indent">
				<div className="container__fluid">
					<SectionTitle
						dataSubtitle="our services"
						dataTitle={"Dependable Services When You Need Us"}
						dataTextUnder="Services"
						dataText="We understand that searching for reliable joinery services can feel overwhelming, especially when you're tackling a renovation or new build. Whether you're seeking expert craftsmanship or facing an urgent need, we’re here to deliver quality solutions you can trust."
						dataAddClass="text-center"
						dataMaxWidth="600px"
					/>
				</div>
                <TabsServices />
            </div>
        </main>
    </>
  )
}

