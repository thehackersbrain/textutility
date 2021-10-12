import '../Assets/css/Footer.css';

function Footer() {
	return (
		<div className="Footer">
			<div className="container-fluid">
				<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
					<p className="col-md-4 mb-0 text-muted footer-heading">
						© 2021 TheHackersBrain, Inc
					</p>
					<a
						href="/"
						className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
					>
						<svg className="bi me-2" width={40} height={32}>
							<use xlinkHref="#bootstrap" />
						</svg>
					</a>
					<ul className="nav col-md-4 justify-content-end">
						<li className="nav-item">
							<a href="/" className="nav-link px-2 text-muted">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a
								href="https://blog.gauravraj.tech/"
								className="nav-link px-2 text-muted"
							>
								Blog
							</a>
						</li>
						<li className="nav-item">
							<a
								href="https://gauravraj.tech/"
								className="nav-link px-2 text-muted"
							>
								Portfolio
							</a>
						</li>
						<li className="nav-item">
							<a
								href="https://github.com/thehackersbrain/?tab=repositories"
								className="nav-link px-2 text-muted"
							>
								Projects
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link px-2 text-muted">
								About
							</a>
						</li>
					</ul>
				</footer>
			</div>
		</div>
	);
}

export default Footer;
