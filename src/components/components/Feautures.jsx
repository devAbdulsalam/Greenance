import { Link } from 'react-router-dom';
import nusery from '../assets/nusery.webp';
import books from '../assets/books.webp';
import imageComp from '../assets/cop.webp';
import { motion } from 'framer-motion';
export const Feautures = () => {
	return (
		<>
			<section className="p-5 md:p-20 w-full text-3xl bg-gray/20 relative">
				<h2 className="head1 text-center mb-10">Our program</h2>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4  mt-10">
					<div>
						<div>
							<motion.div
								initial={{ opacity: 0, x: -50 }}
								whileInView={{
									opacity: 1,
									x: 0,
									transition: { delay: 0.2, duration: 0.6 },
								}}
								viewport={{ once: false, amount: 0.5 }}
								// data-aos="fade-up-left"
							>
								<h2 className="head1 text-lg font-semibold mt-2">
									Principal’s Welcome Message
								</h2>
								<p className="text my-3">
									Our School is truly an extraordinary place of learning. Our
									talented staff provides each student with a rigorous
									standards, high academic and behavioral teaching and a solid
									foundation.
								</p>
							</motion.div>
						</div>
						<div>
							<h2 className="head2 font-semibold my-2">Unique Care</h2>
							<p className="text mt-3">
								We give your kids a perfect look which helps the customer to
								easily become handy with your online store.
							</p>
						</div>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.2, duration: 0.6 },
							}}
							viewport={{ once: false, amount: 0.5 }}
							// data-aos="zoom-in"
							className="text-center mt-4"
						>
							<Link
								to={'/program'}
								className="py-4 px-5 text-xl font-semibold rounded-md border border-white bg-primary text-white hover:border-primary hover:bg-primary/40 transition duration-500 ease-linear"
							>
								Read more
							</Link>
						</motion.div>
					</div>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { delay: 0.2, duration: 0.6 },
						}}
						viewport={{ once: false, amount: 0.5 }}
						// data-aos="fade-up-left"
						className="rounded-md shadow-md bg-white"
					>
						<img
							src={nusery}
							alt="app"
							className="h-[220px] w-full object-cover"
						/>
						<div className="p-4 md:p-6">
							<h2 className="head2 font-semibold mt-2">Kindergarten/Nursery</h2>
							<p className="text my-3">
								School Time is first and foremost a school where children are
								happy, confident and enthusiastic learners. In the summer term
								of 2015 we had a successful inspection.
							</p>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { delay: 0.2, duration: 0.6 },
						}}
						viewport={{ once: false, amount: 0.5 }}
						// data-aos="fade-up-left"
						className="rounded-md shadow-md bg-white"
					>
						<img
							src={books}
							alt="app"
							className="h-[220px] w-full object-cover"
						/>
						<div className="p-4 md:p-6">
							<h2 className="head2 font-semibold mt-2">Primary school</h2>
							<p className="text my-3">
								There are two classes for each year group with several pupils
								from Reception to Year 6. Attainment has been consistently
								‘outstanding’ for the last five years.
							</p>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { delay: 0.2, duration: 0.6 },
						}}
						viewport={{ once: false, amount: 0.5 }}
						// data-aos="fade-up-left"
						className="rounded-md shadow-md bg-white"
					>
						<img
							src={imageComp}
							alt="app"
							className="h-[220px] w-full object-cover object-center"
						/>
						<div className="p-4 md:p-6">
							<h2 className="head2 font-semibold mt-2">Secondary School</h2>
							<p className="text my-3">
								Whilst we aim to ensure every child reaches their full potential
								academically, they are also taught that they can be successful
								in many different ways. This could be anything.
							</p>
						</div>
					</motion.div>
				</div>
			</section>
		</>
	);
};
