/* eslint-disable react/prop-types */
import {motion} from 'framer-motion'
const Card = ({ image, text, title }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{
				opacity: 1,
				y: 0,
				transition: { delay: 0.2, duration: 0.6 },
			}}
			viewport={{ once: false, amount: 0.5 }}
			// data-aos="zoom-out-up"
			// data-aos-duration="1000"
			className="  border-secondary shadow-md p-4 md:p-6 hover:shadow-lg hover:border-primary hover:bg-[#fafafa] cursor-pointer duration-300 transition-all ease-linear"
		>
			<div className="flex justify-center">
				<img
					src={image}
					alt="app"
					className="h-[220px] w-full object-cover rounded-t-md"
				/>
			</div>
			<div className="border-t border-gray">
				<h3 className="text-center my-3 md:my-6">{title}</h3>
				<p className="text">{text}</p>
			</div>
		</motion.div>
	);
};

export default Card;
