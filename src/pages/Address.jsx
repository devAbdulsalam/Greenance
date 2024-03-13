import { FaUser } from 'react-icons/fa6';
import { fetchAddress } from '../hooks/axiosApis';
import toast from 'react-hot-toast';
import { useContext, useEffect, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import AuthContext from '../context/authContext';
import Loader from '../components/Loader';
import getError from '../hooks/getError';
import Swal from 'sweetalert2';
import axios from 'axios';
const Address = () => {
	const { user } = useContext(AuthContext);
	const [addresses, setAddresses] = useState([]);
	const [loading, setLoading] = useState(false);
	const prop = { token: user?.token, id: user.user._id };
	let { data, isLoading, error } = useQuery(['address'], async () =>
		fetchAddress(prop)
	);
	useEffect(() => {
		if (data) {
			console.log(data);
			setAddresses(data);
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
	const handleAddAccount = async () => {
		const { value: account } = await Swal.fire({
			title: 'Enter account',
			input: 'text',
			inputLabel: 'Enter account',
			inputValue: '',
			showCancelButton: true,
			inputValidator: (value) => {
				if (value.length !== 11 || !/^\d+$/.test(value)) {
					return 'Enter a valid account number';
				}
			},
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, Add account!',
		});

		if (account) {
			Swal.fire({
				title: 'Are you sure?',
				text: `You want to add ${account.number} ${account.name} to you accounts`,
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
						.post(`${apiUrl}/account`, data, config)
						.then((res) => {
							if (res.data) {
								Swal.fire({
									title: 'Success',
									text: 'Money sent successfully',
									icon: 'success',
								});
							}
							queryClient.invalidateQueries(['wallet']);
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
				}
			});
		}
		const handleShowAccount = async (account) => {
			console.log(account);
		};
		const handleDeleteAccount = async (account) => {
			Swal.fire({
				title: 'Are you sure?',
				text: `You want to delete ${account.number}`,
				icon: 'question',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, send!',
			}).then((result) => {
				if (result.isConfirmed) {
					setLoading(true);
					axios
						.delete(`${apiUrl}/account`, config)
						.then((res) => {
							if (res.data) {
								Swal.fire({
									title: 'Success',
									text: 'account deleted successfully',
									icon: 'success',
								});
							}
							queryClient.invalidateQueries(['account']);
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
				}
			});
		};
	};
	return (
		<>
			<main className="">
				<div className="max-w-[687px] mx-auto mt-5 ">
					<div className="mt-5">
						<h2 className="text-2xl font-semibold capitalize text-center text-green-500">
							My Accounts
						</h2>
					</div>
					<div className="mt-10 divide-y space-y-0.5">
						{addresses.length > 0
							? addresses?.map((address) => {
									return (
										<div
											key={address._id}
											onClick={() => handleShowaddress(address)}
											className="flex items-center p-8 bg-white shadow rounded-lg"
										>
											<div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
												<FaUser className="h-6 w-6" />
											</div>
											<div>
												<span className="block text-2xl font-bold">
													{address.name}
												</span>
												<span className="block text-green-500">
													{address.number}
												</span>
											</div>
										</div>
									);
							  })
							: ''}
						<div>
							<button onClick={handleAddAccount}>Add Address</button>
						</div>
					</div>
				</div>
			</main>
			{isLoading || loading ? <Loader /> : ''}
		</>
	);
};

export default Address;
