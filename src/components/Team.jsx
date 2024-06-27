/* eslint-disable react/prop-types */
const Team = ({ name, role, image, text, link }) => {
	return (
		<div className="group relative cursor-pointer md:my-10 overflow-hidden bg-white px-6 my-3 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
			<span className="absolute top-10 right-32 z-10 group-hover:z-40 group-hover:text-white h-20 w-20 rounded-full bg-primary group-hover:bg-green-500 transition-all duration-500 group-hover:scale-[10]"></span>
			<div className="w-full h-full  z-50 hidden group-hover:flex justify-center items-center group-hover:absolute top-0 right-0   group-hover:text-white border-gray">
				<div>
					<p className="text text-sm p-5 group-hover:text-white">
						&quot;{text}&quot;{' '}
					</p>
					<p className="">
						<a
							href={link || '#'}
							target="blank"
							className=" mt-2 text-xl font-bold text-center block group-hover:text-white"
						>
							{name}
						</a>
					</p>
				</div>
			</div>
			<div className="relative z-10 mx-auto max-w-md flex flex-col place-items-center">
				<div className="relative">
					<div className="absolute -inset-2 mx-auto">
						<div className="w-28 h-full max-w-sm mx-auto lg:mx-0 opacity-70 blur-lg bg-gradient-to-r from-primary via-danger to-success"></div>
					</div>
					<img
						src={image}
						alt={name}
						className="relative object-cover shrink-0 h-28 w-28 z-10 rounded-xl"
					/>
				</div>
				<div className="border-t pt-2 mt-2 border-gray text-center w-full">
					<a
						href={link || '#'}
						target="blank"
						className=" mt-2 text-lg font-bold"
					>
						{name}
					</a>
					<h3 className="head2 my-3 text-primary group-hover:text-white">
						{role}
					</h3>
				</div>
			</div>
		</div>
	);
};
export default Team;
