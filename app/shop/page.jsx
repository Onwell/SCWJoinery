'use client';
import React, {useState, useRef } from 'react'
//Import Database
import {products} from "./data/product_data";
//Import Css
import styles from "../_components/Shop/ShopLayout.module.css"
//Import Sections
import PageTitle from "../_components/Common/PageTitle"
import Product from "../_components/Shop/Product"
import ThumbprodFilter from "../_components/Shop/ThumbprodFilter"
import ThumbprodAside from "../_components/Shop/ThumbprodAside"
import Pagination from "../_components/Common/Pagination"
import CartSidebar from "../_components/Shop/CartSidebar"
//Import Icon
import { GrClose } from 'react-icons/gr'
//Import js
import {disableScroll, initCustomScroll} from '../../public/js/utilitie'
//Page Layout
export default function Shop() {
	const [filteredProducts, setFilteredProducts] = useState(products);
	//--- Define Sidebar Data
	const categoryItems = [...new Set(products.map((val) => val.category))];
	const tagItems = [...new Set(products.map((val) => val.tag))];
	const recentItems = products.slice(0, 2);
	//--- Data Filtering Values
	const handleCategories = (category) => {
        if(category !== null && category !== "all"){
            let filtered = products.filter(product => {
                return product.category == category;
            });
            setFilteredProducts(filtered);
        } else if(category == "all"){
            setFilteredProducts(products);
        };
    };
	const handleTag = (tag) => {
        if(tag !== null && tag !== "all"){
            let filtered = products.filter(product => {
                return product.tag == tag;
            });
            setFilteredProducts(filtered);
        } else if(tag == "all"){
            setFilteredProducts(products);
        };
    };
	const handlePrice = (price) => {
		let filtered = products.filter(product => {
			return product.price >= price[0] && product.price <= price[1];
		});
		setFilteredProducts(filtered);
	};
	const onChangeSort = (value) => {
		if(value === 'lowToHigh'){
			setFilteredProducts([...products.sort((a,b) => {
				return a.price - b.price;
			})]);
		};
		if(value === 'highToLow'){
			setFilteredProducts([...products.sort((a,b) => {
				return b.price - a.price;
			})]);
		};
		if(value === 'byPopularity'){
			setFilteredProducts([...products.sort((a,b) => {
				return b.rating - a.rating;
			})]);
		};
		if(value === 'all'){
			setFilteredProducts([...products.sort((a,b) => {
				return a.id - b.id;
			})]);
		};
	};
	//--- Paginations
	const [currentPage, setCurrentPage] = useState(1);
	const [itemPerPage] = useState(9);
	const totalItem = filteredProducts.length;
	function check(){
		if(currentPage * itemPerPage > totalItem){
			return totalItem
		} else{
			return currentPage * itemPerPage
		}
	};
    const lastCountryIndex = check();
	const firstCountryIndex = lastCountryIndex - itemPerPage;
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const clickPrevNext = (value) => {
        value !== "add" ? setCurrentPage( prev => prev + 1) : setCurrentPage( prev => prev - 1)
    };
	const [asideOpen, setAsideOpen] = useState(false);
	const ref = useRef();
	React.useEffect(() => {
		const resizeListener = () => {
			setAsideOpen(false);
		};
		if(asideOpen){
			initCustomScroll(ref.current);
		}
		disableScroll(asideOpen);

		window.addEventListener('resize', resizeListener);
		return () => {
			window.removeEventListener('resize', resizeListener);
		}
	}, [asideOpen]);
	return (
		<>
			<PageTitle dataTitle="Shop" />
			<main id="tt-pageContent" className="overflow-hidden">
				<div className="container container__fluid-xl">
					<div className="section__inner">
						<div className={`flex lg:gap-[15px]`}>
							{/* Col left */}
							<div ref={ref} className={`
								${styles.holder__colleft} holder__colleft z-[2]
								${asideOpen && styles.holder__colleftOpen}
							`}>
								<div
									className={`
										${styles.toggle__asideClose}
										obj__inner-center lg:hidden absolute cursor-pointer
									`}
									onClick={() => {
										setAsideOpen(false);
									}}
								>
									<GrClose />
								</div>
								<ThumbprodAside
									productCategories={categoryItems}
									productTags={tagItems}
									productRecent={recentItems}
									onClickCategory={(category) => handleCategories(category)}
									onClickTag={(tag) => handleTag(tag)}
									onClickPrice={(price) => handlePrice(price)}
								/>
							</div>
							<div className={`
									${styles.toggleHolder__dropdownBg}
									${asideOpen ? styles.toggleHolder__dropdownBg_open : ''}
								`}
								onClick={() => {
									setAsideOpen(false);
								}}
							></div>
							{/* Col right */}
							<div className={`${styles.holder__colright}`}>
								<ThumbprodFilter
									totalItem={totalItem}
									pageIndex={lastCountryIndex - itemPerPage}
									itemPerPage={lastCountryIndex}
									onClickAside={(value) => setAsideOpen(value)}
									onChangeSort={(value) => onChangeSort(value)}
								/>
								<div className={`${styles.thumbprod__listing}  grid md:grid-cols-3 md-max:grid-cols-2 sm-max:gap-[15px] sm:gap-[30px]`}>
									{filteredProducts.slice(firstCountryIndex, lastCountryIndex).map((product) =>
										<Product  key={product.id} data={product} />
									)}
								</div>
								<Pagination
                                    itemPerPage={itemPerPage}
                                    value={currentPage}
                                    totalItem={filteredProducts.length}
                                    paginate={paginate}
                                    clickPrevNext={(value) => clickPrevNext(value)}
                                />
							</div>
						</div>
					</div>
				</div>
			</main>
			<CartSidebar />
		</>
	)
}

