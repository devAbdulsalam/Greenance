import { useContext } from 'react';
import AuthContext from '../context/authContext';
import { FaWallet } from 'react-icons/fa';
import { FaCopy } from 'react-icons/fa6';
import { BiCard, BiMessage } from 'react-icons/bi';
import { BsQrCode } from 'react-icons/bs';
const Receive = () => {
	const { user } = useContext(AuthContext);
	const wallet = user?.wallet;
	return (
		<div className="p-1 mt-8 mx-2 py-10">
			<div className="bg-white rounded-lg  p-4 space-y-5 shadow-lg">
				<div className="p-2 flex space-x-2 items-center">
					<div className="text-green-500">
						<FaWallet className="text-lg" />
					</div>
					<div>
						<h5 className="font-semibold text-lg">Bank Transfer</h5>
						<p>Free Instant bank funding</p>
					</div>
				</div>
				<div className="p-2">
					<p>Wallet Account Number</p>
					<div className="flex items-center cursor-pointer">
						<h3 className="font-semibold text-2xl mr-1">{wallet.phone}</h3>
						<FaCopy className="text-lg" />
					</div>
				</div>
			</div>
			<h5 className="p-2 my-2 font-semibold text-lg">Other Fund Methods</h5>
			<div className="grid grid-cols-2 gap-x-3 gap-y-4">
				<a href="./wallet">
					<div className="bg-white rounded-lg p-4 space-y-2 shadow-sm">
						<div className="text-green-500">
							<BiCard className="text-lg" />
							{/* <ion-icon name="card-outline" size="large"></ion-icon> */}
						</div>
						<h5 className="font-semibold text-lg text-green-400">Bank Card</h5>
						<p className="">Fund with your bound back Card</p>
					</div>
				</a>
				<a href="./wallet">
					<div className="bg-white rounded-lg p-4 space-y-2 shadow-sm">
						<div className="text-green-500">
							{/* <ion-icon name="card" size="large"></ion-icon> */}
							<BiCard className="text-lg" />
						</div>
						<h5 className="font-semibold text-lg text-green-400">USSD</h5>
						<p className="">Use your other bank USSD code</p>
					</div>
				</a>
				<a href="./wallet">
					<div className="bg-white rounded-lg  p-4 space-y-2 shadow-sm">
						<div className="text-blue-500 shadow-lg">
							<BiCard className="text-lg text-green-400" />
						</div>
						<h5 className="font-semibold text-lg text-green-400">
							Bank Account
						</h5>
						<p className="">Fund with your bound back account</p>
					</div>
				</a>
				<a href="./wallet">
					<div className="bg-white rounded-lg  p-4 space-y-2 shadow-sm">
						<div className="text-green-500">
							<BiMessage className="text-lg" />
						</div>
						<h5 className="font-semibold text-lg text-green-400">
							Request money
						</h5>
						<p className="">Send a request to any Shara user</p>
					</div>
				</a>
				<a href="./wallet">
					<div className="bg-white rounded-lg  p-4 shadow-sm">
						<div className="text-green-500">
							{/* <ion-icon name="qr-code" size="large"></ion-icon> */}
							<BsQrCode className="text-lg" />
						</div>
						<h5 className="font-semibold text-lg text-green-400">My QR Code</h5>
						<p className="">Show QR code to any Shara user</p>
					</div>
				</a>
			</div>
		</div>
	);
};

export default Receive;
