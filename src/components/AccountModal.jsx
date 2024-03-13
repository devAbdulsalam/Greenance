/* eslint-disable react/prop-types */
import Modal from './Modal';
import { FaUser } from 'react-icons/fa6';

const AccountModal = ({
	show,
	setShow,
	account,
	handleSendMoney,
	handleDelete,
}) => {
	return (
		<Modal show={show}>
			<div className="transform overflow-hidden rounded-2xl w-full md:w-[600px] bg-white text-left align-middle shadow-xl transition-all font-josefin">
				<div className="space-y-5 p-4">
					<div className="flex justify-between">
						<div>
							<p className="font-semibold text-lg text-primary">Account info</p>
						</div>
						<button
							onClick={() => setShow(false)}
							className="m-1 p-2 py-1 shadow rounded-full hover:bg-red-300 duration-150 ease-in-out"
						>
							<i className="fa-solid fa-xmark text-xl text-red-300 hover:text-red-500" />
						</button>
					</div>
					<div className="divide-y w-full">
						<div className="p-2">
							<div className="flex items-center p-3 md:p-8 bg-white shadow rounded-lg">
								<div className="inline-flex flex-shrink-0 items-center justify-center h-10 w-10 md:h-16 md:w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
									<FaUser className="h-4 w-4 md:h-6 md:w-6" />
								</div>
								<div>
									<span className="block text-xl font-bold">
										{account?.account}
									</span>
									<span className="block text-green-500">{account?.bank}</span>
								</div>
							</div>
							<div className="mt-2 text-lg">
								<h2>{account?.name}</h2>
							</div>
						</div>
					</div>
					<div className="flex justify-between">
						<button
							onClick={() => handleDelete(account)}
							className="p-2 bg-red-300 hover:bg-red-400 rounded-md"
						>
							Remove
						</button>
						<button
							onClick={() => handleSendMoney(account)}
							className="p-2 bg-green-300 hover:bg-primary-light rounded-md"
						>
							Send Money
						</button>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default AccountModal;
