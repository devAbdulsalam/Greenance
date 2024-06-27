import React, { useState } from 'react';

import { faqData } from './../Data.js';

const FAQ = () => {
	const FAQItem = ({
		question,
		answer,
	}: {
		question: String;
		answer: string;
	}) => {
		const [isOpen, setIsOpen] = useState(false);

		return (
			<div className="border-b border-gray-200 py-4">
				<button
					className="w-full text-left focus:outline-none"
					onClick={() => setIsOpen(!isOpen)}
				>
					<div className="flex justify-between items-center">
						<span className="text-lg font-medium text-gray-900">
							{question}
						</span>
						<svg
							className={`w-6 h-6 transform transition-transform duration-300 ${
								isOpen ? 'rotate-180' : ''
							}`}
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M19 9l-7 7-7-7"
							></path>
						</svg>
					</div>
				</button>
				{isOpen && <div className="mt-2 text-gray-600">{answer}</div>}
			</div>
		);
	};
	return (
		<div
			id="faq"
			className="bg-gray-100 font-display p-6 py-20 relative isolate"
		>
			<div
				className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
				aria-hidden="true"
			>
				<div className="relative right-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#8088ff] to-[#05af3e] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem] clipPath"></div>
			</div>
			<div className="text-2xl font-semibold mb-6 text-center">
				<h2 className="text-3xl font-extrabold text-green-500">FAQ</h2>
				<p className="my-3 text-lg text-gray-500">
					Some frequently asked questions.
				</p>
			</div>
			<div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
				{faqData.map((item, index) => (
					<FAQItem key={index} question={item.question} answer={item.answer} />
				))}
			</div>
		</div>
	);
};

export default FAQ;
