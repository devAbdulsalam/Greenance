/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
const Team = ({ name, role, image, text, link }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{
				opacity: 1,
				y: 0,
				transition: { delay: 0.2, duration: 0.6 },
			}}
			viewport={{ once: false, amount: 0.5 }}
			className="group relative cursor-pointer md:my-10 overflow-hidden bg-white px-6 my-3 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
		>
			<span className="absolute top-10 right-32 z-10 group-hover:z-40 group-hover:text-white h-20 w-20 rounded-full bg-primary transition-all duration-500 group-hover:scale-[10]"></span>
			<div className="w-full h-full  z-50 hidden group-hover:flex justify-center items-center group-hover:absolute top-0 right-0   group-hover:text-white border-gray">
				<div>
					<p className="text text-sm p-5">{text}</p>
					<p className="">
						<a
							href={link || '#'}
							target="blank"
							className=" mt-2 text-2xl font-bold text-center block"
						>
							{name}
						</a>
					</p>
				</div>
			</div>
			<div className="relative z-10 mx-auto max-w-md flex flex-col place-items-center">
				<div className="relative">
					<div className="absolute -inset-2 mx-auto">
						<div className="w-28 h-full max-w-sm mx-auto lg:mx-0 opacity-70 blur-lg bg-gradient-to-r from-primary via-danger to-success"></div>
					</div>
					<img
						src={image}
						alt={name}
						className="relative object-cover shrink-0 h-28 w-28 z-10 rounded-xl"
					/>
				</div>
				<div className="border-t pt-2 mt-2 border-gray text-center w-full">
					<a
						href={link || '#'}
						target="blank"
						className=" mt-2 text-2xl font-bold"
					>
						{name}
					</a>
					<h3 className="head2 my-3 text-primary group-hover:text-white">
						{role}
					</h3>
				</div>
			</div>
		</motion.div>
	);
};
// const Team = ({ name, role, image, text, link }) => {
// 	return (
// 		<div
// 			data-aos="fade-up"
// 			data-aos-offset="300"
// 			data-aos-easing="ease-in-sine"
// 			data-aos-duration="1000"
// 			className="rounded group  shadow-md p-4 md:p-10 hover:shadow-lg hover:bg-[#fafafa] cursor-pointer flex flex-col justify-center relative transition-all duration-30"
// 		>
// 			<span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
// 			<div className="relative my-4 mx-auto">
// 				<div className="absolute -inset-2">
// 					<div className="w-28 h-full max-w-sm mx-auto lg:mx-0 opacity-70 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
// 				</div>
// 				<img
// 					src={image}
// 					alt={name}
// 					className="relative object-cover shrink-0 h-28 w-28 z-10 rounded-xl"
// 				/>
// 			</div>
// 			<div className="border-t border-gray text-center w-full">
// 				<a href={link || '#'} className=" my-3 md:my-6 text-2xl font-bold">
// 					{name}
// 				</a>
// 				<h3 className="head2 text-primary">{role}</h3>
// 				<div className=" my-3 border-gray">
// 					<p className="text">{text}</p>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

export default Team;
