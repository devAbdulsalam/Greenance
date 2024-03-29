/* eslint-disable react/prop-types */
import axios from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import getError from './../hooks/getError';

const SigninForm = ({ setLoading }) => {
	const apiUrl = import.meta.env.VITE_API_URL;
	// const phoneRegExp = /^(\+\d{1,4})?\d{10,11}$/;
	// const emailRegExp = /^(\+\d{1,4})?\d{10,11}$/;
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		try {
			setLoading(true);
			axios
				.post(`${apiUrl}/users/login`, data)
				.then((res) => {
					console.log(res);
				})
				.catch((error) => {
					const message = getError(error);
					toast.error(message);
				});
		} catch (error) {
			const message = getError(error);
			toast.error(message);
			console.log('Unexpected error:', error.message);
		} finally {
			setLoading(false);
		}
	};
	return (
		<div className="selection:primary selection:text-white  w-full">
			<div className="min-h-screen bg-transparent flex justify-center items-center">
				<div className="p-8 flex-1">
					<div className="w-80 bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
						<div className="relative h-48 bg-primary rounded-bl-4xl">
							<div className="text-white  mt-10 absolute mx-auto w-full">
								<h3 className="text-3xl font-semibold">Shara</h3>
								<p className="">Your digital waste management solution</p>
							</div>
							<svg
								className="absolute bottom-0"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 1440 320"
							>
								<path
									fill="#ffffff"
									fillOpacity="1"
									d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
								></path>
							</svg>
						</div>
						<div className="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
							<h1 className="text-2xl font-semibold text-gray-900">
								Welcome back!
							</h1>
							<form onSubmit={handleSubmit(onSubmit)} className="mt-10">
								<div className="relative">
									<input
										id="email"
										name="email"
										type="text"
										autoComplete
										className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-primary"
										placeholder="john@doe.com"
										{...register('password', {
											required: 'Password is required',
										})}
									/>
									{errors.password && (
										<div className="text-red-500">
											{errors.password.message}
										</div>
									)}
									<label
										htmlFor="email"
										className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
									>
										Email address
									</label>
								</div>
								<div className="mt-10 relative">
									<input
										id="password"
										type="password"
										name="password"
										autoComplete
										className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-primary"
										placeholder="Password"
									/>
									<label
										htmlFor="password"
										className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
									>
										Password
									</label>
								</div>

								<input
									type="sumbit"
									value="Sign in"
									className="mt-10 px-4 py-2 rounded bg-primary hover:bg-primary-light text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-primary focus:ring-opacity-80 cursor-pointer"
								/>
							</form>
							<a
								href="#"
								className="mt-4 block text-sm text-center font-medium text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary"
							>
								{' '}
								Forgot your password?{' '}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SigninForm;
