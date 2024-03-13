/* eslint-disable react/prop-types */
import Chart from 'react-apexcharts';
// import { useState, useEffect } from 'react';
// import { cleanData } from '../hooks/cleanData';
// import formatDateString from '../hooks/formatDateString';
const ApexChart = ({ data, type }) => {
	const labels = data?.labels?.map((item) => item);
	const datasets = data?.datasets;

	let series = datasets;
	var options = {
		chart: {
			width: '100%',
			height: 380,
			id: 'basic-bar',
		},
		xaxis: {
			categories: labels,
		},
		noData: {
			text: 'Loading...',
		},
	};
	return <Chart options={options} series={series} type={type} />;
};

export default ApexChart;
