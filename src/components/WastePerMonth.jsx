import LineChart from './LineChart';
import { chartData } from './../Data';
const WastePerMonth = () => {
	return (
		<div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
			<div className="px-6 py-5 font-semibold border-b border-gray-100">
				Loan per month
			</div>
			<div className="p-4 flex-grow">
				<div className="w-full chart">
					<LineChart data={chartData} />
				</div>
			</div>
		</div>
	);
};

export default WastePerMonth;
