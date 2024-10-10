import Link from 'next/link';
import styles from './NavPostsBtn.module.css';
//Import Database
import {posts} from "../../../app/blog/data/blog_data";
const NavPostsBtn = ({postId}) => {
	const postIdPrev = Number(postId) - 1;
	const postIdNext = Number(postId) + 1;
	const postDataPrev = posts.find(post => post.id == postIdPrev) || false;
	const postDataNext = posts.find(post => post.id == postIdNext) || false;
	return (
		<div className={`${styles.navposts} flex justify-between gap-[30px]`}>
			{postDataPrev.title ? (
				<Link
					href='/blog/{id}' as={`/blog/${postIdPrev}`}
					className={`${styles.navposts__btn} navposts__btnPrev`}
				>
					<div className={`${styles.navposts__subtitle} inline-block relative`}>
						Previous Post
					</div>
					<div className={`${styles.navposts__title} ttsubtitle_sm`}>
						{postDataPrev.title}
					</div>
				</Link>
			):null}
			{postDataNext.title ? (
				<Link
					href='/blog/{id}' as={`/blog/${postIdNext}`}
					className={`${styles.navposts__btn} ${styles.navposts__btnNext} text-right`}
				>
					<div className={`${styles.navposts__subtitle} navposts__btnNext inline-block relative`}>
						Next Post
					</div>
					<div className={`${styles.navposts__title} ttsubtitle_sm`}>
						{postDataNext.title}
					</div>
				</Link>
			):null}
		</div>
	)
};
export default NavPostsBtn;