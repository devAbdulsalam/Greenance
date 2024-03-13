/* eslint-disable react/prop-types */
import { HiPaperAirplane } from 'react-icons/hi';
import { FaCoins } from 'react-icons/fa';
import { CiMoneyCheck1 } from 'react-icons/ci';
const WalletCard = ({ wallet, handleSendMoney, handleRedeemPoints }) => {
	return (
		<section className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
			<div className="flex items-center justify-between p-8 bg-white shadow rounded-lg">
				<div className="flex items-center ">
					<div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
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

				<button
					onClick={handleSendMoney}
					className="button flex justify-center p-2 rounded-md bg-green-500 hover:bg-green-400 text-white"
				>
					<p className="font-semibold pr-2">SEND</p>
					<HiPaperAirplane className="h-6 w-6" />
				</button>
			</div>
			<div className="flex items-center justify-between p-8 bg-white shadow rounded-lg">
				<div className="flex items-center ">
					<div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
						<FaCoins className="h-6 w-6" />
					</div>
					<div>
						<span className="block text-2xl font-bold">
							{wallet?.point || '86'}
						</span>
						<span className="block text-gray-500">Points</span>
					</div>
				</div>

				<button
					onClick={handleRedeemPoints}
					className="button flex justify-center p-2 rounded-md bg-green-500 hover:bg-green-400 text-white"
				>
					<p className="font-semibold pr-2">Redeem</p>
					<svg
						aria-hidden="true"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="h-6 w-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
						/>
					</svg>
				</button>
			</div>
			<div className="hidden md:flex items-center p-8 bg-white shadow rounded-lg">
				<div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
					<svg
						aria-hidden="true"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="h-6 w-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</div>
				<div>
					<span className="block text-2xl font-bold">87%</span>
					<span className="block text-gray-500">Progress</span>
				</div>
			</div>
		</section>
	);
};

export default WalletCard;
