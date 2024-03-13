/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchWeather } from '../hooks/axiosApis';
const Weather = ({ location }) => {
	const { data } = useQuery(['weather'], async () => fetchWeather(location));
	const [weather, setWeather] = useState(null);
	useEffect(() => {
		if (data) {
			setWeather(data?.current);
		}
	}, [data]);
	return (
		<div className="">
			<img
				src={weather?.condition?.icon}
				alt={weather?.condition?.text}
				className="h-6 w-6"
			/>
			<p className="text-lg font-semibold">
				{weather?.temp_c}
				<sup>&deg;C</sup>
			</p>
		</div>
	);
};

export default Weather;
