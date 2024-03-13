/* eslint-disable react/prop-types */
// import imageIcon from './../assets/img/icons/Accounts.png';
import Modal from './Modal';
const LocationModal = ({
	show,
	setShow,
	address,
	setAddress,
	isLoading,
	handleSubmit,
}) => {
	return (
		<Modal show={show}>
			<div className="transform overflow-hidden rounded-2xl w-full md:w-[600px] bg-white text-left align-middle shadow-xl transition-all font-josefin">
				<div className="space-y-5 p-4">
					<div className="flex justify-between">
						<div>
							<p className="font-semibold text-lg text-primary">
								Select Location
							</p>
						</div>
						<button
							onClick={() => setShow(false)}
							className="m-1 p-2 py-1 shadow rounded-full hover:bg-red-300 duration-150 ease-in-out"
						>
							<i className="fa-solid fa-xmark text-xl text-red-300 hover:text-red-500" />
						</button>
					</div>
					<form
						className="w-full flex flex-col py-4  px-2 z-10 bg-white"
						onSubmit={handleSubmit}
					>
						<div className="mt-2">
							<div className="flex justify-between">
								<label htmlFor="location" className="text-lg font-semibold">
									Enter your Location:
								</label>
							</div>
							<input
								value={address}
								onChange={(e) => setAddress(e.target.value)}
								className="px-3 my-2 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
								type="text"
								placeholder="Nasarawa, Kano State, Nigeria"
								id="location"
								autoComplete="location"
							/>
						</div>
						<button
							type="submit"
							className="bg-[#228e01] w-full text-white py-3 my-2 rounded font-bold"
							disabled={isLoading}
						>
							{!isLoading ? 'Enter Your Location' : 'Checking location ...'}
						</button>
					</form>
				</div>
			</div>
		</Modal>
	);
};

export default LocationModal;
