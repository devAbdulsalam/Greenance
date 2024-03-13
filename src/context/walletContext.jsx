/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
export const WalletContextProvider = ({ children }) => {
	const [wallet, setWallet] = useState(null);
	const [selectedAccount, setSelectedAccount] = useState(null);
	return (
		<WalletContext.Provider
			value={{
				wallet,
				setWallet,
				selectedAccount,
				setSelectedAccount,
			}}
		>
			{children}
		</WalletContext.Provider>
	);
};
const WalletContext = createContext();

export default WalletContext;
