/* eslint-disable react/prop-types */
import { useEffect, useState, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchChart } from '../hooks/axiosApis';
import toast from 'react-hot-toast';
import AuthContext from '../context/authContext';
import Loader from '../components/Loader';
import WalletCard from '../components/WalletCard';
import Chart from '../components/Chart';
import WastePerMonth from '../components/WastePerMonth';
import WasteList from '../components/WasteList';
const Dashboard = () => {
	const { user } = useContext(AuthContext);
	const [wallet, setWallet] = useState(0);
	const [loading, setLoading] = useState(false);
	const prop = { token: user?.token, id: user.user._id };
	const { data, isLoading, error } = useQuery(['wallet'], async () =>
		fetchChart(prop)
	);
	useEffect(() => {
		if (data) {
			console.log(data);
			setWallet(data.wallet);
		}
		if (error) {
			console.log(error);
			toast.error(error?.message);
		}
	}, [data, error]);
	return (
		<>
			<main className="p-6 sm:p-10 space-y-6">
				<div className="flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between">
					<div className="mr-6">
						<h1 className="text-xl font-semibold mb-2">Charts</h1>
						<h2 className="text-gray-600 ml-0.5">Carbon Footprint stat</h2>
					</div>
				</div>
				<WalletCard wallet={wallet} setLoading={setLoading} />
				<section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
					<WasteList />
					<Chart />
					<WastePerMonth />
				</section>
			</main>
			{isLoading || loading ? <Loader /> : ''}
		</>
	);
};

export default Dashboard;
