'use client';
import React, { useEffect } from 'react';
import Image from 'next/legacy/image';
import styles from './ToggleBarLayout.module.css'

//Import Sections
import MenuItem from './MenuItem';
import items from '../Header/MenuData';
import Button from '../Common/Button'
import Socials from "../Common/Socials"
//Import Js
import {menuMobile} from '../../../public/js/utilitie';
//Import Data
const infoBox = [
	{
		id: 1,
		icon: 'icon-786204',
		title: 'Visit us:',
		content: 'Unit 9/414 Marion St, Condell Park NSW 2200'
	},
	{
		id: 2,
		icon: 'icon-126509',
		title: 'Phone Numbers:',
		address: '(02) 8764 0405'
	},
	{
		id: 3,
		icon: 'icon-9927001',
		title: 'Working Hours:',
		content: 'Mon - Friday (08:00 - 17:00)'
	}
];

const ToggleBarLayout = ({onClickClose, onClickModal}) => {
    useEffect(() => {
		menuMobile();
	}, []);
    return (
        <>
            <div className={`${styles.toggleBar__bg} absolute z-[0]`}>
                <Image
                    src='/images/popup-wrapper.jpg'
                    width={396}
                    height={629}
                    quality={0}
                    alt='MapImg'
                />
            </div>
            {/* Mobile Menu */}
            <div id='jsMobileMenu' className='relative z-[2] w-[100%] unselectable'>
                <nav>
                    <ul className="desktopmenu__level1">
                        {items.map((item, index) =>
                            <MenuItem
                                key={index}
                                item={item}
                            />
                        )}
                    </ul>
                </nav>
                <div className="mobileMenu__back flex absolute top-[0] left-[0] w-full cursor-pointer pointer-events-auto items-center content-stretch" id="jsMobileMenu__back">Back</div>
            </div>
            {/* Toggle Bar Logo */}
            <div className={`toggleBar__objHidden_mobile inline-block text-center relative align-top`}>
                
                <div className={`${styles.toggleBar__logo_text}`}>
                    SCW Joinery
                </div>
            </div>
            <p className={`toggleBar__objHidden_mobile relative ${styles.logo_popup_info}`}>
            Whether you’re looking to optimize your kitchen, wardrobes, or bathroom, our expert team at SCW Joinery is here to transform your vision into reality.
            </p>
            <Button
                className={`${styles.popup_btn}`}
                onClick={(e) => {
                    onClickClose(false);
                    setTimeout(() => {
                        onClickModal(true);
                    })
                }}
            >
                Schedule Online
            </Button>

            {/* Info Items */}
            <div className={`${styles.toggleBar__item} relative`}>
                <div className='ttsubtitle'>Our Contacts</div>
                <div className={`${styles.infoBox__wrapper}`}>
                    {infoBox.map(({id, icon, title, content, address}) =>
                        <div key={id} className={`${styles.infoBox__item} flex items-center justify-start`}>
                            <div className={`${styles.infoBox__icon} icon-694055 relative`}>
                                <span className={`${icon} obj__indent-center`}></span>
                            </div>
                            <div className={`${styles.infoBox__cont}`}>
                                {title ? (
                                    <div className={`${styles.infoBox__title} base__color`}>
                                        {title}
                                    </div>
                                ):null}
                                {content ? (
                                    <p>{content}</p>
                                ):null}
                                {address ? (
                                    <address className={styles.infoBox__address}>{address}</address>
                                ):null}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.toggleBar__item}>
                <Socials />
            </div>
            {/* Btn Close */}
            <div
                className={`${styles.toggleBar__close} toggleBar__objHidden_mobile  obj__inner-center icon-748122 absolute`}
                onClick={(e) => {
                    onClickClose(false);
                }}
            >
                <label>Close</label>
            </div>
            <style jsx global>
				{`
                    @media (min-width: 1101px){
                        #jsMobileMenu{
                            display:none;
                        }
                    }
                    @media (max-width: 1100px){
                        #jsMobileMenu{
                            overflow: hidden;
                            padding-bottom: 12px;
                            padding-left: 11px;
                        }
                        #jsMobileMenu nav {
                            transition-duration: 300ms;
                            left: 0;
                            position: relative;
                        }
                        #jsMobileMenu nav > ul {
                            transition-duration: 300ms;
                        }
                        #jsMobileMenu nav > ul > li a {
                            display: inline-block;
                            font-size: 16px;
                            padding: 8px 25px 8px 0;
                            color: var(--base-color);
                            font-weight: bold;
                        }
                        @media (hover: hover) {
                            #jsMobileMenu nav > ul > li a:hover{
                                color: var(--base-color2);
                            }
                        }
                        #jsMobileMenu nav > ul > li a.is-active,
                        #jsMobileMenu nav > ul > li.itemParentActive > a{
                            color: var(--base-color2);
                        }
                        #jsMobileMenu nav > ul > li > ul {
                            top: 40px;
                        }
                        #jsMobileMenu nav > ul ul {
                            left: 100%;
                            width: 100%;
                            position: absolute;
                            opacity: 0;
                            top: 0;
                        }
                        #jsMobileMenu li.active > ul {
                            opacity: 1;
                            z-index: 2;
                        }
                        #jsMobileMenu li.has-submenu > a {
                            position: relative;
                            z-index: 1;
                            display: block;
                            width: calc(100% - 50px);
                        }
                        #jsMobileMenu .link__openSubmenu {
                            position: absolute;
                            display: block;
                            right: 0px;
                            margin-top: 2px;
                            width: 50px;
                            height: 36px;
                            text-align: center;
                            z-index: 2;
                            cursor: pointer;
                        }
                        #jsMobileMenu .link__openSubmenu:before {
                            content: "";
                            border: solid var(--base-color);
                            border-width: 0 2px 2px 0;
                            display: inline-block;
                            padding: 2px;
                            position: relative;
                            top: 3px;
                            -webkit-transform: rotate(-45deg);
                            transform: rotate(-45deg);
                            pointer-events: none;
                        }
                        #jsMobileMenu > ul > li > ul {
                            display: none;
                        }
                        #jsMobileMenu.submenuVisible .mobileMenu__back {
                            pointer-events: auto;
                            -webkit-transform: translateX(0%);
                            transform: translateX(0%);
                        }
                        .mobileMenu__back {
                            height: 40px;
                            padding: 4px 20px;
                            color: var(--base-text-color);
                            transition-duration: 300ms;
                            -webkit-transform: translateX(100%);
                            transform: translateX(100%);
                        }
                        .mobileMenu__back:before {
                            content: "";
                            position: absolute;
                            top: 50%;
                            left: 2px;
                            margin-top: -3px;
                            border: solid var(--base-color);
                            border-width: 0 2px 2px 0;
                            display: inline-block;
                            padding: 2px;
                            pointer-events: none;
                            -webkit-transform: translateY(-50%);
                            transform: translateY(-50%);
                            -webkit-transform: rotate(135deg);
                            transform: rotate(135deg);
                        }
                        @media (hover: hover) {
                            .mobileMenu__back:hover {
                                color: var(-base-color2);
                            }
                        }
                        @media (hover: hover) {
                            .mobileMenu__back:hover:before {
                                border-color: var(-base-color2);
                            }
                        }
                    }
                `}
			</style>
        </>
	);
}
export default ToggleBarLayout;