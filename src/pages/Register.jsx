import { useState } from 'react';
import Loader from '../components/Loader';
import RegisterForm from '../components/RegisterForm';
import LeftImage from '../components/LeftImage';
import SocialLogin from '../components/SocialLogin';
import Logo from '../assets/logo.png';

const Register = () => {
	const [loading, setLoading] = useState(false);
	return (
		<>
			<section className="min-h-screen flex items-stretch text-green-600 relative">
				<LeftImage />
				<div className="lg:w-1/2 w-full flex items-center bg-no-repeat bg-white justify-center text-center md:px-16 px-0 z-0 relative">
					<div className="w-full py-6 z-10">
						<div className="flex items-center justify-center w-full">
							<img className="w-32" src={Logo} alt="" />
						</div>
						<SocialLogin />
						<RegisterForm setLoading={setLoading} />
					</div>
				</div>
			</section>
			{loading ? <Loader /> : ''}
		</>
	);
};
export default Register;
