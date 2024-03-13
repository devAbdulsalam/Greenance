/* eslint-disable react/prop-types */
// import imageIcon from './../assets/img/icons/Accounts.png';
import Modal from './Modal';
import { FaCoins } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const SendModal = ({ show, setShow }) => {
	return (
		<Modal show={show}>
			<div className="transform overflow-hidden rounded-2xl w-full md:w-[600px] bg-white text-left align-middle shadow-xl transition-all font-josefin">
				<div className="space-y-5 p-4">
					<div className="flex justify-between">
						<div>
							<p className="font-semibold text-lg text-primary">
								Send Money To
							</p>
						</div>
						<button
							onClick={() => setShow(false)}
							className="m-1 p-2 py-1 shadow rounded-full hover:bg-red-300 duration-150 ease-in-out"
						>
							<i className="fa-solid fa-xmark text-xl text-red-300 hover:text-red-500" />
						</button>
					</div>
					<div className="divide-y w-full">
						<Link to="/users" className="p-2">
							<div className="flex items-center p-8 bg-white shadow rounded-lg">
								<div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
									<FaCoins className="h-6 w-6" />
								</div>
								<div>
									<span className="block text-2xl font-bold">Shara</span>
									<span className="block text-green-500">
										Send to Shara user
									</span>
								</div>
							</div>
						</Link>
						<Link to="/account" className="p-2">
							<div className="flex items-center p-8 bg-white shadow rounded-lg">
								<div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
									<FaUser className="h-6 w-6" />
								</div>
								<div>
									<span className="block text-2xl font-bold">My Account</span>
									<span className="block text-green-500">
										Send to my account
									</span>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default SendModal;
