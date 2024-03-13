const SocialLogin = () => {
	return (
		<div className="mb-4">
			<div className="py-6 space-x-2">
				<span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white bg-slate-200 hover:bg-primary hover:text-white duration-75 transition-all cursor-pointer ease-in-out">
					f
				</span>
				<span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white bg-slate-200 hover:bg-primary hover:text-white duration-75 transition-all cursor-pointer ease-in-out">
					G+
				</span>
				<span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white bg-slate-200 hover:bg-primary hover:text-white duration-75 transition-all cursor-pointer ease-in-out">
					in
				</span>
			</div>

			<p className="text-primary/60 text- hover:text-primary cursor-pointer duration-75 transition-all ease-in-out">
				or use email your account
			</p>
		</div>
	);
};

export default SocialLogin;
