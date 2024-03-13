/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Modal } from './Framer-Modal';
const Banks = ({ banks, setBank, onClose }) => {
	const [input, setInput] = useState('');
	const [filterBanks, setFilteredBanks] = useState(banks);
	const handleFilterbanks = (e) => {
		setInput(() => e.target.value);
		const result = banks?.filter((bank) =>
			bank.name.toLowerCase().includes(e.target.value)
		);
		setFilteredBanks(result);
	};
	const handleSelectbank = (bnk) => {
		setBank(() => bnk);
		onClose();
	};
	return (
		<Modal onClose={onClose}>
			<div className="flex flex-col h-full pt-3 z-50">
				<div className="px-3 pb-4 shadow-sm">
					<div className="relative mt-5 text-center">
						<span className="font-medium text-primary">Select Bank</span>
						<div className="absolute inset-y-0 right-0">
							<button
								className="mr-1 text-blue-500 focus:outline-none"
								onClick={onClose}
							>
								Cancel
							</button>
						</div>
					</div>
				</div>

				<div className="flex-1 overflow-y-scroll">
					<label htmlFor="banks" className="text-xs text-left">
						Search banks by Name
					</label>
					<input
						type="text"
						value={input}
						id="banks"
						placeholder="Type to search..."
						className="w-full px-3 my-2 py-2 text-lg inline-block font-normal text-gray-500 bg-clip-padding border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-300 focus:border-gray-600 focus:outline-none"
						onChange={handleFilterbanks}
					/>
					<div className="divide-y text-left">
						{filterBanks?.map((bnk) => {
							return (
								<div
									key={bnk.id}
									value={bnk.id}
									onClick={() => handleSelectbank(bnk)}
									className="w-full px-3 py-2 text-lg inline-block font-normal text-gray-500 bg-clip-padding transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-300 focus:border-gray-600 focus:outline-none"
								>
									{bnk.name}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default Banks;
