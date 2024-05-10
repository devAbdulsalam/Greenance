import { useState } from 'react';
import Loader from '../components/Loader';
import LoginForm from '../components/LoginForm';
import LeftImage from '../components/LeftImage';
import SocialLogin from '../components/SocialLogin';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Login = () => {
	const [loading, setLoading] = useState(false);
	return (
		<>
			<section className="min-h-screen flex items-stretch text-green-600 relative">
				<LeftImage />
				<div className="lg:w-1/2 w-full flex items-center bg-no-repeat bg-white justify-center text-center md:px-16 px-0 z-0 relative">
					<div className="w-full py-6 z-10">
						<Link to='/' className="flex items-center justify-center w-full">
							<img className="w-32 bg-primary-light" src={Logo} alt="" />
						</Link>
						<SocialLogin />
						<LoginForm setLoading={setLoading} loading={loading} />
					</div>
				</div>
			</section>
			{loading ? <Loader /> : ''}
		</>
	);
};

export default Login;
