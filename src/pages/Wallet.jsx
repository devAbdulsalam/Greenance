/* eslint-disable react/prop-types */
import { useEffect, useState, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchWallet } from '../hooks/axiosApis';
import toast from 'react-hot-toast';
import AuthContext from '../context/authContext';
import Loader from '../components/Loader';
import WalletCard from '../components/WalletCard';
import Transactions from '../components/Transactions';
import SendMoneyModal from '../components/SendModal';
import Swal from 'sweetalert2';
import axios from 'axios';
import getError from '../hooks/getError';
import { useQueryClient } from '@tanstack/react-query';

const Wallet = () => {
	const { user } = useContext(AuthContext);
	const [wallet, setWallet] = useState(0);
	const [loading, setLoading] = useState(false);
	const [isSendModal, setIsSendModal] = useState(false);
	const props = { token: user?.token, id: user?.user?._id };
	const { data, isLoading, error } = useQuery(['wallet'], async () =>
		fetchWallet(props)
	);
	useEffect(() => {
		if (data) {
			setWallet(data.wallet);
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
			// 'Content-Type': 'multipart/form-data',
		},
	};
	const handleSendMoney = () => {
		setIsSendModal(!isSendModal);
	};
	const handleRedeemPoints = async () => {
		if (data?.wallet?.point < 10) {
			return Swal.fire({
				title: 'Not enough points!',
				text: 'You have no enough redeemable points, Earn more points to redeem',
				icon: 'warning',
			});
		}
		const { value: amount } = await Swal.fire({
			title: 'Redeem point',
			input: 'text',
			inputLabel: 'Enter redeem amount',
			inputValue: data.wallet.point,
			showCancelButton: true,
			inputValidator: (value) => {
				if (!value) {
					return 'You need to write something!';
				}
				if (data.wallet.point < value) {
					return 'Enter a valid point';
				}
			},
		});
		if (amount) {
			const { value: pin } = await Swal.fire({
				title: 'Enter wallet pin',
				input: 'text',
				inputLabel: 'Enter your pin',
				inputValue: '',
				showCancelButton: true,
				inputValidator: (value) => {
					if (value.length !== 4 || !/^\d+$/.test(value)) {
						return 'Enter a valid 4-digit wallet pin';
					}
				},
			});
			if (amount && pin) {
				Swal.fire({
					title: 'Are you sure?',
					text: `You want to redeem ${amount}`,
					icon: 'question',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Yes, redeem!',
				}).then((result) => {
					if (result.isConfirmed) {
						const data = {
							amount,
							pin,
						};

						setLoading(true);
						axios
							.post(`${apiUrl}/wallet/redeem-point`, data, config)
							.then((res) => {
								if (res.data) {
									Swal.fire({
										title: 'Redeem!',
										text: 'Point redeem successfully',
										icon: 'success',
									});
								}

								queryClient.invalidateQueries(['wallet']);
							})
							.catch((error) => {
								const message = getError(error);
								Swal.fire({
									title: 'Error!',
									text: message || 'Point redeem successfully',
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
		}
	};
	return (
		<>
			<main className="p-6 sm:p-10 space-y-6">
				<div className="flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between">
					<div className="mr-6">
						<h1 className="text-xl font-semibold mb-2">Wallet</h1>
						<h2 className="text-gray-600 ml-0.5">Rewards and Points</h2>
					</div>
				</div>
				<WalletCard
					wallet={wallet}
					handleSendMoney={handleSendMoney}
					handleRedeemPoints={handleRedeemPoints}
				/>
				<Transactions transactions={data?.transactions} />
			</main>
			{isLoading || loading ? <Loader /> : ''}
			<SendMoneyModal
				show={isSendModal}
				setShow={setIsSendModal}
				wallet={wallet}
				setLoading={setLoading}
			/>
		</>
	);
};

export default Wallet;
