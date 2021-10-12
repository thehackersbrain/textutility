import Navbar from './Navbar';
import Footer from './Footer';
import '../Assets/css/App.css';

function App() {
	return (
		<div className="Main">
			<Navbar />
			<h1 align="center" className="hero-header">
				Gaurav Raj
			</h1>
			<p align="center" className="hero-subheader">
				Hacker, Programmer &amp; FreeLancer
			</p>
			<Footer />
		</div>
	);
}

export default App;
