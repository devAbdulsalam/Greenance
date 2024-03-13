import { NavLink } from 'react-router-dom';
import { Map } from './Map';
const Footer = () => {
	return (
		<>
			<footer className="">
				<div className="grid md:gap-10 row-gap-6 sm:grid-cols-2">
					<div className="px-3 py-6 md:py-10 lg:px-9 grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
						<div className="pt-4 sm:col-span-3">
							<a href="#" className="inline-flex items-center">
								<img
									src="https://mcqmate.com/public/images/logos/60x60.png"
									alt="logo"
									className="h-8 w-8"
								/>
								<span className="ml-2 text-xl font-bold tracking-wide text-primary">
									Hameedah
								</span>
							</a>
							<div className="mt-6 lg:max-w-xl">
								<p className="text-sm md:text-lg text-gray-800">
									We offers you all kind of tranning. Our team of hard working
									and creative teachers & designers dedicated to give their 100%
									to satisfy our kids intellectual pursuit.
								</p>
							</div>
							<p className="text-xl font-bold tracking-wide text-gray-900 mt-4">
								Contacts
							</p>
							<div className="flex">
								<p className="mr-1 text-gray-800">Phone:</p>
								<a href="#" title="send email">
									+234 9035095173
								</a>
							</div>
							<div className="flex">
								<p className="mr-1 text-gray-800">Email:</p>
								<a href="#" title="send email">
									admin@Hameedah.school.com
								</a>
							</div>
						</div>

						<div className="hidden md:flex pt-4 flex-col gap-2 text-sm text-primary">
							<p className="text-xl font-bold tracking-wide text-gray-900">
								Quick Links
							</p>
							<div className="flex flex-col gap-2 ">
								<NavLink
									to={'/'}
									className="text-base font-semibold tracking-wide text-primary/60 hover:text-primary "
								>
									Home
								</NavLink>
								<NavLink
									to={'/about'}
									className="text-base font-semibold tracking-wide text-primary/60 hover:text-primary"
								>
									About
								</NavLink>

								<NavLink
									to={'/programs'}
									className="text-base font-semibold tracking-wide text-primary/60 hover:text-primary "
								>
									Programs
								</NavLink>
								<NavLink
									to={'/gallery'}
									className="text-base font-semibold tracking-wide text-primary/60 hover:text-primary"
								>
									Gallery
								</NavLink>
								<NavLink
									to={'/admission'}
									className="text-base font-semibold tracking-wide text-primary/60 hover:text-primary"
								>
									Fee Structure
								</NavLink>
								<NavLink
									to={'/gallery'}
									className="text-base font-semibold tracking-wide text-primary/60 hover:text-primary"
								>
									Achievements
								</NavLink>
								<NavLink
									to={'/contact'}
									className="text-base font-semibold tracking-wide text-primary/60 hover:text-primary"
								>
									Contact
								</NavLink>
							</div>
						</div>
					</div>
					<div className="">
						<Map />
					</div>
				</div>

				<div className="px-3 pt-4 lg:px-9 flex flex-col-reverse justify-between border-t border-primary lg:flex-row">
					<p className="text-sm md:text-lg text-gray-600">
						© Copyright 2024 Hameedah. All rights reserved.
					</p>
					<ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
						<li>
							<a
								href="#"
								className="text-sm md:text-lg text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
							>
								Privacy &amp; Cookies Policy
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-sm md:text-lg text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
							>
								Disclaimer
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</>
	);
};

export default Footer;
