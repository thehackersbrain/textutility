import '../Assets/css/Navbar.css';
import AddModal from './AddModal';

function Navbar() {
	return (
		<div className="NavigationBar">
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						<img
							src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
							alt=""
							className="d-inline-block align-text-top menu-img"
							width={30}
							height={24}
						/>
						TextUtils
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarTogglerDemo02"
						aria-controls="navbarTogglerDemo02"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarTogglerDemo02"
					>
						<ul className="navbar-nav ml-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a
									className="nav-link active"
									aria-current="page"
									href="#"
								>
									Home
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									href="https://blog.gauravraj.tech"
									target="_blank"
									rel="noreferrer"
								>
									Blog
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									href="https://gauravraj.tech/"
									target="_blank"
									rel="noreferrer"
								>
									Portfolio
								</a>
							</li>
							<li className="nav-item nav-item-last">
								<a
									className="nav-link"
									href="https://github.com/thehackersbrain/?tab=repositories"
									target="_blank"
									rel="noreferrer"
								>
									Projects
								</a>
							</li>
						</ul>
						<AddModal />
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
