/* eslint-disable react/prop-types */
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	LinearScale,
	CategoryScale,
	BarElement,
	PointElement,
	LineElement,Filler,
	Legend,
	Tooltip,
} from 'chart.js';
const LineChart = ({ data }) => {
	const options = {
		plugins: {
			legend: {
				labels: {
					usePointStyle: true,
				},
			},
		},
		scales: {
			y: {
				beginAtZero: true,
			},
		},
		tension: 0.3,
		fill: true,
		backgroundColor: [
			'rgba(62, 151, 255, 0.2)',
			'rgba(80, 205, 137, 0.2)',
			'rgba(255, 152, 0, 0.2)',
			'rgba(173, 216, 230, 0.2)',
			'rgba(255, 99, 71, 0.2)',
			'rgba(255, 215, 0, 0.2)',
			'rgba(0, 128, 0, 0.2)',
			'rgba(255, 69, 0, 0.2)',
			'rgba(147, 112, 219, 0.2)',
			'rgba(70, 130, 180, 0.2)',
			'rgba(255, 182, 193, 0.2)',
			'rgba(255, 222, 173, 0.2)',
			'rgba(0, 255, 0, 0.2)',
			'rgba(0, 0, 255, 0.2)',
			'rgba(255, 20, 147, 0.2)',
		],
		borderColors: [
			'rgba(62, 151, 255)',
			'rgb(80, 205, 137)',
			'rgb(255, 152, 0)',
			'rgb(173, 216, 230)',
			'rgb(255, 99, 71)',
			'rgb(255, 215, 0)',
			'rgb(0, 128, 0)',
			'rgb(255, 69, 0)',
			'rgb(147, 112, 219)',
			'rgb(70, 130, 180)',
			'rgb(255, 182, 193)',
			'rgb(255, 222, 173)',
			'rgb(0, 255, 0)',
			'rgb(0, 0, 255)',
			'rgb(255, 20, 147)',
		],
	};
	ChartJS.register(
		LinearScale,
		CategoryScale,
		BarElement,
		PointElement,
		LineElement,
		Filler,
		Legend,
		Tooltip
	);

	return <Line data={data} options={options} />;
};

export default LineChart;
