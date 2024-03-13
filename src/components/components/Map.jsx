export const Map = () => {
	return (
		<iframe
			id="map-canvas"
			className="map_part"
			width="100%"
			height="500px"
			frameBorder="0"
			scrolling="no"
			marginHeight="0"
			marginWidth="0"
			src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=SABARU B, DAKATA KAWAJI&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
		>
			Powered by <a href="https://embedgooglemaps.com">embed google maps</a> and{' '}
			<a href="https://beviljaralla.se/">sms lån som beviljar alla</a>
		</iframe>
	);
};
