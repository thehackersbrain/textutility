import '../Assets/css/AddModal.css';

function AddModal() {
	return (
		<div className="AddModal">
			<div>
				{/* Button trigger modal */}
				<button
					type="button"
					className="btn btn-outline-light addmodal-btn"
					data-bs-toggle="modal"
					data-bs-target="#AddModal"
				>
					Add Form
				</button>
				{/* Modal */}
				<div
					className="modal fade"
					id="AddModal"
					tabIndex={-1}
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5
									className="modal-title"
									id="exampleModalLabel"
								>
									Add Form
								</h5>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								/>
							</div>
							<div className="modal-body">
								<h4 className="modalbodytitle">
									Hey, I'm Gaurav Raj
								</h4>
								<p className="modalbodytext">
									I am a Hacker, Programmer &amp; FreeLancer
									while contantly learning things, primarily
									interested in CyberSecurity (Hacking), along
									with Programming. I enjoy writing tech blogs
									and also helping every tech beginner I come
									across! Try to help as much as I can.
								</p>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary modalform-btn"
									data-bs-dismiss="modal"
								>
									Close
								</button>
								<button
									type="button"
									className="btn btn-primary modalform-btn"
								>
									Save changes
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddModal;
