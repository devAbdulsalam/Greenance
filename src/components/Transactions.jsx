/* eslint-disable react/prop-types */
import DebitTransaction from './DebitTransaction';
import CreditTransaction from './CreditTransaction';

const Transactions = ({ transactions }) => {
	return (
		<div className="space-y-5 text-sm md:text-lg">
			<p className="font-semibold pt-5 text-xl">Transaction History</p>
			{transactions?.length > 0 ? (
				transactions?.map((transaction, index) => {
					const { _id } = transaction;
					if (transaction.debit) {
						return (
							<DebitTransaction key={_id || index} transaction={transaction} />
						);
					} else {
						return (
							<CreditTransaction key={_id || index} transaction={transaction} />
						);
					}
				})
			) : (
				<>
					<div className="bg-white rounded-lg px-2 md:px-4 py-2 md:py-4">
						<div className="flex justify-between items-center">
							<p className="font-semibold  text-red-500">-1,000.00</p>
							<p className="font-semibold text-green-500">Successful</p>
						</div>
						<div className="flex justify-between items-center">
							<p className="font-semibold ">Send to Musa Mik...</p>
							<p className="font-semibold">08:06, Jan 03</p>
						</div>
					</div>
					<div className="bg-white rounded-lg px-2 md:px-4 py-2 md:py-4">
						<div className="flex justify-between items-center">
							<p className="font-semibold  text-green-500 p-1">+1,200.00</p>
							<p className="font-semibold text-green-500">Successful</p>
						</div>
						<div className="flex justify-between items-center">
							<p className="font-semibold ">Receive from John Abr...</p>
							<p className="font-semibold">08:06, Dec 17</p>
						</div>
					</div>
					<div className="bg-white rounded-lg px-2 md:px-4 py-2 md:py-4">
						<div className="flex justify-between items-center">
							<p className="font-semibold  text-green-500 p-1">+2,000.00</p>
							<p className="font-semibold text-green-500">Successful</p>
						</div>
						<div className="flex justify-between items-center">
							<p className="font-semibold ">Receive from Musa Mik...</p>
							<p className="font-semibold">08:06, Nov 21</p>
						</div>
					</div>
					<div className="bg-white rounded-lg px-2 md:px-4 py-2 md:py-4">
						<div className="flex justify-between items-center">
							<p className="font-semibold  text-green-500 p-1">+2,000.00</p>
							<p className="font-semibold text-green-500">Successful</p>
						</div>
						<div className="flex justify-between items-center">
							<p className="font-semibold ">Receive from Musa Mik...</p>
							<p className="font-semibold">08:06, Nov 21</p>
						</div>
					</div>
					<div className="bg-white rounded-lg px-2 md:px-4 py-2 md:py-4">
						<div className="flex justify-between items-center">
							<p className="font-semibold  text-red-500">-3,000.00</p>
							<p className="font-semibold text-green-500">Successful</p>
						</div>
						<div className="flex justify-between items-center">
							<p className="font-semibold ">Send to Musa Mik...</p>
							<p className="font-semibold">08:06, Nov 02</p>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Transactions;
