/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchDashboard } from '../hooks/axiosApis';
import AuthContext from '../context/authContext';
import toast from 'react-hot-toast';
import Loader from '../components/Loader';
import Weather from '../components/Weather';
import Points from '../components/Points';
import YouTubeVideo from '../components/YouTubeVideo';
import Notifications from '../components/Notifications';
const Dashboard = () => {
	const { user } = useContext(AuthContext);
	const prop = { token: user?.token, id: user.user._id };
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
	const videos = ['Qyu-fZ8BOnI', 'yukvSfTxrh8', '7fVUyVuyP6I', '7SCBdcXg2fs'];
	const videoId = videos[Math.floor(Math.random() * videos.length)];
	return (
		<>
			<main className="p-6 sm:p-10 space-y-6">
				<div className="flex  space-y-6 md:space-y-0  justify-between items-center">
					<div className="mr-2">
						<h1 className="text-xl font-semibold my-1">
							{user.user.name?.substring(0, 15) || 'Dashboard'}
						</h1>
						<h2 className="text-gray-600 ml-0.5 text-sm font-semibold">
							Let take action together. 👋
						</h2>
					</div>
					<Weather location={user?.user?.location || 'kano'} />
				</div>
				<Points wallet={data?.wallet} />
				<div className="h-[300px]">
					<YouTubeVideo videoId={videoId} />
				</div>
				<Notifications />
			</main>
			{isLoading ? <Loader /> : ''}
		</>
	);
};

export default Dashboard;
