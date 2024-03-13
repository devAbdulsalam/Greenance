import ApexChart from './ApexChart';
import {chartData} from './../Data';

const Chart = () => {
	
	return (
		<div className="flex flex-col row-span-3 bg-white shadow rounded-lg">
			<div className="px-6 py-5 font-semibold border-b border-gray-100">
				Waste by type
			</div>
			<div className="p-4 flex-grow h-[252px] chart">
				<ApexChart data={chartData} type="line" />
			</div>
		</div>
	);
};

export default Chart;
