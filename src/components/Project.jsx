import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
const Card = ({ image, text, title, type, link }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{
				opacity: 1,
				y: 0,
				transition: { delay: 0.2, duration: 0.6 },
			}}
			viewport={{ once: false, amount: 0.5 }}
			className="flex px-3 py-3"
		>
			<div className="rounded overflow-hidden shadow-lg">
				<img className="w-full" src={image} alt={title} />
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2">{title}</div>
					<p className="text-gray-700 text-base">{text}</p>
				</div>
				<div className="px-6 py-4">
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
						{type}
					</span>
					<Link
						href={`/programs/${title}`}
						className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
					>
						See more
					</Link>
				</div>
			</div>
		</motion.div>
	);
};

export default Card;
