import styles from './GoogleMap.module.css';
const GoogleMap = () => (
	<>
		<div id="map"
			className={`lazyload relative ${styles.map} bg-cover bg-center`}
			data-bg="../images/map-footer.jpg"
		>
			<iframe src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        title="Google maps"
        loading="lazy"
        className="lazyload size-full outline-none"
        data-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10289.156692823915!2d151.2092953!3d-33.8688201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3b9b7bc123%3A0x123456789abcdef!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sus!4v1696625473519!5m2!1sen!2sus"
        allowFullScreen=""
        aria-hidden="false">
</iframe>
		</div>
	</>
);
export default GoogleMap;
