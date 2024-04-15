// import { img src={} alt='clients' class="h-[120px]" } from 'react-icons/fa';
import { useEffect, useState } from 'react';
// Import Swiper styles
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/element/css/autoplay';
register();

import { clients } from '../data.js';
const Client = () => {
	const [isMobile, setIsMobile] = useState(false);

	const handleResize = () => {
		const screenWidth = window.innerWidth;
		setIsMobile(screenWidth <= 768); // Set a threshold for mobile screen size (e.g., 768 pixels)
		// setIsMobile(screenWidth <= 1024); // Set a threshold for tablet screen size (e.g., 1024 pixels)
	};

	useEffect(() => {
		// Initial check on component mount
		handleResize();
		// Add event listener to check on window resize
		window.addEventListener('resize', handleResize);
		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<>
			<section className="p-5 md:p-20 w-full text-3xl relative">
				<div>
					<h2 className="head1 text-center my-10">Our Awesome Parents</h2>
					<h3 className="head2 text-center my-10">
						Here are what some parents say's about us
					</h3>
				</div>
				<swiper-container
					pagination="true"
					pagination-clickable="true"
					space-between="30"
					navigation="true"
					autoplay-delay="2500"
					autoplay-disable-on-interaction="false"
					slides-per-view={isMobile ? '1' : '3'}
					speed="500"
					loop="true"
					css-mode="true"
					mousewheel-force-to-axis="true"
				>
					{clients.map((client, idx) => {
						return (
							<swiper-slide key={idx}>
								<div className="rounded shadow-md p-10 hover:shadow-lg cursor-pointer my-10">
									<div className="flex justify-center">
										<img
											src={client.image}
											alt="clients"
											className="h-[120px] rounded-full shadow-sm"
										/>
									</div>
									<div className="">
										<h2 className="head2 text-center capitalize">
											{client.name}
										</h2>
										<p className="text mt-6">{client.text}</p>
									</div>
								</div>
							</swiper-slide>
						);
					})}
				</swiper-container>
			</section>
		</>
	);
};

export default Client;
