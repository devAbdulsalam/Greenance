/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchDashboard } from '../hooks/axiosApis';
import AuthContext from '../context/authContext';
import toast from 'react-hot-toast';
import Loader from '../components/Loader';
import Notifications from '../components/Notifications';
import Main from '../components/Main';
import Weather from '../components/Weather';
const Dashboard = () => {
	const { user } = useContext(AuthContext);
	const prop = { token: user?.token, id: user?.user?._id };
	const { data, isLoading, error } = useQuery(['dashboard'], async () =>
		fetchDashboard(prop)
	);
	useEffect(() => {
		if (data) {
			console.log(data);
		}
		if (error) {
			console.log(error);
			toast.error(error?.message);
		}
	}, [data, error]);
	return (
		<>
			<main className="p-6 sm:p-10 space-y-6">
				<div className="flex  space-y-6 md:space-y-0  justify-between items-center mb-2">
					<div className="mr-2">
						<h1 className="text-xl font-semibold my-1">
							{user?.user?.name?.substring(0, 15) || 'Dashboard'}
						</h1>
						<h2 className="text-gray-600 ml-0.5 text-sm font-semibold">
							Let take action together. 👋
						</h2>
					</div>
					<Weather />
				</div>
				<Main />
				<Notifications />
			</main>

			{/* {isLoading ? <Loader /> : ''} */}
		</>
	);
};

export default Dashboard;
