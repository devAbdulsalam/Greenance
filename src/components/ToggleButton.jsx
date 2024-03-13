/* eslint-disable react/prop-types */
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa6';
const ToggleButton = ({ handleSideBar, sideBar }) => {
	return (
		<button
			type="button"
			className="absolute -right-3 text-2xl text-white rounded-full p-2 bg-green-200 hover:bg-green-300"
			onClick={handleSideBar}
		>
			{sideBar ? <FaChevronLeft /> : <FaChevronRight />}
		</button>
	);
};

export default ToggleButton;
