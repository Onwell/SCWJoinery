'use client';
import Image from 'next/legacy/image';
//Import Css
import styles from '../../_components/Blog/Singlepost.module.css';
import styles2 from '../../_components/Blog/Blog.module.css';
//Import Sections
import PageTitle from "../../_components/Common/PageTitle";
import Socials from "../../_components/Common/Socials";
import AdminInfo from '../../_components/Blog/AdminInfo';
import NavPostsBtn from "../../_components/Blog/NavPostsBtn";
//Import Database
import {posts} from "../data/blog_data";
//Carusel
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-creative';
//Page Layout
export default function SinglePost({params}) {
	const postData = posts.find(post => post.id == params.id);
	return (
	  <>
		  <PageTitle
				dataSubTitle={`Blog`}
				dataSubTitleSrc={`/blog`}
				dataTitle={`${postData.title}`}
			/>
		  	<main id="tt-pageContent">
			  <div className="section__inner">
			  		<div className={`container container__fluid-xl`}>
						<div className='md:flex md:items-start'>
							<div className={`${styles2.holder__colleft} ${styles.colInnerBox}`}>
								<div className={`${styles.singlepost} relative`}>
									{postData.img ? (
										<div className={`${styles.singlepost__img} relative overflow-hidden`}>
											<Image
												src='/images/about_img01.jpg'
												width="780"
												height="449"
												blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAFUAQMAAADvakB3AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAACJJREFUaN7twYEAAAAAw6D7Ux9hAtUAAAAAAAAAAAAAACAcLnwAAWOAc2cAAAAASUVORK5CYII='
												layout="responsive"
												objectFit="cover"
												alt={postData.title}
											/>

										</div>
									):null}
									{postData.img__slider ? (
										<div className={`${styles.post__slider} ${styles.post__img} relative pagination__inner overflow-hidden`}>
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
												{postData.img__slider.map(({idslide, slide}) => (
													<SwiperSlide key={idslide}>
														<Image
															src={slide}
															width="780"
															height="449"
															layout="responsive"
															objectFit="cover"
															quality={0}
															alt="img"
														/>
													</SwiperSlide>
												))}
											</Swiper>
										</div>
									):null}
									<div className={`${styles.singlepost__cont}`}>
										<div className='singlepost__data'>
											{postData.time__posting}
										</div>
										{postData.title ? (
											<h2 className={`${styles.singlepost__title}`}>
												{postData.title}
											</h2>
										):null}
										{postData.description ? (
											<p>
												{postData.description}
											</p>
										):null}
										{postData.blockquote__text ? (
											<blockquote className={`${styles.blockquote} ${styles.blockquote__top} relative`}>
												<div className={`${styles.blockquote__line} ${styles.blockquote__inner} relative`}>
													{postData.blockquote__text ? (
														<p>{postData.blockquote__text}</p>
													):null}
													{postData.blockquote__title ? (
														<p className={`indent__top`}>
															<strong className="base__color">- {postData.blockquote__title}, </strong>
															<span className="text-sm">{postData.blockquote__subtitle}</span>
														</p>
													):null}
												</div>
											</blockquote>
										):null}
										{postData.additionaLayout?.map((item, index) => (
											<div key={index}>
												{item.title ? (
													<h5 className='ttsubtitle ttsubtitle__top'>
														{item.title}
													</h5>
												):null}
												{item.text ? (
													<p>
														{item.text}
													</p>
												):null}
												{item.text2 ? (
													<p>
														{item.text2}
													</p>
												):null}
											</div>
										))}
									</div>
								</div>
								<NavPostsBtn postId={params.id} />
							</div>
							<div className={`${styles2.holder__colright} ${styles.holder__colright} sticky`}>
								<AdminInfo postData={postData} />
								<div className={`${styles.singlepost__meta} flex`}>
									<Socials />
								</div>
							</div>
						</div>
					</div>
				</div>
		  	</main>
	  </>
	)
}