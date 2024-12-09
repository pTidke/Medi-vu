import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav style={styles.navbar}>
			<h1 style={styles.logo}>Medi-vu</h1>
			<ul style={styles.navLinks}>
				<li>
					<Link to='/' style={styles.link}>
						Home
					</Link>
				</li>
				<li>
					<Link to='/visualization' style={styles.link}>
						Visualization
					</Link>
				</li>
				<li>
					<Link to='/analysis' style={styles.link}>
						Analysis
					</Link>
				</li>
				<li>
					<Link to='/data' style={styles.link}>
						Data
					</Link>
				</li>
				<li>
					<Link to='/contact' style={styles.link}>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
};

const styles = {
	navbar: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "0rem 2rem 0rem 2rem",
		height: "70px",
		background: "#000",
		color: "#fff",
	},
	logo: {
		fontSize: "2rem",
		fontWeight: "bold",
		fontFamily: "Aptos, sans-serif",
	},
	navLinks: {
		display: "flex",
		listStyle: "none",
		gap: "2rem",
	},
	link: {
		color: "#fff",
		fontSize: "1.1rem",
		fontWeight: "600",
		fontFamily: "Aptos, sans-serif",
		transition: "color 0.3s ease",
	},
};

export default Navbar;
