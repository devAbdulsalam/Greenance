import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/element/css/autoplay';
import { home } from '../data';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Hero = () => {
	register();
	return (
		<div className="relative md:h-[700px]">
			<swiper-container
				pagination="true"
				pagination-clickable="true"
				autoplay-delay="2500"
				autoplay-disable-on-interaction="false"
				slides-per-view="1"
				speed="500"
				loop="true"
				css-mode="true"
				mousewheel-force-to-axis="true"
			>
				{home.map((item, index) => {
					return (
						<swiper-slide key={index}>
							<div className="py-20 md:p-2 md:h-[700px] flex place-items-center bg-black/30 relative">
								<img
									src={item.image}
									className="top-0 left-0 -z-10 w-full absolute h-full"
									alt="Slide"
								/>
								<div className="w-full mx-auto text-center text-white text-xl">
									<div className="mt-10 md:pb-12">
										<motion.h2
											initial={{ opacity: 0, y: 50 }}
											whileInView={{
												opacity: 1,
												y: 0,
												transition: { delay: 0.2, duration: 0.6 },
											}}
											viewport={{ once: false, amount: 0.5 }}
											className="text-3xl md:text-5xl font-semibold md:font-bold uppercase mb-6"
										>
											{item.title}
										</motion.h2>
										<p className="md:my-6 p-3 text-lg md:text-2xl">{item.text}</p>
									</div>
									<div className="mt-4">
										<Link
											to="/contact"
											className="p-2 px-5 text-xl font-semibold rounded-md border border-white hover:bg-primary hover:text-white hover:border-primary transition duration-500 ease-linear"
										>
											{item.link}
										</Link>
									</div>
								</div>
							</div>
						</swiper-slide>
					);
				})}
			
			</swiper-container>
		</div>
	);
};

export default Hero;
