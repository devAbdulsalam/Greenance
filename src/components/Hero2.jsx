/* eslint-disable react/prop-types */
import {motion} from 'framer-motion'
const Hero2 = ({ title, image, text }) => {
	return (
		<section
			style={{ backgroundImage: `url(${image})` }}
			className="md:h-[700px] w-full flex items-center justify-end relative hero2 text-white"
		>
			<div className="p-4 text-left z-10">
				<div className="flex items-end flex-col my-8">
					<motion.h2
			initial={{ opacity: 0, y: 50 }}
			whileInView={{
				opacity: 1,
				y: 0,
				transition: { delay: 0.2, duration: 0.6 },
			}}
			viewport={{ once: false, amount: 0.5 }} className="head1 text-left">{title}</motion.h2>
					<div className="w-[100px] bg-white p-0.5 mt-5"></div>
				</div>
				<motion.p
			initial={{ opacity: 0, y: 50 }}
			whileInView={{
				opacity: 1,
				y: 0,
				transition: { delay: 0.2, duration: 0.6 },
			}}
			viewport={{ once: false, amount: 0.5 }} className="text text-right">{text}</motion.p>
			</div>
			<div className="hero-overlay"></div>
		</section>
	);
};

export default Hero2;
