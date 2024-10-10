'use client';
import styles from './ModalGallery.module.css';
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import Image from 'next/image';

const ModalGallery = ({dataModalArray, dataItemActive}) => {
    return (
        <>
            <div className={`${styles.swiper__holder} swiper__holder relative z-1`}>
                <Swiper
                    loop={true}
                    grabCursor={true}
                    effect={'creative'}
                    creativeEffect={{
                        prev: {
                            translate: ['-20%', 0, -1],
                        },
                        next: {
                            translate: ['100%', 0, 0],
                        },
                    }}
                    initialSlide={dataItemActive - 1}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={{
                        prevEl: '#jsmodal__prev',
                        nextEl: '#jsmodal__next',
                    }}
                    modules={[Navigation, EffectCreative]}
                >
                    {dataModalArray.map(({ id, imglarge__path }) => (
                        <SwiperSlide key={id} className={`${styles.swiperSlide}`}>
                            <div className={`${styles.img} relative`}>
                                {/* Add width and height for Image component optimization */}
                                <Image
                                    src={imglarge__path}
                                    alt={`Gallery Image ${id}`} // Improve alt text for accessibility
                                    layout="responsive" // Responsive images
                                    width={800} // Adjust the width to fit your layout
                                    height={600} // Adjust the height accordingly
                                    priority={id === 0} // Optionally prioritize the first image
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={`${styles.jsmodal__btn_holder} absolute z-10 flex flex-col flex-wrap`}>
                <div
                    id='jsmodal__prev'
                    className={`${styles.jsmodal__btn} ${styles.jsmodal__prev} obj__inner-center`}
                >
                    <HiOutlineArrowNarrowLeft />
                    <label aria-hidden="true">Left</label>
                </div>
                <div
                    id='jsmodal__next'
                    className={`${styles.jsmodal__btn} ${styles.jsmodal__next} obj__inner-center`}
                >
                    <HiOutlineArrowNarrowRight />
                    <label aria-hidden="true">Right</label>
                </div>
            </div>
        </>
    );
};

export default ModalGallery;