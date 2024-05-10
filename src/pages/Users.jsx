import { FaMessage, FaUser } from 'react-icons/fa6';
import { fetchUsers } from '../hooks/axiosApis';
import toast from 'react-hot-toast';
import { useContext, useEffect, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import AuthContext from '../context/authContext';
import Loader from '../components/Loader';
import DebouncedInput from './../components/DebouncedInput';
import getError from '../hooks/getError';
import Swal from 'sweetalert2';
import axios from 'axios';
const Users = () => {
	const { user } = useContext(AuthContext);
	const [users, setUsers] = useState([]);
	const [globalFilter, setGlobalFilter] = useState('');
	const [loading, setLoading] = useState(false);
	const prop = { token: user?.token, id: user?.user?._id };
	let { data, isLoading, error } = useQuery(['user'], async () =>
		fetchUsers(prop)
	);
	useEffect(() => {
		if (data) {
			setUsers(data);
		}
		if (error) {
			console.log(error);
			toast.error(error?.message);
		}
	}, [data, error]);
	useEffect(() => {
		if (globalFilter === '') {
			return setUsers(data);
		}
	}, [globalFilter, data]);
	const handleFilter = () => {
		const lowercaseQuery = globalFilter.toLowerCase();
		const result = data.filter(
			(items) =>
				items.name.toLowerCase().includes(lowercaseQuery) ||
				items.phone.toLowerCase().includes(lowercaseQuery)
		);
		setUsers(() => result);
	};
	// data = useMemo(() => handleFilter, [handleFilter]);
	const apiUrl = import.meta.env.VITE_API_URL;
	const queryClient = useQueryClient();
	const config = {
		headers: {
			Authorization: `Bearer ${user?.token}`,
			// 'Content-Type': 'multipart/form-data',
		},
	};
	const handleSendMoney = async (receiver) => {
		const { value: amount } = await Swal.fire({
			title: 'Send point',
			input: 'text',
			inputLabel: 'Enter amount to be sent',
			inputValue: '',
			showCancelButton: true,
			inputValidator: (value) => {
				if (!value) {
					return 'You need to write something!';
				}
				if (user.wallet.balance < value) {
					return 'Insufficent balance for amount';
				}
			},
		});
		if (amount) {
			Swal.fire({
				title: 'Are you sure?',
				text: `You want to send ${amount} to ${receiver.name} ${receiver.phone}`,
				icon: 'question',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, send!',
			}).then((result) => {
				if (result.isConfirmed) {
					Swal.fire({
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
					}).then((data) => {
						const pin = data.value;
						if (amount && pin) {
							const data = {
								amount,
								pin,
								receiverId: receiver._id,
							};
							setLoading(true);
							axios
								.post(`${apiUrl}/wallet/send-money`, data, config)
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
			});
		}
	};
	return (
		<>
			<main className="">
				<div className="max-w-[687px] mx-auto mt-5 ">
					<div className="mt-5">
						<h2 className="text-2xl font-semibold text-center text-green-500">
							Send point to
						</h2>
						<div className="search-input relative mt-5">
							<DebouncedInput
								className="input h-[44px] w-full pr-14 pl-4"
								value={globalFilter ?? ''}
								onChange={(value) => setGlobalFilter(String(value))}
								type="text"
								placeholder="Search user by phone or name..."
							/>
							<button
								onClick={handleFilter}
								className="absolute top-1/2 right-5 translate-y-[-50%] hover:text-theme"
							>
								<svg
									width="16"
									height="16"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
									<path
										d="M18.9999 19L14.6499 14.65"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
								</svg>
							</button>
						</div>
					</div>
					<div className="mt-5 divide-y space-y-0.5">
						{users?.length > 0
							? users?.map((user) => {
									return (
										<div
											key={user._id}
											className="flex items-center p-4 md:p-6 bg-white shadow rounded-lg "
										>
											<div
												className="flex-1 flex cursor-pointer"
												onClick={() => handleSendMoney(user)}
											>
												<div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
													<FaUser className="h-6 w-6" />
												</div>
												<div>
													<span className="block text-2xl font-bold">
														{user.name}
													</span>
													<span className="block text-green-500">9099909</span>
												</div>
											</div>
											<div className="self-end inline-flex flex-shrink-0 items-center cursor-pointer justify-center h-12 w-12 text-green-600 bg-green-100 hover:bg-green-200 rounded-full mr-2">
												<FaMessage className="h-4 w-4" />
											</div>
										</div>
									);
							  })
							: ''}
					</div>
				</div>
			</main>
			{isLoading || loading ? <Loader /> : ''}
		</>
	);
};

export default Users;
