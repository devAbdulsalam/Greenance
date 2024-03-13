import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
	const [sidebar, setSideBar] = useState(null);
	const [isSideBarFull, setIsSideBarfull] = useState(false);
	return (
		<div className="flex bg-gray-100 min-h-screen relative">
			<Sidebar
				sideBar={sidebar}
				setSideBar={setSideBar}
				isSideBarFull={isSideBarFull}
				setIsSideBarfull={setIsSideBarfull}
			/>
			<div
				className={`fixed top-0 left-0 w-full h-full z-40 bg-black/80 transition-all duration-500" ${
					sidebar && isSideBarFull
						? 'visible opacity-1'
						: '  invisible opacity-0 '
				}`}
				onClick={() => setIsSideBarfull(!sidebar)}
			>
				{' '}
			</div>
			<div
				className={`flex-grow ${
					isSideBarFull
						? 'lg:ml-[250px] xl:ml-[300px] w-[calc(100% - 300px)]'
						: 'lg:ml-[100px]'
				}`}
			>
				<Header setSideBar={setSideBar} />
				<Outlet />
			</div>
		</div>
	);
};

export default DashboardLayout;
