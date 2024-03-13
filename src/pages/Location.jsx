import { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/authContext';
import { locations } from '../Data';
import MapComponent from '../components/MapContainer';
import LocationForm from '../components/LocationForm';
import { useLocation } from '../hooks/useLocation';
import { fetchAddress } from '../hooks/axiosApis';
import LocationModal from './../components/LocationModal';
import toast from 'react-hot-toast';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import Loader from '../components/Loader';
import getError, { showLocationError } from '../hooks/getError';
import Swal from 'sweetalert2';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
const Location = () => {
	const [address, setAddress] = useState('');
	const [coordinates, setCoordinates] = useState('');
	const [enterLocation, setEnterLocation] = useState(false);
	const { user } = useContext(AuthContext);
	const title = user.user?.name;
	const phone = user.user?.phone;
	const { getlocationCoordinates } = useLocation();
	const [loading, setLoading] = useState(false);
	const [isLocationModal, setLocationModal] = useState(true);
	// const navigate = useNavigate();
	const prop = { token: user?.token, id: user.user._id };
	let { data, isLoading, error } = useQuery(['address'], async () =>
		fetchAddress(prop)
	);
	useEffect(() => {
		if (data) {
			console.log(data);
		}
		if (error) {
			console.log(error);
			toast.error(error?.message);
		}
	}, [data, error]);
	const apiUrl = import.meta.env.VITE_API_URL;
	const queryClient = useQueryClient();
	const config = {
		headers: {
			Authorization: `Bearer ${user?.token}`,
		},
	};
	const showPosition = async (position) => {
		const { latitude, longitude } = position.coords;
		try {
			const response = await fetch(
				`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
			);
			const address = await response.json();

			const data = {
				latitude,
				longitude,
				userId: user.user._id,
				address: address.display_name,
			};

			const res = await axios.post(`${apiUrl}/address`, data, config);
			if (res.data) {
				Swal.fire({
					title: 'Success',
					text: 'Location saved successfully',
					icon: 'success',
				});
				queryClient.invalidateQueries(['address']);
			}
		} catch (error) {
			console.error(error);
			const message = getError(error);
			Swal.fire({
				title: 'Error!',
				text: message,
				icon: 'error',
			});
			toast.error(message);
		} finally {
			setLoading(false);
		}
	};

	const handleGetAddress = async () => {
		setLocationModal(false);
		setLoading(true);
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition, (error) => {
				const message = showLocationError(error);
				toast.error(message);
			});
		} else {
			setLoading(true);
			Swal.fire({
				title: 'Error!',
				text: 'Geolocation is not supported by this browser.',
				icon: 'error',
			});
		}
	};
	const handleEnterAddress = () => {
		setEnterLocation(true);
		setLocationModal(false);
	};

	// 'No 2, Ahmadu Bello Way, Nassarawa, Kano Nigeria';
	useEffect(() => {
		const savedLocation = localStorage.getItem('address');
		if (savedLocation) {
			setEnterLocation(false);
			const data = getlocationCoordinates(savedLocation);
			if (data.result) {
				setCoordinates(data.result);
			}
		}
	}, [getlocationCoordinates]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (address !== '') {
			setLoading(true);
			const data = getlocationCoordinates(address);
			if (data) {
				const { lat, lng } = data;
				console.log(data);
				setCoordinates({ lat, lng, address, phone, title });
				setEnterLocation(false);
				setLoading(false);
			} else {
				setLoading(false);
				console.error(
					'Geocode was not successful for the following reason:'
					// error
				);
			}
		}
	};
	return (
		<>
			<div className="mt-4 py-4 h-screen relative w-full">
				<h3 className="text-center text-xl md:text-2xl font-semibold z-20 relative w-8/12 mx-auto text-green-500">
					Find Waste Collector
				</h3>
				<div className="w-full h-fit pt-6 fixed top-6 bottom-0">
					<MapComponent
						locations={locations}
						userCoordinates={coordinates}
						setEnterLocation={setEnterLocation}
					/>
				</div>
			</div>
			<LocationForm
				show={enterLocation}
				setShow={setEnterLocation}
				handleSubmit={handleSubmit}
				setAddress={setAddress}
				address={address}
			/>
			<LocationModal
				show={isLocationModal}
				setShow={setLocationModal}
				handleGetAddress={handleGetAddress}
				handleEnterAddress={handleEnterAddress}
			/>
			{isLoading || loading ? <Loader /> : ''}
		</>
	);
};

export default Location;
