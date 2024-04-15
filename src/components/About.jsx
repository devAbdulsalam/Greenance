/* eslint-disable react/prop-types */
import {motion} from 'framer-motion'
const Card = ({ text, title }) => {
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
			className="rounded shadow-md p-4 md:p-10 hover:shadow-lg bg-primary/80 hover:bg-primary cursor-pointer transition duration-500 ease-in-out"
		>
			<div className="text-center">
				<h3 className="head2 text-center my-3 md:my-6">{title}</h3>
				<p className="text">{text}</p>
			</div>
		</motion.div>
	);
};

export default Card;
