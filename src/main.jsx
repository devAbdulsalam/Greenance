import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/authContext';
import { WalletContextProvider } from './context/walletContext';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			cacheTime: 2 * 60 * 1000,
		},
	},
});

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<AuthContextProvider>
					<WalletContextProvider>
						<Toaster />
						<App />
					</WalletContextProvider>
				</AuthContextProvider>
			</BrowserRouter>
		</QueryClientProvider>
	</React.StrictMode>
);
