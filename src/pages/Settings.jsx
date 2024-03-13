import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useContext, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import AuthContext from '../context/authContext';
import Loader from '../components/Loader';
import getError from '../hooks/getError';
import Swal from 'sweetalert2';
import axios from 'axios';
import Logout from '../components/Logout';
const Settings = () => {
	const { user } = useContext(AuthContext);
	const [loading, setLoading] = useState(false);
	const apiUrl = import.meta.env.VITE_API_URL;
	const queryClient = useQueryClient();
	const config = {
		headers: {
			Authorization: `Bearer ${user?.token}`,
		},
	};
	const handleChangePin = async () => {
		const { value: oldPin } = await Swal.fire({
			title: 'Enter wallet pin',
			input: 'text',
			inputLabel: 'Enter Old wallet pin',
			inputValue: '',
			showCancelButton: true,
			inputValidator: (value) => {
				if (value.length !== 4 || !/^\d+$/.test(value)) {
					return 'Enter a valid 4-digit wallet pin';
				}
			},
		});
		if (oldPin) {
			Swal.fire({
				title: 'Enter new wallet pin',
				input: 'text',
				inputLabel: 'Enter your new pin',
				inputValue: '',
				showCancelButton: true,
				inputValidator: (value) => {
					if (value.length !== 4 || !/^\d+$/.test(value)) {
						return 'Enter a valid 4-digit wallet pin';
					}
				},
			}).then((data) => {
				const pin = data.value;
				if (oldPin && pin) {
					const data = {
						oldPin,
						pin,
					};
					setLoading(true);
					axios
						.post(`${apiUrl}/user/pin`, data, config)
						.then((res) => {
							if (res.data) {
								Swal.fire({
									title: 'Success',
									text: 'wallet pin changed successfully',
									icon: 'success',
								});
							}
							queryClient.invalidateQueries(['user']);
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
	};
	const handleChangePassword = async () => {
		const { value: oldPin } = await Swal.fire({
			title: 'Enter wallet password',
			input: 'text',
			inputLabel: 'Enter Old password',
			inputValue: '',
			showCancelButton: true,
			inputValidator: (value) => {
				if (value.length !== 4 || !/^\d+$/.test(value)) {
					return 'Enter a valid 4-digit wallet pin';
				}
			},
		});
		if (oldPin) {
			Swal.fire({
				title: 'Enter new wallet pin',
				input: 'text',
				inputLabel: 'Enter your new pin',
				inputValue: '',
				showCancelButton: true,
				inputValidator: (value) => {
					if (value.length !== 4 || !/^\d+$/.test(value)) {
						return 'Enter a valid 4-digit wallet pin';
					}
				},
			}).then((data) => {
				const pin = data.value;
				if (oldPin && pin) {
					const data = {
						oldPin,
						pin,
					};
					setLoading(true);
					axios
						.post(`${apiUrl}/user/password`, data, config)
						.then((res) => {
							if (res.data) {
								Swal.fire({
									title: 'Success',
									text: 'Password updated successfully',
									icon: 'success',
								});
							}
							queryClient.invalidateQueries(['user']);
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
	};
	return (
		<>
			<main className="p-6 sm:p-10 space-y-6">
				<div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
					<div className="mr-6">
						<h1 className="text-4xl font-semibold mb-2">Settings</h1>
						<h2 className="text-gray-600 ml-0.5">Welcome to shara</h2>
					</div>
				</div>
				<div className="max-w-[687px] mx-auto mt-5 ">
					<Link
						to="/add-account"
						className="flex items-center p-8 bg-white shadow rounded-lg"
					>
						<div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
							<FaUser className="h-6 w-6" />
						</div>
						<div>
							<span className="block text-2xl font-bold">Add Account</span>
							<span className="block text-green-500">Add bank Account</span>
						</div>
					</Link>
					<Link
						to="/profile"
						className="flex items-center p-8 bg-white shadow rounded-lg"
					>
						<div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
							<FaUser className="h-6 w-6" />
						</div>
						<div>
							<span className="block text-2xl font-bold">Update profile</span>
							<span className="block text-green-500">Update profile</span>
						</div>
					</Link>
					<div
						onClick={handleChangePin}
						className="flex items-center p-8 bg-white shadow rounded-lg"
					>
						<div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
							<FaUser className="h-6 w-6" />
						</div>
						<div>
							<span className="block text-2xl font-bold">Change password</span>
							<span className="block text-green-500">
								change account password
							</span>
						</div>
					</div>
					<div
						onClick={handleChangePassword}
						className="flex items-center p-8 bg-white shadow rounded-lg"
					>
						<div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
							<FaUser className="h-6 w-6" />
						</div>
						<div>
							<span className="block text-2xl font-bold">Change pin</span>
							<span className="block text-green-500">Change wallet pin</span>
						</div>
					</div>
					<hr className="w-full text-gray-50 opacity-20" />
					<div className="w-full px-3 py-2 flex justify-center">
						<Logout>
							<button className="mx-1 text-xl p-2 justify-center px-6 text-center bg-green-500 text-white rounded-md">
								Log Out
							</button>
						</Logout>
					</div>
				</div>
			</main>
			{loading ? <Loader /> : ''}
		</>
	);
};

export default Settings;
