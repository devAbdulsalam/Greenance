/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import ToggleButton from './ToggleButton';
import Nav from './Nav';
// import AuthContext from '../context/authContext';
const Sidebar = ({ sideBar, setSideBar, isSideBarFull, setIsSideBarfull }) => {
	const [isMobile, setIsMobile] = useState(false);

	const handleResize = () => {
		const screenWidth = window.innerWidth;
		setIsMobile(screenWidth <= 768); // Set a threshold for mobile screen size (e.g., 768 pixels)
		// setIsMobile(screenWidth <= 1024); // Set a threshold for tablet screen size (e.g., 1024 pixels)
	};
	useEffect(() => {
		// Initial check on component mount
		handleResize();
		// Add event listener to check on window resize
		window.addEventListener('resize', handleResize);
		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	const handleSideBar = () => {
		if (!isMobile) {
			return;
		}
		setSideBar(!sideBar);
	};
	const handleFullSideBar = () => {
		setIsSideBarfull(!isSideBarFull);
	};
	return (
		// <aside
		// 	className={`${
		// 		sideBar ? '' : 'hidden'
		// 	}  bg-green-200 duration-300 ${
		// 		open ? 'left-0' : 'left-[-100%]'
		// 	}`}
		// >
		<aside
			className={`${
				isSideBarFull
					? 'w-[300px] lg:w-[250px] xl:w-[300px]'
					: 'sm:flex sm:flex-col'
			} border-r border-gray overflow-y-none sidebar-scrollbar fixed left-0 top-0 h-full bg-green-200 z-50 transition-transform duration-300 ${
				sideBar
					? 'translate-x-[0px]'
					: ' -translate-x-[300px] lg:translate-x-[0]'
			}`}
		>
			<Link to="/" className="flex items-center justify-start">
				<div className="inline-flex items-center justify-center h-20 w-20">
					<img src={Logo} alt="shara logo" className="h-12 w-12" />
				</div>
				{isSideBarFull ? (
					<h2 className="text-primary font-semibold text-lg">Shara Nigeria</h2>
				) : (
					''
				)}
			</Link>
			<div
				onClick={handleSideBar}
				className="flex-grow flex flex-col justify-between text-gray-500 relative "
			>
				<ToggleButton
					handleSideBar={handleFullSideBar}
					sideBar={isSideBarFull}
				/>
				<Nav sideBar={isSideBarFull} />
			</div>
		</aside>
	);
};

export default Sidebar;
