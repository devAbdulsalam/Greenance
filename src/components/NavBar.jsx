import { useState } from 'react';
const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<nav className="flex flex-wrap items-center justify-between p-3 bg-[#e8e8e5] fixed top-0 w-full z-50">
			<div className="text-xl text-green-500 font-extrabold md:pl-3">
				Greenance .
			</div>
			<div className="flex md:hidden">
				<button id="hamburger" onClick={toggleMenu}>
					<img
						className={menuOpen ? 'hidden' : 'block'}
						src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
						width="40"
						height="40"
						alt="menu"
						color="green"
					/>
					<img
						className={menuOpen ? 'block' : 'hidden'}
						src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
						width="40"
						height="40"
						alt="close"
					/>
				</button>
			</div>
			<div
				onClick={toggleMenu}
				className={`w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 ${
					menuOpen ? 'block' : 'hidden'
				} md:block`}
			>
				<a
					href="#home"
					className="block md:inline-block hover:text-green-500 font-semibold px-3 py-3 md:border-none"
				>
					Home
				</a>
				<a
					href="#services"
					className="block md:inline-block hover:text-green-500 font-semibold px-3 py-3 md:border-none"
				>
					Services
				</a>
				<a
					href="#aboutus"
					className="block md:inline-block hover:text-green-500 font-semibold px-3 py-3 md:border-none"
				>
					About us
				</a>
				<a
					href="#gallery"
					className="block md:inline-block hover:text-green-500 font-semibold px-3 py-3 md:border-none"
				>
					Gallery
				</a>
				<a
					href="#contactUs"
					className="block md:inline-block hover:text-green-500 font-semibold px-3 py-3 md:border-none"
				>
					Contact
				</a>
			</div>
			<div
				className={`w-full text-end ${
					menuOpen ? 'block' : 'hidden'
				} md:flex md:w-auto px-2 py-2 md:rounded`}
			>
				<div className="flex justify-end">
					<button className="flex items-center px-6 py-2.5 mr-3 rounded-full bg-white border-green-500 hover:bg-green-500 hover:text-white font-medium">
						Login
					</button>
					<button className="flex items-center px-6 py-2.5 rounded-full bg-green-500 hover:bg-green-400 text-white font-medium">
						Signup
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
