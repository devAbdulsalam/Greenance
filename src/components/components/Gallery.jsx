import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';

// const images = Array.from({ length: 8 }, (_, i) => ({
// 	src: `https://picsum.photos/id/${Math.round(Math.random() * 110)}/800/600`,
// 	alt: `Image ${i + 1}`,
// }));

const ImgGallery = ({ images }) => {
	const onInit = () => {
		console.log('lightGallery has been initialized');
	};

	return (
		<LightGallery
			onInit={onInit}
			speed={500}
			plugins={[
				lgThumbnail,
				lgZoom,
				lgAutoplay,
				lgFullscreen,
				lgRotate,
				lgShare,
			]}
		>
			{images.map((image, index) => {
				return (
					<a href={image.src} key={index} className="group relative g-img">
						<img alt={image.alt} src={image.src} className=" w-full " />
						<div className="absolute bottom-0 left-0  bg-black/30 -z-10 flex justify-center items-center group-hover:z-50 transition-all duration-500 ease-in-out group-hover:w-full group-hover:h-full">
							<p className="text-white text-xs md:text-xl group-hover:p-10 mx-auto text-center group-hover:text-xl md:group-hover:text-3xl z-40 capitalize transition-all duration-500 ease-in-out">
								{image.text}
							</p>
						</div>
					</a>
				);
			})}
		</LightGallery>
	);
};

export default ImgGallery;
