/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import AuthContext from '../context/authContext';
import { Link, useNavigate } from 'react-router-dom';
import image6 from './../assets/image1.jpg';
import { moreInfo, sdgGoals } from './../Data.js';
import Footer from './../components/Footer';
import Teams from './../components/Teams';
import { motion } from 'framer-motion';

const Home = () => {
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();
	useEffect(() => {
		if (user) {
			navigate('/dashboard');
		}
	}, [user, navigate]);

	return (
		<>
			<main className="">
				<div className="home h-[500px] md:h-[700px]">
					<nav className="flex justify-center items-center w-full fixed top-0 left-0 z-10 bg-primary">
						<a
							href="#"
							className="p-2 md:p-4 text-sm md:text-lg text-white hover:text-primary-light font-semibold"
						>
							Home
						</a>
						<a
							href="#about"
							className="p-2 md:p-4 text-sm md:text-lg text-white hover:text-primary-light font-semibold"
						>
							About Us
						</a>
						<a
							href="#product"
							className="p-2 md:p-4 text-sm md:text-lg text-white hover:text-primary-light font-semibold"
						>
							Products
						</a>
						<a
							href="#team"
							className="p-2 md:p-4 text-sm md:text-lg text-white hover:text-primary-light font-semibold"
						>
							Team
						</a>
						<Link
							to="/loans"
							className="p-2 md:p-4 text-sm md:text-lg text-white hover:text-primary-light font-semibold"
						>
							Loans
						</Link>
					</nav>

					<div className="flex justify-center h-full items-center">
						<div className="head  mx-auto  text-center">
							<h1 className="text-4xl md:text-6xl text-white head-text mt-12 font-semibold">
								Greenance provide farmers with <br className="md:hidden" />
								Information to investment funds
							</h1>
							<p className="head-text mt-6 text-xl md:text-2xl text-white">
								Greenance prevent farm loss by unlocking investment funds.
							</p>
							<div className="mt-10">
								<a
									href="#about"
									className="info-btn text-lg text-white font-semibold mt-10 p-3 px-5 rounded-md bg-primary hover:bg-primary-dark "
								>
									More Info
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="feature-info bg-slate-50 w-full flex items-center justify-center">
					<div className="info bg-primary flex -mt-14 rounded-md ">
						<div className="text-white text-center text-xl  md:text-[50px] md:pr-5 border-r-2 border-r-white m-[10px] md:m-[20px]">
							<i className="fa fa-leaf"></i>
							<p className="text-lg md:text-[25px] text-white">Information</p>
						</div>
						<div className="text-white text-center text-xl md:text-[50px] md:pr-5 border-r-2 border-r-white m-[10px] md:m-[20px]">
							<i className="fa fa-eye"></i>
							<p className="text-lg md:text-[25px] text-white">Insight</p>
						</div>
						<div className="text-white text-center text-xl md:text-[50px] md:pr-5 border-r-2 border-r-white m-[10px] md:m-[20px]">
							<i className="fa fa-road"></i>
							<p className="text-lg md:text-[25px] text-white">Investment</p>
						</div>
						<div className="text-white text-center text-xl md:text-[50px] md:pr-5 m-[10px] md:m-[20px]">
							<i className="fa fa-check"></i>
							<p className="text-lg md:text-[25px] text-white">funds</p>
						</div>
					</div>
				</div>
			</main>
			<section
				id="about"
				className="information bg-slate-50 pt-10 pb-16 flex justify-center items-center"
			>
				<div className="overlay-info w-full md:w-[1000px] relative mt-10">
					<div className="overlay-img">
						<img
							src={image6}
							alt="imge"
							className="w-full h-[400px] rounded-md"
						/>
					</div>
					<div className="overlay-text">
						<div className="show text-white">
							<p className="text-lg md:big text-white md:text-2xl">
								Not sure what fits your farms needs?
								<br /> Join us and get the best businees for your self
							</p>
							<p className="text-sm md:small text-white md:text-2xl">
								We provide climate intelligence to farmers and reliable
								understanding and insight from farmers to grow farm, provide
								farm information to agricultural investment funds
							</p>
							<div className="mt-10 gap-5 flex">
								<Link
									to="/register"
									className="rounded-md px-4 py-3 bg-primary hover:bg-primary-light text-white text-lg font-semibold"
								>
									Register
								</Link>
								<Link
									to="/login"
									className="rounded-md px-8 py-3 bg-primary-dark hover:bg-primary-light text-white text-lg font-semibold"
								>
									Login
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="product" className="py-20 px-2 w-full">
				<div id="more-info" className="md:w-11/12 mx-auto">
					<div className="text-center my-10">
						<motion.h1
							initial={{ opacity: 0, y: 50 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.2, duration: 0.5 },
							}}
							viewport={{ once: false, amount: 0.5 }}
							className="text-3xl font-semibold"
						>
							{' '}
							More Information
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 50 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.4, duration: 0.5 },
							}}
							viewport={{ once: false, amount: 0.5 }}
							className="mt-4 text-lg "
						>
							Prevent farm loss by unlocckning access to intervention funds for
							farmer
						</motion.p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
						{moreInfo.map((item, idx) => (
							<motion.div
								initial={{ opacity: 0, y: 50 }}
								whileInView={{
									opacity: 1,
									y: 0,
									transition: { delay: 0.2, duration: 0.5 },
								}}
								viewport={{ once: false, amount: 0.5 }}
								key={idx}
								className="text-center rounded-md shadow-md p-2 pb-4 hover:bg-gray-100 info-box"
							>
								<img
									src={item.image}
									alt={item.title}
									className="w-full object-center md:h-[70%]"
								/>
								<h3 className="text-lg font-semibold my-3">{item.title}</h3>
								<p className="pb-4">{item.text}</p>
							</motion.div>
						))}
					</div>
					<div className="flex justify-center mt-10">
						<Link
							to="/loans"
							className="bg-primary-light hover:bg-primary text-white px-4 py-3 rounded-lg"
						>
							See available loans
						</Link>
					</div>
				</div>
			</section>
			<section className="information bg-slate-50 pt-10 pb-16 flex justify-center items-center">
				<div id="" className="md:w-10/12 mx-auto">
					<div className="text-center mt-5 mb-10">
						<motion.h1
							initial={{ opacity: 0, y: 50 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.2, duration: 0.5 },
							}}
							viewport={{ once: false, amount: 0.5 }}
							className="text-3xl font-semibold"
						>
							{' '}
							Contribution To SDGs 2030
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 50 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.4, duration: 0.5 },
							}}
							viewport={{ once: false, amount: 0.5 }}
							className="mt-4 text-lg "
						>
							We are committed, and offer our contributions to the Sustainable
							Development Goals.
						</motion.p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-10">
						{sdgGoals.map((item, idx) => (
							<div key={idx} className="text-center">
								<div>
									<img
										src={item.image}
										alt={item.image}
										className="h-[120px] mx-auto rounded-sm"
									/>
								</div>
								<h3 className="text-lg md:text-xl font-semibold my-2">
									{item.title}
								</h3>
							</div>
						))}
					</div>
				</div>
			</section>
			<Teams />
			<Footer />
		</>
	);
};

export default Home;
