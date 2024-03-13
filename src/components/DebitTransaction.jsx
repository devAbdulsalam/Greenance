import moment from 'moment';

/* eslint-disable react/prop-types */
const DebitTransaction = ({ transaction, index }) => {
	const { _id, amount, createdAt } = transaction;
	return (
		<div
			key={_id || index}
			className="bg-white rounded-lg px-2 md:px-4 py-2 md:py-4"
		>
			<div className="flex justify-between items-center">
				<p className="font-semibold  text-red-500">&#8358;{amount}</p>
				<p className="font-semibold text-green-500">Successful</p>
			</div>
			<div className="flex justify-between items-center">
				<p className="font-semibold overflow-hidden overflow-ellipsis max-w-full">
					{transaction.narration}
				</p>
				<p className="font-semibold">
					{moment(createdAt).format('MMMM Do YYYY')}
				</p>
			</div>
		</div>
	);
};

export default DebitTransaction;
