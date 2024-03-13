import { FaUser } from 'react-icons/fa6';
import { fetchAccount, fetchBanks } from '../hooks/axiosApis';
import toast from 'react-hot-toast';
import { useContext, useEffect, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import AuthContext from '../context/authContext';
import Loader from '../components/Loader';
import AccountModal from './../components/AccountModal';
import getError from '../hooks/getError';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Account = () => {
	const { user } = useContext(AuthContext);
	const [accounts, setAccounts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [isAccountModal, setAccountModal] = useState(false);
	const [accountDetails, setAccountDetails] = useState(null);
	const navigate = useNavigate();
	const prop = { token: user?.token, id: user.user._id };
	let { data, isLoading, error } = useQuery(['account'], async () =>
		fetchAccount(prop)
	);
	const { data: banks } = useQuery(['banks'], async () => fetchBanks(prop));
	useEffect(() => {
		if (banks) {
			console.log(banks);
		}
	}, [banks]);
	useEffect(() => {
		if (data) {
			setAccounts(data);
		}
		if (error) {
			console.log(error);
			toast.error(error?.message);
		}
	}, [data, error]);
	const apiUrl = import.meta.env.VITE_API_URL;
	const queryClient = useQueryClient();
	const config = {
		headers: {
			Authorization: `Bearer ${user?.token}`,
		},
	};
	const handleSendMoney = async (account) => {
		const { value: amount } = await Swal.fire({
			title: 'Enter account',
			input: 'text',
			inputLabel: 'Enter account',
			inputValue: '',
			showCancelButton: true,
			inputValidator: (value) => {
				if (value.length !== 6 || !/^\d+$/.test(value)) {
					return 'Enter a valid Amount';
				}
			},
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, Send account!',
		});

		if (amount) {
			Swal.fire({
				title: 'Are you sure?',
				text: `You want to send ${amount} to ${account.number} ${account.name}`,
				icon: 'question',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, add!',
			}).then((result) => {
				if (result.isConfirmed) {
					const data = {
						account,
					};
					setLoading(true);
					axios
						.post(`${apiUrl}/account/send-money`, data, config)
						.then((res) => {
							if (res.data) {
								setAccountDetails(null);
								setAccountModal(false);
								Swal.fire({
									title: 'Success',
									text: 'Money sent successfully',
									icon: 'success',
								});
								queryClient.invalidateQueries(['wallet']);
								queryClient.invalidateQueries(['account']);
							}
						})
						.catch((error) => {
							const message = getError(error);

							setAccountDetails(null);
							setAccountModal(false);
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
				}
			});
		}
	};
	const handleShowAccount = async (account) => {
		setAccountDetails(account);
		setAccountModal(true);
	};
	const handleDeleteAccount = async (account) => {
		Swal.fire({
			title: 'Are you sure?',
			text: `You want to delete ${account.number}`,
			icon: 'question',
			showCancelButton: true,
			confirmButtonColor: '#d33',
			cancelButtonColor: '#3085d6',
			confirmButtonText: 'Yes, Delete!',
		}).then((result) => {
			if (result.isConfirmed) {
				setLoading(true);
				axios
					.delete(`${apiUrl}/accounts/${account._id}`, config)
					.then((res) => {
						if (res.data) {
							setAccountDetails(null);
							setAccountModal(false);
							Swal.fire({
								title: 'Success',
								text: 'Account deleted successfully',
								icon: 'success',
							});
						}
						queryClient.invalidateQueries(['account']);
					})
					.catch((error) => {
						const message = getError(error);
						setAccountDetails(null);
						setAccountModal(false);
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
			}
		});
	};
	return (
		<>
			<main className="">
				<div className="max-w-[687px] mx-auto mt-5 relative">
					<div className="">
						<h2 className="text-xl font-semibold capitalize text-center text-green-500">
							My Accounts
						</h2>
					</div>
					<div className="mt-10 divide-y space-y-0.5 relative">
						{accounts.length > 0 ? (
							accounts?.map((account) => {
								return (
									<div
										key={account._id}
										onClick={() => handleShowAccount(account)}
										className="flex items-center p-8 bg-white shadow rounded-lg"
									>
										<div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
											<FaUser className="h-6 w-6" />
										</div>
										<div>
											<span className="block text-2xl font-bold">
												{account.bank}
											</span>
											<span className="block text-green-500">
												{account.name}
											</span>
										</div>
									</div>
								);
							})
						) : (
							<h2 className="text-yellow-500 text-xl text-center">
								No account added
							</h2>
						)}
						<div className="w-full md:w-[687px] mx-auto flex flex-col py-4 fixed bottom-0 px-2 z-1">
							<button
								onClick={() => navigate('/add-account')}
								className="p-2 py-3 bg-green-300 hover:bg-primary-light rounded-md"
							>
								Add Account
							</button>
						</div>
					</div>
				</div>
			</main>
			<AccountModal
				show={isAccountModal}
				setShow={setAccountModal}
				handleDelete={handleDeleteAccount}
				handleSendMoney={handleSendMoney}
				account={accountDetails}
			/>
			{isLoading || loading ? <Loader /> : ''}
		</>
	);
};

export default Account;
