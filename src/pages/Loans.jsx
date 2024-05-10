import { useState } from 'react';
import { Link } from 'react-router-dom';
import { loans } from '../Data';
import '../main.css';
const Loans = () => {
	const [search, setSearch] = useState();
	return (
		<>
			<div className="body-content px-8 py-8 bg-slate-100">
				<div className="flex justify-between mb-10">
					<div className="page-title">
						<h3 className="mb-0 text-[28px] text-primary-light">Loans</h3>
						<ul className="text-tiny font-medium flex items-center space-x-3 text-text3">
							<li className="breadcrumb-item text-muted">
								<Link to={'/'} className="text-hover-primary">
									{' '}
									Home
								</Link>
							</li>
							<li className="breadcrumb-item flex items-center">
								<span className="inline-block bg-text3/60 w-[4px] h-[4px] rounded-full"></span>
							</li>
						</ul>
					</div>
				</div>

				{/* <!-- table --> */}
				<div className="bg-white rounded-t-md rounded-b-md shadow-xs py-4">
					<div className="tp-search-box flex items-center justify-between px-8 py-8">
						<div className="search-input relative">
							<input
								className="input h-[44px] w-full pl-14"
								type="text"
								placeholder="Search by Name or Amount"
								value={search}
								onChange={(e) => setSearch(e.target.value)}
							/>
							<button className="absolute top-1/2 left-5 translate-y-[-50%] hover:text-theme">
								<svg
									width="16"
									height="16"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
									<path
										d="M18.9999 19L14.6499 14.65"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
								</svg>
							</button>
						</div>
						<div className="flex justify-end space-x-6">
							<div className="search-select mr-3 flex items-center space-x-3 ">
								<span className="text-tiny inline-block leading-none -translate-y-[2px]">
									Status :{' '}
								</span>
								<select>
									<option>All</option>
									<option>Loan</option>
									<option>Grant</option>
								</select>
							</div>
							<div className="product-add-btn flex ">
								<a
									href="#"
									className="tp-btn bg-info/10 text-info hover:text-white hover:bg-theme"
								>
									{' '}
									<span className="mr-2">
										<svg
											width="15"
											height="15"
											xmlns="http://www.w3.org/2000/svg"
											x="0px"
											y="0px"
											viewBox="0 0 512.056 512.056"
										>
											<path
												fill="currentColor"
												d="M426.635,188.224C402.969,93.946,307.358,36.704,213.08,60.37C139.404,78.865,85.907,142.542,80.395,218.303 C28.082,226.93-7.333,276.331,1.294,328.644c7.669,46.507,47.967,80.566,95.101,80.379h80v-32h-80c-35.346,0-64-28.654-64-64 c0-35.346,28.654-64,64-64c8.837,0,16-7.163,16-16c-0.08-79.529,64.327-144.065,143.856-144.144 c68.844-0.069,128.107,48.601,141.424,116.144c1.315,6.744,6.788,11.896,13.6,12.8c43.742,6.229,74.151,46.738,67.923,90.479 c-5.593,39.278-39.129,68.523-78.803,68.721h-64v32h64c61.856-0.187,111.848-50.483,111.66-112.339 C511.899,245.194,476.655,200.443,426.635,188.224z"
											/>
											<path
												fill="currentColor"
												d="M245.035,253.664l-64,64l22.56,22.56l36.8-36.64v153.44h32v-153.44l36.64,36.64l22.56-22.56l-64-64 C261.354,247.46,251.276,247.46,245.035,253.664z"
											/>
										</svg>
									</span>
									Export
								</a>
							</div>
						</div>
					</div>
					<div className="relative overflow-x-auto  mx-8">
						<table className="w-full text-base text-left text-gray-500">
							<thead className="bg-white">
								<tr className="border-b border-gray6 text-tiny">
									<th
										scope="col"
										className=" py-3 text-tiny text-text2 uppercase font-semibold w-[3%]"
									>
										<div className="tp-checkbox -translate-y-[3px]">
											<input id="selectAllProduct" type="checkbox" />
											<label htmlFor="selectAllProduct"></label>
										</div>
									</th>
									<th
										scope="col"
										className="pr-8 py-3 text-tiny text-text2 uppercase font-semibold w-[12%]"
									>
										ID
									</th>
									<th
										scope="col"
										className="px-3 py-3 text-tiny text-text2 uppercase font-semibold"
									>
										Name
									</th>
									<th
										scope="col"
										className="px-3 py-3 text-tiny text-text2 uppercase font-semibold text-end"
									>
										Amount
									</th>
									<th
										scope="col"
										className="px-3 py-3 text-tiny text-text2 uppercase font-semibold text-end"
									>
										Status
									</th>
								</tr>
							</thead>
							<tbody>
								{loans?.length > 0 &&
									loans?.map((item) => {
										return (
											<tr
												key={item.id}
												className="bg-white border-b border-gray6 last:border-0 text-start mx-9"
											>
												<td className="pr-3  whitespace-nowrap">
													<div className="tp-checkbox">
														<input id="product-1" type="checkbox" />
														<label htmlFor="product-1"></label>
													</div>
												</td>
												<td className="px-3 py-3 font-normal text-[#55585B]">
													#{item?.id}
												</td>
												<td className="pr-8 py-5 whitespace-nowrap">
													<Link to={`/loans/${item.id}`}>
														<div className="flex items-center space-x-5 text-heading">
															<img
																className="w-[40px] h-[40px] rounded-md"
																src={`https://ui-avatars.com/api/?name=${item.name}`}
																alt={item.name}
															/>
															<span className="font-medium ">{item.name}</span>
														</div>
													</Link>
												</td>

												<td className="px-3 py-3 text-end">
													{item.grantAmount || item.loanAmount}
												</td>
												<td className="px-3 py-3 text-end">
													<span className="text-[11px]  text-success px-3 py-1 rounded-md leading-none bg-success/10 font-medium text-end">
														{item.status}
													</span>
												</td>
											</tr>
										);
									})}
							</tbody>
						</table>
					</div>
					<div className="flex justify-between items-center flex-wrap mx-8">
						<p className="mb-0 text-tiny">Showing 10 Prdouct of 20</p>
						<div className="pagination py-3 flex justify-end items-center  mx-8">
							<a
								href="#"
								className="inline-block rounded-md w-10 h-10 text-center leading-[33px] border border-gray mr-2 last:mr-0 hover:bg-theme hover:text-white hover:border-theme"
							>
								<svg
									className="-translate-y-[2px] -translate-x-px"
									width="12"
									height="12"
									viewBox="0 0 12 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M11.9209 1.50495C11.9206 1.90264 11.7623 2.28392 11.4809 2.56495L3.80895 10.237C3.57673 10.4691 3.39252 10.7447 3.26684 11.0481C3.14117 11.3515 3.07648 11.6766 3.07648 12.005C3.07648 12.3333 3.14117 12.6585 3.26684 12.9618C3.39252 13.2652 3.57673 13.5408 3.80895 13.773L11.4709 21.435C11.7442 21.7179 11.8954 22.0968 11.892 22.4901C11.8885 22.8834 11.7308 23.2596 11.4527 23.5377C11.1746 23.8158 10.7983 23.9735 10.405 23.977C10.0118 23.9804 9.63285 23.8292 9.34995 23.556L1.68795 15.9C0.657711 14.8677 0.0791016 13.4689 0.0791016 12.0105C0.0791016 10.552 0.657711 9.15322 1.68795 8.12095L9.35995 0.443953C9.56973 0.234037 9.83706 0.0910666 10.1281 0.0331324C10.4192 -0.0248017 10.7209 0.00490445 10.9951 0.118492C11.2692 0.232079 11.5036 0.424443 11.6684 0.671242C11.8332 0.918041 11.9211 1.20818 11.9209 1.50495Z"
										fill="currentColor"
									/>
								</svg>
							</a>
							<a
								href="#"
								className="inline-block rounded-md w-10 h-10 text-center leading-[33px] border border-gray mr-2 last:mr-0 hover:bg-theme hover:text-white hover:border-theme"
							>
								2
							</a>
							<a
								href="#"
								className="inline-block rounded-md w-10 h-10 text-center leading-[33px] border mr-2 last:mr-0 text-white bg-theme border-theme hover:bg-theme hover:text-white hover:border-theme"
							>
								3
							</a>
							<a
								href="#"
								className="inline-block rounded-md w-10 h-10 text-center leading-[33px] border border-gray mr-2 last:mr-0 hover:bg-theme hover:text-white hover:border-theme"
							>
								4
							</a>
							<a
								href="#"
								className="inline-block rounded-md w-10 h-10 text-center leading-[33px] border border-gray mr-2 last:mr-0 hover:bg-theme hover:text-white hover:border-theme"
							>
								<svg
									className="-translate-y-px"
									width="12"
									height="12"
									viewBox="0 0 12 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M0.0790405 22.5C0.0793906 22.1023 0.237656 21.7211 0.519041 21.44L8.19104 13.768C8.42326 13.5359 8.60747 13.2602 8.73314 12.9569C8.85882 12.6535 8.92351 12.3284 8.92351 12C8.92351 11.6717 8.85882 11.3465 8.73314 11.0432C8.60747 10.7398 8.42326 10.4642 8.19104 10.232L0.52904 2.56502C0.255803 2.28211 0.104612 1.90321 0.108029 1.50992C0.111447 1.11662 0.269201 0.740401 0.547313 0.462289C0.825425 0.184177 1.20164 0.0264236 1.59494 0.0230059C1.98823 0.0195883 2.36714 0.17078 2.65004 0.444017L10.312 8.10502C11.3423 9.13728 11.9209 10.5361 11.9209 11.9945C11.9209 13.4529 11.3423 14.8518 10.312 15.884L2.64004 23.556C2.43056 23.7656 2.16368 23.9085 1.87309 23.9666C1.58249 24.0247 1.2812 23.9954 1.00723 23.8824C0.733259 23.7695 0.498891 23.5779 0.333699 23.3319C0.168506 23.0858 0.0798928 22.7964 0.0790405 22.5Z"
										fill="currentColor"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Loans;
