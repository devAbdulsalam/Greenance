import { LiaTimesSolid } from 'react-icons/lia';
import Head from './Head';
import { useLocation, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
/* eslint-disable react/prop-types */
const MobileNav = ({ sidebarOpen, setSidebarOpen }) => {
	const location = useLocation();
	const { pathname } = location;
	useEffect(() => {
		window.scrollTo({
			top: '0',
			behavior: 'smooth',
		});
	}, [location]);
	return (
		<aside
			className={`absolute left-0 top-0 z-50 flex h-screen w-72.5 flex-col overflow-y-hidden bg-white shadow-r-md duration-300 ease-linear lg:static lg:translate-x-0 ${
				sidebarOpen ? 'translate-x-0' : '-translate-x-full'
			}`}
		>
			<div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
				<Head />
				<button
					className="text-xl font-bold text-primary p-2 hover:text-primary/20 duration-200 ease-linear"
					onClick={() => setSidebarOpen(false)}
				>
					<LiaTimesSolid />
				</button>
			</div>
			<div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
				{/* <!-- Sidebar Menu --> */}
				<nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
					<ul
						className="mb-6 flex flex-col gap-1.5"
						onClick={() => setSidebarOpen(false)}
					>
						<li>
							<NavLink
								to="/"
								className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black duration-300 ease-in-out hover:bg-primary ${
									pathname === '/' && 'bg-primary text-white'
								}`}
							>
								Home
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/about"
								className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black duration-300 ease-in-out hover:bg-primary ${
									pathname === '/about' && 'bg-primary text-white'
								}`}
							>
								About us
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/programs"
								className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black duration-300 ease-in-out hover:bg-primary ${
									pathname === '/programs' && 'bg-primary text-white'
								}`}
							>
								Programs
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/gallery"
								className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black duration-300 ease-in-out hover:bg-primary ${
									pathname === '/gallery' && 'bg-primary text-white'
								}`}
							>
								Gallery
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/admission"
								className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black duration-300 ease-in-out hover:bg-primary ${
									pathname === '/admission' && 'bg-primary text-white'
								}`}
							>
								Admission
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/news"
								className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black duration-300 ease-in-out hover:bg-primary ${
									pathname === '/news' && 'bg-primary text-white'
								}`}
							>
								News
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/contact"
								className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black duration-300 ease-in-out hover:bg-primary ${
									pathname === '/contact' && 'bg-primary text-white'
								}`}
							>
								Contact
							</NavLink>
						</li>
						<li className="mt-4 flex justify-between">
							<NavLink
								to={'/contact'}
								className="cursor-pointer whitespace-nowrap rounded-md border border-primary/50 bg-primary/50 p-3 text-lg font-semibold text-white transition ease-in hover:bg-opacity-90 duration-500 "
							>
								Request Call Back
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</aside>
	);
};

export default MobileNav;
