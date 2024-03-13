/* eslint-disable react/prop-types */
// import { FaCoins } from 'react-icons/fa';
const Notifications = () => {
	return (
		<div className="text-sm my-2 space-y-2 px-1">
			<h2 className="text-lg font-semibold my-2 mx-2">Notifications</h2>
			<div className="rounded-lg px-4 py-3 bg-gray-50">
				<p className="font-semibold text-green-500">Credit</p>
				<p className="font-semibold text-xs text-green-500">
					You have reward for the 5kg waste you sold
				</p>
			</div>
			<div className=" rounded-lg px-4 py-3 bg-gray-50">
				<p className="font-semibold text-green-500">New message</p>
				<p className="font-semibold text-xs text-green-500">
					Share your progress with your friends to invite them on shara
				</p>
			</div>

			<div className="rounded-lg px-4 py-3 bg-gray-50">
				<p className="font-semibold text-green-500">Alert</p>
				<p className="font-semibold text-xs text-green-500">
					Check your progress on shara
				</p>
			</div>
			<div className="rounded-lg px-4 py-3 bg-gray-50">
				<p className="font-semibold text-green-500">Credit</p>
				<p className="font-semibold text-xs text-green-500">
					You have reward for the 5kg waste you sold
				</p>
			</div>

			<div className="rounded-lg px-4 py-1 bg-gray-50 invisible">
				<p className="font-semibold text-sm text-green-500">
					Check your progress on shara
				</p>
			</div>
		</div>
	);
};

export default Notifications;
