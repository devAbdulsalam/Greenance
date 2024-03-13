import { Link } from 'react-router-dom';
import { CiClock2 } from 'react-icons/ci';
import { MdWifiCalling3 } from 'react-icons/md';
import image2 from '../assets/logo2.png';

const Head = () => {
	return (
		<>
			<div className="w-full">
				<div className="hidden md:flex justify-between w-full bg-gray p-3 px-4 text-lg">
					<h2 className="uppercase">
						NO. 486, HASSAN KADEMI STREET DAKATA KAWAJI, Nassarawa, Kano State.
					</h2>
					<h2>
						<span className="text-semibold">Motto:</span> Knowledge is light
					</h2>
				</div>
				<div className="w-full bg-primary text-white py-4 md:py-6 px-4">
					<div className="md:flex justify-between md:px-4">
						<div className="">
							<Link
								to={'/'}
								className="text-2xl my-0 py-0 font-semibold text-white"
							>
								<img
									src={image2}
									alt="Hameedah log"
									className="size-26 md:size-30"
								/>
							</Link>
							<span className="-mt-2 pl-2 text-sm md:text-lg font-semibold block ">
								International school
							</span>
						</div>
						<div className="flex flex-col md:hidden justify-between w-full p-3 px-4 text-sm">
							<h2 className="capitalize">
								No. 486, Hassan kademi street dakata kawaji, Nassarawa, Kano
								State.
							</h2>
							<h2 className="uppercase mt-2">
								<span className="text-semibold">Motto:</span> Knowledge is light
							</h2>
						</div>
						<div className="flex justify-between gap-6 items-center">
							<div className="xl:flex justify-between gap-3 items-center">
								<div>
									<div className="flex items-center">
										<p className="text-4xl pr-2">
											<MdWifiCalling3 />
										</p>
										<div>
											<div className="md:flex">
												<p className="mr-1 text-gray-800">Telephone:</p>
												<a href="tel:09903990" title="call">
													+2347-4348489, 9908-430943734
												</a>
											</div>
											<div className="flex">
												<p className="mr-1 text-gray-800">Email:</p>
												<a
													href="mailto:hameedah07@gmail.com"
													title="send email"
												>
													hameedah07@gmail.com
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="flex items-center">
									<p className="text-4xl pr-2">
										<CiClock2 />
									</p>
									<div className="flex flex-col">
										<div className="flex flex-col">
											<p title="time">07:30-19:00</p>
											<p title="time">Monday to Friday</p>
										</div>
									</div>
								</div>
								<div className="hidden md:inline-flex xl:hidden ">
									<button className="p-2 px-8 text-xl font-semibold rounded-md border border-white bg-white text-primary hover:border-primary hover:bg-primary/40 hover:text-white transition duration-500 ease-linear">
										Enquiry
									</button>
								</div>
							</div>
							<div className="hidden xl:inline-flex">
								<button className="p-2 px-8 text-xl font-semibold rounded-md border border-white bg-white text-primary hover:border-primary hover:bg-primary/40 hover:text-white transition duration-500 ease-linear">
									Enquiry
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Head;
