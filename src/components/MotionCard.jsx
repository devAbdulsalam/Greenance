import { motion } from 'framer-motion';
const MotionCard = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{
				opacity: 1,
				y: 0,
				transition: { delay: 0.2, duration: 0.5 },
			}}
			viewport={{ once: false, amount: 0.8 }}
			className="flex justify-center my-10"
		>
			<div className="py-10 w-fit mx-auto bg-gray-500 ">
				<h2 className="p-20 text-center mx-auto">Framer motion</h2>
			</div>
		</motion.div>
	);
};

export default MotionCard;
