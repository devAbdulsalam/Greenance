import { Link } from 'react-router-dom';
import Head from './Head';
import image from '../assets/logo.png';
import { FaBarsStaggered } from 'react-icons/fa6';

const Header = ({ setSidebarOpen, sidebarOpen }) => {
	return (
		<header
			className={`sticky top-0 md:flex justify-between items-center shadow-md transparent text-white w-full z-[999]`}
		>
			<div className="w-full">
				<div className="hidden md:inline-block w-full">
					<Head />
				</div>
				<div className="w-full flex justify-between items-center bg-white  mx-auto">
					<img
						src={image}
						alt="Hameeda log"
						className="md:hidden w-40 ml-2 py-2"
					/>
					<nav className="hidden md:inline w-full md:w-11/12 text-black mx-auto">
						<ul
							className={`flex justify-center px-5 py-3 space-x-6 items-center font-semibold text-xl text-gray-700`}
						>
							<li className="hover:text-primary transition ease-in-out duration-300 border-r-2 border-l-2 border-dotted px-2 border-r-primary">
								<Link to="/">Home</Link>
							</li>
							<li className="hover:text-primary transition ease-in-out duration-300 border-r-2 border-l-2 border-dotted px-2 border-r-primary">
								<Link to="/about">About us</Link>
							</li>
							<li className="hover:text-primary transition ease-in-out duration-300 border-r-2 border-l-2 border-dotted px-2 border-r-primary">
								<Link to="/programs">Programs</Link>
							</li>
							<li className="hover:text-primary transition ease-in-out duration-300 border-r-2 border-l-2 border-dotted px-2 border-r-primary">
								<Link to="/gallery">Gallery</Link>
							</li>
							<li className="hover:text-primary transition ease-in-out duration-300 border-r-2 border-l-2 border-dotted px-2 border-r-primary">
								<Link to="/admission">Admission</Link>
							</li>
							<li className="hover:text-primary transition ease-in-out duration-300 border-r-2 border-l-2 border-dotted px-2 border-r-primary">
								<Link to="/news">News</Link>
							</li>
							<li className="hover:text-primary transition ease-in-out duration-300 border-r-2 border-l-2 border-dotted px-2 border-r-primary">
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</nav>
					<button
						className="md:hidden text-primary text-xl mr-2 py-2"
						onClick={() => setSidebarOpen(!sidebarOpen)}
					>
						<FaBarsStaggered />
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
