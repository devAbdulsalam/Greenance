/* eslint-disable react/prop-types */
import { useState, useContext, useEffect } from 'react';
import Banks from '../components/Banks';
import { AnimatePresence } from 'framer-motion';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import AuthContext from '../context/authContext';
import { fetchBanks } from '../hooks/axiosApis';
import Loader from '../components/Loader';
import toast from 'react-hot-toast';
import axios from 'axios';
import getError from '../hooks/getError';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';

const AddAccount = () => {
	const { user } = useContext(AuthContext);
	const [accountNumber, setAccountNumber] = useState('');
	const [accountName, setAccountName] = useState('');
	const [bank, setBank] = useState({});
	const [open, setOpen] = useState(false);
	const [verify, setVerify] = useState(true);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const prop = { token: user?.token, id: user.user._id };
	const { data: banks, isLoading } = useQuery(['banks'], async () =>
		fetchBanks(prop)
	);
	useEffect(() => {
		setVerify(true);
	}, [accountNumber, bank]);
	useEffect(() => {
		if (banks) {
			console.log(banks);
		}
	}, [banks]);
	const config = {
		headers: {
			Authorization: `Bearer ${user.token}`,
		},
	};

	const apiUrl = import.meta.env.VITE_API_URL;
	const queryClient = useQueryClient();
	const formatBankCode = (code) => {
		const trimmedCode = code.trim();
		if (trimmedCode.length > 3) {
			return trimmedCode.slice(-3);
		} else {
			return trimmedCode;
		}
	};
	const verifyAccount = () => {
		setLoading(true);
		const data = {
			account_bank: formatBankCode(bank.code),
			account_number: accountNumber,
		};
		axios
			.post(`${apiUrl}/accounts/verify-account`, data, config)
			.then((res) => {
				if (res.data.status === 'error') {
					const message = getError(res.data);
					return toast.error(message);
				}
				setAccountName(res.data.data.account_name);
				setVerify(false);
			})
			.catch((error) => {
				setAccountName('');
				const message = getError(error);
				return toast.error(message);
			})
			.finally(() => {
				setLoading(false);
			});
	};
	const handleAddAccount = () => {
		const data = {
			userId: user.user._id,
			bank: bank.name,
			account: accountNumber,
			name: accountName,
		};
		setLoading(true);
		axios
			.post(`${apiUrl}/accounts`, data, config)
			.then((res) => {
				if (res.data) {
					Swal.fire({
						title: 'Success',
						text: 'Account added successfully',
						icon: 'success',
					});
					queryClient.invalidateQueries(['account']);
					return navigate('/account');
				}
			})
			.catch((error) => {
				const message = getError(error);
				Swal.fire({
					title: 'Error!',
					text: message,
					icon: 'error',
				});
				toast.error(message);
				setLoading(false);
			})
			.finally(() => {
				setLoading(false);
			});
	};
	return (
		<>
			<main className=" relative">
				<div className="max-w-[687px] mx-auto mt-5 relative">
					<div className="">
						<button onClick={() => navigate('/account')}>
							<FaArrowLeft className="h-6 w-6 text-green-400" />
						</button>
						<h2 className="text-xl font-semibold capitalize text-center text-green-500">
							Add Account
						</h2>
					</div>
					<div className="flex flex-col w-full">
						<label htmlFor="accountName">Account Number</label>
						<input
							type="tel"
							id="accountNumber"
							className="w-full px-3 my-2 py-2 text-lg inline-block font-normal text-gray-500 bg-clip-padding border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-300 focus:border-gray-600 focus:outline-none"
							value={accountNumber}
							onChange={(e) => setAccountNumber(e.target.value)}
							placeholder="Account number"
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="bank" onClick={() => setOpen(true)}>
							Select Bank
						</label>
						<select
							onClick={() => setOpen(true)}
							className="w-full px-3 my-2 py-2 text-lg inline-block font-normal text-gray-500 bg-clip-padding border-2 border-gray-300 rounded transition ease-in-out m-0 focus:outline-none"
						>
							<option value={'firstbank'}>
								{bank ? bank.name : 'Select Bank'}
							</option>
						</select>
					</div>
					<div className="flex flex-col">
						<div className="w-full px-3 my-2 py-2 text-lg inline-block font-normal text-gray-500 bg-clip-padding border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-300 focus:border-gray-600 focus:outline-none">
							{accountName || 'Account Name'}
						</div>
					</div>
					<div className="w-full mt-3">
						{verify ? (
							<button
								className="p-2 py-3 bg-green-300 hover:bg-green-400 rounded-md w-full"
								onClick={verifyAccount}
							>
								Verify account
							</button>
						) : (
							<button
								className="p-2 py-3 bg-green-400 hover:bg-primary-light rounded-md w-full"
								onClick={handleAddAccount}
							>
								Add account
							</button>
						)}
					</div>
					<div className="relative w-full">
						<AnimatePresence>
							{open && (
								<Banks
									banks={banks}
									setBank={setBank}
									onClose={() => setOpen(false)}
								/>
							)}
						</AnimatePresence>
					</div>
				</div>
			</main>
			{isLoading || loading ? <Loader /> : ''}
		</>
	);
};

export default AddAccount;
