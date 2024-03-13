import { Link } from 'react-router-dom';
import { teams } from '../Data';
import Team from './Team';
// Import Swiper styles
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/element/css/autoplay';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
register();

const Teams = () => {
	const [isMobile, setIsMobile] = useState(false);

	const handleResize = () => {
		const screenWidth = window.innerWidth;
		setIsMobile(screenWidth <= 768); // Set a threshold for mobile screen size (e.g., 768 pixels)
		// setIsMobile(screenWidth <= 1024); // Set a threshold for tablet screen size (e.g., 1024 pixels)
	};

	useEffect(() => {
		// Initial check on component mount
		handleResize();
		// Add event listener to check on window resize
		window.addEventListener('resize', handleResize);
		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<section id="team">
			<div className="container mx-auto">
				<div className="text-center">
					<motion.h2
						initial={{ opacity: 0, y: 50 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { delay: 0.4, duration: 0.5 },
						}}
						viewport={{ once: false, amount: 0.5 }}
						className="text-2xl text-center py-10 font-bold"
					>
						Our Team
					</motion.h2>
					<p className="text-lg">
						Meet our relentless team with a combined experience of over a
						decade.
					</p>
				</div>
				{isMobile ? (
					<div className="px-4">
						{teams.map((team, index) => {
							return (
								<Team
									key={index}
									name={team.name}
									text={team.text}
									image={team.image}
									role={team.role}
									link={team.link}
								/>
							);
						})}
					</div>
				) : (
					<swiper-container
						pagination="true"
						pagination-clickable="true"
						space-between="10"
						navigation="true"
						autoplay-delay="2500"
						autoplay-disable-on-interaction="false"
						slides-per-view={isMobile ? '1' : '3'}
						speed="500"
						loop="true"
						css-mode="true"
						mousewheel-force-to-axis="true"
					>
						{teams.map((team, index) => {
							return (
								<swiper-slide key={index}>
									<Team
										name={team.name}
										text={team.text}
										image={team.image}
										role={team.role}
										link={team.link}
									/>
								</swiper-slide>
							);
						})}
					</swiper-container>
				)}
			</div>
		</section>
	);
};

export default Teams;
