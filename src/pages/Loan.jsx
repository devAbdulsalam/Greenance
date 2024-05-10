import { Link, useNavigate, useParams } from 'react-router-dom';
import { loans } from '../Data';
import { useEffect } from 'react';
import '../main.css';
function Loan() {
	const { id } = useParams();
	const navigate = useNavigate();
	const loan = loans.find((loan) => loan.id == Number(id));
	useEffect(() => {
		if (!loan) {
			return navigate('/loans');
		}
	}, [loan, navigate]);
	return (
		<div className="body-content px-8 py-8">
			<div className="flex justify-between items-end flex-wrap mb-4">
				<div className="page-title ">
					<h3 className="mb-0 text-[28px] text-primary-light">{loan?.name}</h3>
					<ul className="text-tiny font-medium flex items-center space-x-3 text-text3">
						<li className="breadcrumb-item text-muted">
							<Link to={'/loans'} className="text-hover-primary">
								{' '}
								{loan?.type}
							</Link>
						</li>
						<li className="breadcrumb-item flex items-center">
							<span className="inline-block bg-text3/60 w-[4px] h-[4px] rounded-full"></span>
						</li>
						<li className="breadcrumb-item text-muted">
							<Link to={'/loans'}>{loan?.type} Details</Link>
						</li>
					</ul>
				</div>
			</div>
			<div>
				<div className="text-primary p-2">
					<h2 className="text-primary-light font-bold text-xl md:text-2xl my-2">
						Status
					</h2>
					<p className="text-sm md:text-lg">{loan?.status}</p>
				</div>
				<div className=" p-2">
					<h2 className="text-primary-light font-bold text-xl md:text-2xl my-2">
						Amount
					</h2>
					<p className="text-sm md:text-lg">
						{loan?.loanAmount || loan?.grantAmount}
					</p>
					{loan.type === 'Loan' && (
						<>
							<p className="text-sm md:text-lg">
								Interest Rate : {loan?.loanAmount || loan?.grantAmount}
							</p>
							<p className="text-sm md:text-lg">
								Repayment Terms : {loan?.repaymentTerms}
							</p>
						</>
					)}
				</div>
				<div className=" p-2">
					<h2 className="text-primary-light font-bold text-xl md:text-2xl my-2">
						Description
					</h2>
					<p className="text-sm md:text-lg">{loan?.description}</p>
				</div>
				<div className="p-2">
					<h2 className="text-primary font-bold text-xl md:text-2xl my-2">
						Requirements
					</h2>
					<ul>
						{loan.requirements.map((item, index) => {
							return (
								<li
									key={index}
									className="text-sm md:text-lg list-disc list-inside"
								>
									{item}
								</li>
							);
						})}
					</ul>
				</div>
				<div className="text primary p-2">
					<h2 className="text-primary-light font-bold text-xl my-2">
						Application Process
					</h2>
					<p className="text-sm md:text-lg">{loan?.applicationProcess}</p>
				</div>
			</div>
		</div>
	);
}

export default Loan;
