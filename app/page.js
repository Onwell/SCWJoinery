import MainSlider from "./_components/index/MainSlider"
import OurServicesIndex from "./_components/index/OurServicesIndex"
import AboutIndex from "./_components/index/AboutIndex"
import TabsIndex from "./_components/index/TabsIndex"
import AdditionalServices from "./_components/index/AdditionalServices"
import HowWeWork from "./_components/index/HowWeWork"
import PromoFullWidth from "./_components/Common/PromoFullWidth"
import RequestQuote from "./_components/index/RequestQuote"
import FaqIndex from "./_components/index/FaqIndex"
import Testimonials from "./_components/index/Testimonials"
import NewsLayout from "./_components/index/NewsLayout"
import Partners from "./_components/index/Partners"
export default function Home() {
	return (
		<main id="tt-pageContent" className="overflow-hidden">
			<MainSlider />
			<OurServicesIndex />
			<AboutIndex />
			<PromoFullWidth
				dataIcon="icon-154518"
				dataTitle={"Efficient Residential & \n Commercial Joinery Services"}
				dataText="We create bespoke solutions for both homes and businesses, ensuring comfort, style, and functionality in every space."
				dataBgSrc="/images/bg01.png"
				dataMaxWidth="745"
				dataAddClass="fullwidthPromo__inner_tab"
			/>
			<TabsIndex />
			
			<HowWeWork />
			<PromoFullWidth
				dataIcon="icon-3410263"
				dataTitle={"Transform Your Space \n with Expert Craftsmanship"}
				dataText="Ready to create your dream kitchen, bathroom, or custom wardrobe?"
				dataBgSrc="/images/bg-02.jpg"
				dataMaxWidth="745"
				dataAddClass="fullwidthPromo__inner_box section__indent-top"
			/>
			<RequestQuote />
			<FaqIndex />
			<Testimonials />
			<Partners />
		</main>
	)
}
