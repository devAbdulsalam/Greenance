/* eslint-disable react/prop-types */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaCoins } from 'react-icons/fa';
import { BsChatTextFill } from 'react-icons/bs';
import { FiBell } from 'react-icons/fi';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { BiLogOutCircle } from 'react-icons/bi';
import { TbPhotoScan } from 'react-icons/tb';
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
					to={'/'}
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
					to={'/wallet'}
					onClick={() => handleNav(1)}
					className={`${
						nav == 1
							? 'bg-primary hover:bg-primary-light text-white'
							: 'text-primary bg-slate-100 hover:bg-primary hover:text-white'
					} group rounded-md relative text-lg font-medium inline-flex items-center w-full transition-colors ease-in-out duration-300 px-5 py-[9px] my-2`}
				>
					<span
						className={`inline-block text-xl mt-1 ${
							sideBar ? 'mr-[10px]' : ''
						} `}
					>
						<FaCoins className="h-6 w-6 -translate-y-[4px]" />
					</span>
					{sideBar ? (
						<span className="font-bold">Rewards</span>
					) : (
						<span className="sr-only">Rewards</span>
					)}
				</NavLink>

				<NavLink
					to={'/scan'}
					onClick={() => handleNav(4)}
					className={`${
						nav == 4
							? 'bg-primary hover:bg-primary-light text-white'
							: 'text-primary bg-slate-100 hover:bg-primary hover:text-white'
					} group rounded-md relative text-lg font-medium inline-flex items-center w-full transition-colors ease-in-out duration-300 px-5 py-[9px] my-2`}
				>
					<span
						className={`inline-block text-xl mt-1 ${
							sideBar ? 'mr-[10px]' : ''
						} `}
					>
						<TbPhotoScan className="h-6 w-6 -translate-y-[4px]" />
					</span>
					{sideBar ? (
						<span className="font-bold">Scan</span>
					) : (
						<span className="sr-only">Scan</span>
					)}
				</NavLink>
				<NavLink
					to={'/location'}
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
					to={'/chat'}
					onClick={() => handleNav(5)}
					className={`${
						nav == 5
							? 'bg-primary hover:bg-primary-light text-white'
							: 'text-primary bg-slate-100 hover:bg-primary hover:text-white'
					} group rounded-md relative text-lg font-medium inline-flex items-center w-full transition-colors ease-in-out duration-300 px-5 py-[9px] my-2`}
				>
					<span
						className={`inline-block text-xl mt-1 ${
							sideBar ? 'mr-[10px]' : ''
						} `}
					>
						<BsChatTextFill className="h-6 w-6 -translate-y-[4px]" />
					</span>
					{sideBar ? (
						<span className="font-bold">Messages</span>
					) : (
						<span className="sr-only">Messages</span>
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
					to={'/videos'}
					onClick={() => handleNav(3)}
					className={`${
						nav == 3
							? 'bg-primary hover:bg-primary-light text-white'
							: 'text-primary bg-slate-100 hover:bg-primary hover:text-white'
					} group rounded-md relative text-lg font-medium inline-flex items-center w-full transition-colors ease-in-out duration-300 px-5 py-[9px] my-2`}
				>
					<span
						className={`inline-block text-xl mt-1 ${
							sideBar ? 'mr-[10px]' : ''
						} `}
					>
						<MdOutlineOndemandVideo className="h-6 w-6 -translate-y-[4px]" />
					</span>
					{sideBar ? (
						<span className="font-bold">How to</span>
					) : (
						<span className="sr-only">Video</span>
					)}
				</NavLink>
				<NavLink
					to={'/notifications'}
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
				<NavLink
					to={'/settings'}
					onClick={() => handleNav(12)}
					className={`${
						nav == 12
							? 'bg-primary hover:bg-primary-light text-white'
							: 'text-primary bg-slate-100 hover:bg-primary hover:text-white'
					} group rounded-md relative text-lg font-medium inline-flex items-center w-full transition-colors ease-in-out duration-300 px-5 py-[9px] my-2`}
				>
					<span className="sr-only">Settings</span>
					<svg
						aria-hidden="true"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="h-6 w-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
						/>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
						/>
					</svg>
					{sideBar ? (
						<span className="font-bold">Settings</span>
					) : (
						<span className="sr-only">Settings</span>
					)}
				</NavLink>
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
