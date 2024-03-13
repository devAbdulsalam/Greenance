import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ProtectedRoutes from './hooks/ProtectedRoutes';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ChangePassword';
import NotFound from './NotFound';
import Layout from './Layout';
import Register from './pages/Register';
import DashboardLayout from './pages/DashboardLayout';
import Home from './pages/Home';

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/forget-password" element={<ForgetPassword />} />
				<Route path="/reset-password" element={<ResetPassword />} />
				<Route path="/" element={<Home />} />
				<Route element={<ProtectedRoutes />}>
					<Route exact path="/" element={<DashboardLayout />}>
						<Route path="/dashboard" element={<Home />} />
					</Route>
				</Route>
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
