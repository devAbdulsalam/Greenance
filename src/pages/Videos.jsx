import YouTubeVideo from '../components/YouTubeVideo';
const Videos = () => {
	const videos = [
		'dExkFJ6bwTg',
		'g9l6JrnZ-QA',
		'Qyu-fZ8BOnI',
		'yukvSfTxrh8',
		'7fVUyVuyP6I',
		'7SCBdcXg2fs',
		'zq7ec6Mo530',
		'HgEo7YnvJs0',
		'mGMbNcDYczY',
		'1didKnCCfHE',
		'ffeAHsbLFao',
		'YCDxdo6zITI',
		'K6ppCC3lboU',
		'wOJVJz2QkGM',
		'rZgqPfC0RKc',
		'8krzjlHaGes',
		'9YPl_uuV4S8',
	];

	return (
		<main className="p-6 sm:p-10 space-y-4">
			<div className="flex flex-col md:flex-row justify-between">
				<div className="mr-6">
					<h1 className="text-xl font-semibold mb-2">Videos</h1>
					<h2 className="text-gray-600 ml-0.5">Do you knows</h2>
				</div>
			</div>
			<section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
				{videos.map((item, index) => {
					return (
						<div key={index}>
							<YouTubeVideo videoId={item} />
						</div>
					);
				})}
			</section>
		</main>
	);
};

export default Videos;
