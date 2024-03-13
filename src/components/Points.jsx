/* eslint-disable react/prop-types */
import { FaCoins } from 'react-icons/fa';
import { CiMoneyCheck1 } from 'react-icons/ci';
const Points = ({ wallet }) => {
	return (
		<div className="grid md:grid-cols-2 gap-6">
			<div className="flex items-center p-8 bg-white shadow rounded-lg">
				<div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
					<FaCoins className="h-6 w-6" />
				</div>
				<div>
					<span className="block text-2xl font-bold">
						{wallet?.point || '86'}
					</span>
					<span className="block text-green-500">Points</span>
				</div>
			</div>
			<div className="flex items-center p-8 bg-white shadow rounded-lg">
				<div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-teal-600 bg-teal-100 rounded-full mr-6">
					<CiMoneyCheck1 className="h-6 w-6" />
				</div>
				<div>
					<span className="block text-2xl font-bold">
						&#8358;
						{wallet?.balance || '64'}
					</span>
					<span className="block text-gray-500">Balance</span>
				</div>
			</div>
		</div>
	);
};
export default Points;
