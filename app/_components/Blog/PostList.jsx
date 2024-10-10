'use client';
import { useState } from "react"
import Image from 'next/legacy/image'
import Link from 'next/link'
//Import Sections
import YoutubeVideo from '../Common/YoutubeVideo'
import Modal from '../Common/Modal'
//Import CSS
import styles from './PostList.module.css'
//Carusel
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-creative';
const PostList = (props) => {
	const [openModal, setOpenModal] = useState(false);
	const [youtubeVideoCode, setYoutubeVideoCode] = useState(false);
    const { id, title, img, description, time__posting__year, time__posting__month, time__posting__day, img__slider, youtubeCode, blockquote__text, blockquote__title, blockquote__subtitle } = props.data;
	return (
		<>
			<div key={id} className={`${styles.post} relative`}>
				{img || img__slider ? (
					<div className={`${styles.post__imgholder} overflow-hidden relative`}>
						{img ? (
							<div className={`${styles.post__img} relative`}>
								<Image
									src={img}
									width="780"
									height="449"
									layout="responsive"
									objectFit="cover"
									loading={`eager`}
									blurDataURL='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
									alt={title}
								/>
								{youtubeCode ? (
									<div
										className={`${styles.btn__round_icon} btn__round_icon obj__indent-center obj__inner-center icon-808557 unselectable`}
										onClick={() => {
											setOpenModal(true);
											setYoutubeVideoCode(youtubeCode);
										}}
									>
										<span></span>
									</div>
								):null}
							</div>
						):null}
						{img__slider ? (
							<div className={`${styles.post__slider} ${styles.post__img} post__slider relative pagination__inner overflow-hidden`}>
								<Swiper
									grabCursor={true}
									effect={'creative'}
									creativeEffect={{
										"prev": {
											"translate": ["-20%", 0, -1],
										},
										"next": {
											"translate": ["100%", 0, 0],
										}
									}}
									spaceBetween={0}
									slidesPerView={1}
									pagination={{ clickable: true }}
									modules={[Pagination,Autoplay,EffectCreative]}
								>
									{img__slider.map(({idslide, slide}) => (
										<SwiperSlide key={idslide} className="blog__slider">
											<Image
												src={slide}
												width="780"
												height="449"
												layout="responsive"
												objectFit="cover"
												quality={0}
												alt={title}
											/>
										</SwiperSlide>
									))}
								</Swiper>
								<style jsx global>{`
									.post__slider .swiper-pagination{
										justify-content: center;
									}
								`}</style>
							</div>
						):null}
					</div>
				):null}
				{time__posting__month || time__posting__day || time__posting__year ? (
					<div className={`${styles.post__data} overflow-hidden relative flex`}>
						{!img && !img__slider ? (
							<div className={`${styles.post__data_bg} absolute z-[1]`}>
								<Image
									src="/images/blog/post_bg_img.png"
									layout='fill'
									objectFit="cover"
									quality={0}
									alt={title}
								/>
							</div>
						):null}
						<div>
							<i className={`${styles.post__data_icon} icon-9927001`}></i>
							{time__posting__month} {time__posting__day}, {time__posting__year}
						</div>
						<div>by <span className="base__color">Admin</span></div>
					</div>
				):null}
				<div className={styles.post__layout}>
					{title ? (
						<h2 className={`${styles.post__title}`}>
							<Link href='/blog/{id}'  as={`/blog/${id}`}>
								<span>{title}</span>
							</Link>
						</h2>
					):null}
					{description ? (
						<p>
							{description}
						</p>
					):null}
					{blockquote__text ? (
						<blockquote className={`${styles.blockquote} ${styles.blockquote__top} relative`}>
							<div className={`${styles.blockquote__line} ${styles.blockquote__inner} relative`}>
								{blockquote__text ? (
									<p>The infamous toilet paper shortage occurring all over America is a natural consequence of the quarantine. It’s also probably not ending any time soon. Unless you luck out, you may.</p>
								):null}
								{blockquote__title ? (
									<p className={`indent__top`}>
										<strong className="base__color">- {blockquote__title}, </strong>
										<span className="text-sm">{blockquote__subtitle}</span>
									</p>
								):null}
							</div>
						</blockquote>
					):null}
					<Link href='/blog/{id}' className={`${styles.post__btnmore} btn`} as={`/blog/${id}`}><span>Read more</span></Link>
				</div>
			</div>
			<Modal
				openModal={openModal}
				onClose={() => setOpenModal(false)}
				dataModalSize="modal__sizeLg"
				dataModalClass="modal__type2"
			>
				<YoutubeVideo dataYoutubeVideoCode={youtubeVideoCode} />
			</Modal>
		</>
	)
};
export default PostList;