import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;
export const fetchUser = async (user) => {
	try {
		const { data } = await axios.post(`${apiUrl}/users/${user.id}`, user);
		return data;
	} catch (error) {
		console.log(error.message);
		return error;
	}
};
export const fetchUsers = async (user) => {
	try {
		const config = {
			headers: {
				Authorization: `Bearer ${user?.token}`,
			},
		};
		const { data } = await axios.get(`${apiUrl}/users`, config);
		return data;
	} catch (error) {
		console.log(error.message);
		return error;
	}
};
export const fetchAccount = async (user) => {
	try {
		const config = {
			headers: {
				Authorization: `Bearer ${user?.token}`,
			},
		};
		const { data } = await axios.get(`${apiUrl}/accounts`, config);
		return data;
	} catch (error) {
		console.log(error.message);
		return error;
	}
};
export const fetchDashboard = async (user) => {
	try {
		const config = {
			headers: {
				Authorization: `Bearer ${user?.token}`,
			},
		};
		const { data } = await axios.get(`${apiUrl}/dashboard/${user.id}`, config);
		return data;
	} catch (error) {
		console.log(error.message);
		return error;
	}
};
export const fetchChart = async (user) => {
	try {
		const config = {
			headers: {
				Authorization: `Bearer ${user?.token}`,
			},
		};
		const { data } = await axios.get(
			`${apiUrl}/dashboard/${user.id}/chart`,
			config
		);
		return data;
	} catch (error) {
		console.log(error.message);
		return error;
	}
};
export const fetchWallet = async (user) => {
	try {
		const config = {
			headers: {
				Authorization: `Bearer ${user?.token}`,
			},
		};
		const { data } = await axios.get(`${apiUrl}/wallet/${user.id}`, config);
		return data;
	} catch (error) {
		console.log(error.message);
		return error;
	}
};
export const fetchAddress = async (user) => {
	try {
		const config = {
			headers: {
				Authorization: `Bearer ${user?.token}`,
			},
		};
		const { data } = await axios.get(`${apiUrl}/address`, config);
		return data;
	} catch (error) {
		console.log(error.message);
		return error;
	}
};
export const fetchTransactions = async (user) => {
	try {
		const config = {
			headers: {
				Authorization: `Bearer ${user?.token}`,
			},
		};
		const { data } = await axios.get(
			`${apiUrl}/transactions/${user._id}`,
			config
		);
		return data;
	} catch (error) {
		console.log(error.message);
		return error;
	}
};
export const fetchWeather = async (location) => {
	try {
		const Key = import.meta.env.VITE_APP_WEATHER_API_KEY;
		const { data } = await axios.get(
			`https://api.weatherapi.com/v1/current.json?key=${Key}&q=${location}&aqi=no`
		);
		return data;
	} catch (error) {
		console.log(error.message);
		return error;
	}
};
export const fetchBanks = async (user) => {
	try {
		const config = {
			headers: {
				Authorization: `Bearer ${user?.token}`,
			},
		};
		const { data } = await axios.get(`${apiUrl}/accounts/banks`, config);
		return data.data;
	} catch (error) {
		console.log(error.message);
		return error;
	}
};
