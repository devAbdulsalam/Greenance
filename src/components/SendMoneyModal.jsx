/* eslint-disable react/prop-types */
import { useContext } from 'react';
import AuthContext from '../context/authContext';
import WalletContext from '../context/walletContext';
import toast from 'react-hot-toast';
import axios from 'axios';
import getError from '../hooks/getError';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { FaCoins } from 'react-icons/fa';
// import imageIcon from './../assets/img/icons/Accounts.png';
import Modal from './Modal';

const WalletModal = ({ show, setShow, setLoading, loading }) => {
	const { user } = useContext(AuthContext);
	const { selectedAccount } = useContext(WalletContext);
	const apiUrl = import.meta.env.VITE_API_URL;
	const config = {
		headers: {
			Authorization: `Bearer ${user?.token}`,
		},
	};
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const handleDelete = async (account) => {
		setLoading(true);
		setShow(false);
		if (!account._id) {
			return toast.success('Invalid Account');
		}
		const data = { amount: 100 };
		try {
			axios
				.post(`${apiUrl}/wallet/${user.user._id}`, data, config)
				.then((res) => {
					if (res.data) {
						toast.success('Account deleted successfully');
					}
					queryClient.invalidateQueries(['wallet']);
					navigate('/wallet');
				})
				.catch((error) => {
					const message = getError(error);
					toast.error(message);
				})
				.finally(() => {
					setLoading(false);
					setShow(false);
					// setSelectedProduct('');
				});
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<Modal show={show}>
			<div className="transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all font-josefin">
				<div className="space-y-5 p-4">
					<div className="flex justify-between">
						<div>
							<p className="font-semibold text-lg text-primary">
								Delete Accounts
							</p>
						</div>
						<button
							onClick={() => setShow(false)}
							className="m-1 p-2 py-1 shadow rounded-full hover:bg-red-300 duration-150 ease-in-out"
						>
							<i className="fa-solid fa-xmark text-xl text-red-300 hover:text-red-500" />
						</button>
					</div>
					<div className="p-2">
						<p className="text-center ">
							Are you sure you send 500 to Abdulsalam?
						</p>
						<div className="flex items-center space-x-5">
							<FaCoins className="w-[60px] h-[60px] rounded-md" />
							<p className=" text-center">{selectedAccount?.name}</p>
						</div>
					</div>
					<button
						disabled={loading}
						className="bg-primary hover:bg-primary-light text-white font-semibold h-10 py-1 w-full flex items-center justify-center rounded-md transition-all duration-500 ease-in-out"
						onClick={() => handleDelete(selectedAccount)}
					>
						<span>Send Accounts</span>
						<i className="fa-solid fa-delete text-2xl text-primary"></i>
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default WalletModal;
