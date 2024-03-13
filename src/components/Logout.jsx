import { useNavigate } from 'react-router-dom';
import { LocalStorage } from '../hooks/LocalStorage'; /* eslint-disable react/prop-types */
import { useContext } from 'react';
import AuthContext from '../context/authContext';
import Swal from 'sweetalert2';
const Logout = ({ children }) => {
	const navigate = useNavigate();
	const { setUser } = useContext(AuthContext);
	const handleLogOut = () => {
		Swal.fire({
			title: 'Are you sure?',
			text: `You want to log out`,
			icon: 'question',
			showCancelButton: true,
			confirmButtonColor: '#d33',
			cancelButtonColor: '#3085d6',
			confirmButtonText: 'Yes, Logout!',
		}).then((result) => {
			if (result.isConfirmed) {
				LocalStorage.remove('user');
				LocalStorage.remove('token');
				setUser(null);
				navigate('/login');
			}
		});
	};
	return <div onClick={handleLogOut}>{children}</div>;
};

export default Logout;
