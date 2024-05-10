/* eslint-disable react/prop-types */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiBell } from 'react-icons/fi';
import { BiLogOutCircle } from 'react-icons/bi';
import { IoStatsChartOutline } from 'react-icons/io5';
import { MdOutlineLocalShipping } from 'react-icons/md';

import Logout from './Logout';
import { FaUser } from 'react-icons/fa6';

const Nav = ({ sideBar }) => {
	const [nav, setNav] = useState(null);
	const handleNav = (number) => {
		nav !== number ? setNav(number) : setNav(0);
	};
	return (
		<>
			<nav className="flex flex-col mx-4 my-6 space-y-4 z-10">
				<NavLink
					to={'/dashboard'}
					onClick={() => handleNav(0)}
					className={`${
						nav == 0
							? 'bg-primary hover:bg-primary-light text-white'
							: 'text-primary bg-slate-100 hover:bg-primary hover:text-white'
					} group rounded-md relative text-lg font-medium inline-flex items-center w-full transition-colors ease-in-out duration-300 px-5 py-[9px] my-2`}
				>
					<span
						className={`inline-block text-xl mt-1 ${
							sideBar ? 'mr-[10px]' : ''
						} `}
					>
						<svg
							className="h-6 w-6 -translate-y-[4px]"
							xmlnsXlink="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z"
							/>
							<path
								fill="currentColor"
								d="M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"
							/>
							<path
								fill="currentColor"
								d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z"
							/>
							<path
								fill="currentColor"
								d="M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"
							/>
						</svg>
					</span>
					{sideBar ? (
						<span className="font-bold">Dashboard</span>
					) : (
						<span className="sr-only">Dashboard</span>
					)}
				</NavLink>
				<NavLink
					to={'/dashboard'}
					onClick={() => handleNav(20)}
					className={`${
						nav == 20
							? 'bg-primary hover:bg-primary-light text-white'
							: 'text-primary bg-slate-100 hover:bg-primary hover:text-white'
					} group rounded-md relative text-lg font-medium inline-flex items-center w-full transition-colors ease-in-out duration-300 px-5 py-[9px] my-2`}
				>
					<span
						className={`inline-block text-xl mt-1 ${
							sideBar ? 'mr-[10px]' : ''
						} `}
					>
						<MdOutlineLocalShipping className="h-6 w-6 -translate-y-[4px]" />
					</span>
					{sideBar ? (
						<span className="font-bold">Locate Agents</span>
					) : (
						<span className="sr-only">Locate Agents</span>
					)}
				</NavLink>
				<NavLink
					to={'/users'}
					onClick={() => handleNav(98)}
					className={`${
						nav == 98
							? 'bg-primary hover:bg-primary-light text-white'
							: 'text-primary bg-slate-100 hover:bg-primary hover:text-white'
					} group rounded-md relative  text-lg font-medium inline-flex items-center w-full transition-colors ease-in-out duration-300 px-5 py-[9px] my-2`}
				>
					<span
						className={`inline-block text-xl mt-1 ${
							sideBar ? 'mr-[10px]' : ''
						} `}
					>
						<FaUser className="h-6 w-6 -translate-y-[4px]" />
					</span>
					{sideBar ? (
						<span className="font-bold">Users</span>
					) : (
						<span className="sr-only">Users</span>
					)}
				</NavLink>
				<NavLink
					to={'/chart'}
					onClick={() => handleNav(6)}
					className={`${
						nav == 6
							? 'bg-primary hover:bg-primary-light text-white'
							: 'text-primary bg-slate-100 hover:bg-primary hover:text-white'
					} group rounded-md relative  text-lg font-medium inline-flex items-center w-full transition-colors ease-in-out duration-300 px-5 py-[9px] my-2`}
				>
					<span
						className={`inline-block text-xl mt-1 ${
							sideBar ? 'mr-[10px]' : ''
						} `}
					>
						<IoStatsChartOutline className="h-6 w-6 -translate-y-[4px]" />
					</span>
					{sideBar ? (
						<span className="font-bold">Chart</span>
					) : (
						<span className="sr-only">Chart</span>
					)}
				</NavLink>
				<NavLink
					to={'/dashboard'}
					onClick={() => handleNav(7)}
					className={`${
						nav == 7
							? 'bg-primary hover:bg-primary-light text-white'
							: 'text-primary bg-slate-100 hover:bg-primary hover:text-white'
					} group rounded-md relative  text-lg font-medium inline-flex items-center w-full transition-colors ease-in-out duration-300 px-5 py-[9px] my-2`}
				>
					<span
						className={`inline-block text-xl mt-1 ${
							sideBar ? 'mr-[10px]' : ''
						} `}
					>
						<FiBell className="h-6 w-6 -translate-y-[4px]" />
					</span>
					{sideBar ? (
						<span className="font-bold">Notifications</span>
					) : (
						<span className="sr-only">Notifications</span>
					)}
				</NavLink>
			</nav>
			<div className="inline-flex flex-col items-center justify-center h-fit w-full border-gray-600 border-t-2 px-4">
				<Logout>
					<span
						to={'/'}
						className={`text-red-500 bg-slate-100 hover:bg-red-500 hover:text-white group rounded-md relative text-lg font-medium inline-flex items-center w-full transition-colors ease-in-out duration-300 px-5 py-[9px] my-2`}
					>
						<span className="sr-only">Logout</span>
						<BiLogOutCircle className="h-6 w-6 -translate-y-[4px]" />
						{sideBar ? (
							<span className="font-bold">Logout</span>
						) : (
							<span className="sr-only">Logout</span>
						)}
					</span>
				</Logout>
			</div>
		</>
	);
};

export default Nav;
