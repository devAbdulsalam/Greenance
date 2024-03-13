import Notification from './../components/Notifications';
const Notifications = () => {
	return (
		<main className="p-6 sm:p-10 space-y-6">
			<div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
				<div className="mr-6">
					<h1 className="text-xl font-semibold mb-2">Notifications</h1>
					<h2 className="text-gray-600 ml-0.5">Welcome to shara</h2>
				</div>
			</div>
			<Notification />
		</main>
	);
};

export default Notifications;
