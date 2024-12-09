import React from "react";

const Contact = () => {
	const teamMembers = [
		{
			name: "Prajwal Tidke",
			role: "Team Lead",
			responsibilities:
				"Lead development of spatial analysis, data integration",
			image: "https://via.placeholder.com/150", // Replace with actual image
		},
		{
			name: "Meet Gajjar",
			role: "UI/UX Lead",
			responsibilities:
				"Oversee UI/UX design, tool development, and ensure effective testing and feedback incorporation",
			image: "https://via.placeholder.com/150", // Replace with actual image
		},
		{
			name: "Palash Suryawanshi",
			role: "Data Specialist",
			responsibilities:
				"Data collection, cleaning, and preprocessing of health datasets",
			image: "https://via.placeholder.com/150", // Replace with actual image
		},
		{
			name: "Narsimha Atla",
			role: "Data Specialist",
			responsibilities:
				"Data collection, cleaning, and preprocessing of geographic datasets",
			image: "https://via.placeholder.com/150", // Replace with actual image
		},
	];

	return (
		<div style={styles.container}>
			<h2 style={styles.header}>Meet Our Team</h2>
			<div style={styles.teamGrid}>
				{teamMembers.map((member, index) => (
					<div key={index} style={styles.profileCard}>
						<img
							src={member.image}
							alt={member.name}
							style={styles.profileImage}
						/>
						<h3 style={styles.name}>{member.name}</h3>
						<p style={styles.role}>{member.role}</p>
						<p style={styles.responsibilities}>
							{member.responsibilities}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

const styles = {
	container: {
		padding: "3rem",
		backgroundColor: "#f9f9f9",
		textAlign: "center",
	},
	header: {
		fontFamily: "Aptos, sans-serif",
		fontSize: "2rem",
		marginBottom: "2rem",
		color: "#000",
	},
	teamGrid: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
		gap: "4rem",
		justifyItems: "center",
	},
	profileCard: {
		padding: "1.5rem",
		borderRadius: "10px",
		width: "95%",
		border: "2px solid #ddd",
		textAlign: "center",
		background: "transparent",
	},
	profileImage: {
		width: "150px",
		height: "150px",
		borderRadius: "50%",
		objectFit: "cover",
		marginBottom: "1rem",
	},
	name: {
		fontSize: "1.25rem",
		fontWeight: "bold",
		color: "#333",
		marginBottom: "0.5rem",
	},
	role: {
		fontSize: "1rem",
		color: "#888",
		marginBottom: "1rem",
	},
	responsibilities: {
		fontSize: "0.9rem",
		color: "#555",
	},
};

export default Contact;
