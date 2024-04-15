import { useEffect, useState } from 'react';
import { RiArrowUpLine } from 'react-icons/ri';

export default function ScrollUp() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const toggleVisible = () => {
			console.log('scroll', 'isVisible');
			window.scrollY >= 600 ? setVisible(true) : setVisible(false);
		};
		window.addEventListener('scroll', toggleVisible);

		return () => {
			window.removeEventListener('scroll', toggleVisible);
		};
	}, [window]);

	const scrollToTop = () => {
		window.scrollTo({
			top: '0',
			behavior: 'smooth',
		});
	};

	return (
		<div
			className={`debug fixed z-50 right-6 inline-flex cursor-pointer items-center justify-center rounded-lg scrollup bg-primary hover:bg-secondary  p-3 text-[1.3rem] text-white transition-all duration-300 xl:right-16 ${
				visible ? 'bottom-16' : '-bottom-full'
			}`}
			onClick={scrollToTop}
		>
			<RiArrowUpLine />
		</div>
		// <div onClick={scrollToTop}>
		// 	<div
		// 		title="scrollup"
		// 		className="fixed bottom-5 sm:right-8 right-4 z-40 cursor-pointer text-white text-4xl bg-primary hover:bg-primary/80  w-16 h-16 flex transition-all items-center justify-center rounded-full animate-bounce"
		// 	>
		// 		<RiArrowUpLine />
		// 	</div>
		</div>
	);
}
