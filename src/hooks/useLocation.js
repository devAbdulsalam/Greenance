import { useState } from 'react';
import {
	setKey,
	setLanguage,
	setRegion,
	setLocationType,
	fromAddress,
} from 'react-geocode';
export const useLocation = () => {
	setLocationType('ROOFTOP');
	setKey(import.meta.env.VITE_APP_GOOGLE_MAP_API_KEY);
	setLanguage('en');
	setRegion('es');
	const [data, setData] = useState(null);

	const getlocationCoordinates = (address) => {
		fromAddress(address).then(
			(response) => {
				const { lat, lng } = response.results[0].geometry.location;
				console.log(lat, lng);
				setData({ result: [lat, lng] });
				return data;
			},
			(error) => {
				console.error(
					'Geocode was not successful for the following reason:',
					error
				);
			}
		);
	};

	return { data, getlocationCoordinates };
};
