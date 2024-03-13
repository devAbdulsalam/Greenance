import { useState } from 'react';
// import AuthContext from '../context/authContext';
import toast from 'react-hot-toast';
import Loader from '../components/Loader';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import getError from '../hooks/getError';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Swal from 'sweetalert2';
const ChangePassword = () => {
	const apiUrl = import.meta.env.VITE_API_URL;
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState('');
	const [cPassword, setCPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [showCPassword, setShowCPassword] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const navigate = useNavigate();
	const { id } = useParams();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password === '') {
			return toast.error('Password is required');
		}
		if (password === '') {
			return toast.error('Confirm password is required');
		}
		if (password !== cPassword) {
			return toast.error('Passwords must be the same');
		}
		setIsLoading(true);
		setDisabled(true);
		const data = { password, confirmPassword: cPassword, token: id };
		axios
			.post(`${apiUrl}/users/change-password`, data)
			.then((res) => {
				if (res.data) {
					Swal.fire({
						title: 'Password updated',
						icon: 'Success',
						text: 'Password updated successfully',
					});
				}
				navigate('/login');
			})
			.catch((error) => {
				const message = getError(error);
				Swal.fire({
					title: 'Error',
					icon: 'error',
					text: message,
				});
			})
			.finally(() => {
				setIsLoading(false);
				setTimeout(() => {
					setDisabled(false);
				}, 1000);
			});
	};

	return (
		<>
			<div className="tp-main-wrapper h-screen techbg">
				<div className="container mx-auto my-auto h-full flex items-center justify-center">
					<div className="w-[500px] mx-auto my-auto shadow-lg bg-white pt-[50px] py-[60px] px-[60px]">
						<div className="text-center">
							<h4 className="text-[24px] mb-1">Change Password</h4>
							<p>
								Already have an account?{' '}
								<span>
									{' '}
									<Link to="/login" className="text-theme">
										Log In
									</Link>{' '}
								</span>
							</p>
						</div>
						<div className="">
							<form onSubmit={handleSubmit}>
								<div className="mb-5 relative">
									<p className="mb-0 text-base text-black">
										Password <span className="text-red">*</span>
									</p>
									<input
										className="input w-full h-[49px] rounded-md border border-gray6 px-6 text-base"
										type={showPassword ? 'text' : 'password'}
										placeholder="Password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
									<div className="absolute inset-y-0 right-0 flex items-center h-[40px] mt-7 mr-4 px-2.5 z-10 bg-white">
										{showPassword ? (
											<FiEyeOff
												onClick={() => setShowPassword(false)}
												className="text-gray-600 cursor-pointer"
											/>
										) : (
											<FiEye
												onClick={() => setShowPassword(true)}
												className="text-gray-600 cursor-pointer"
											/>
										)}
									</div>
								</div>
								<div className="mb-5 relative">
									<p className="mb-0 text-base text-black">
										Confirm Password <span className="text-red">*</span>
									</p>
									<input
										className="input w-full h-[49px] rounded-md border border-gray6 px-6 text-base"
										type={showCPassword ? 'text' : 'password'}
										placeholder="Confirm Password"
										value={cPassword}
										onChange={(e) => setCPassword(e.target.value)}
									/>
									<div className="absolute inset-y-0 right-0 flex items-center h-[40px] mt-7 mr-4 px-2.5 z-10 bg-white">
										{showCPassword ? (
											<FiEyeOff
												onClick={() => setShowCPassword(false)}
												className="text-gray-600 cursor-pointer"
											/>
										) : (
											<FiEye
												onClick={() => setShowCPassword(true)}
												className="text-gray-600 cursor-pointer"
											/>
										)}
									</div>
								</div>
								<button
									disabled={disabled}
									className="bg-primary hover:bg-primary-light rounded-sm h-[49px] w-full justify-center"
								>
									Update Password
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			{isLoading && <Loader />}
		</>
	);
};

export default ChangePassword;
