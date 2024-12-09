import React from "react";
import logo1 from "../assets/calhhs-logo.png";
import logo2 from "../assets/copen.png";

const Data = () => {
	const datasets = [
		{
			title: "Long-term Care Facility Integrated Disclosure and Medi-Cal Cost Report Data",
			description:
				"The dataset consists of detailed financial and operational data reported annually by licensed Long-Term Care (LTC) facilities in California. Key components include Balance Sheet, Income Statement, revenue categorized by type, and labor-related details.",
			cleanup:
				"Data Cleanup: Extracted required columns from an excel file, reducing it to focus on operating metrics.",
			logo: logo1, // Replace with the logo link
			link: "https://data.chhs.ca.gov/dataset/long-term-care-facility-disclosure-report-data/resource/023998f6-5da3-413c-bd4e-3fe16a468a6c?view_id=29e090b1-ad92-44e8-9419-0854a495413e#:~:text=https%3A//data.chhs.ca.gov/dataset/70fcfed4%2Dc9b8%2D4c13%2D8c5f%2D06591261cba4/resource/023998f6%2D5da3%2D413c%2Dbd4e%2D3fe16a468a6c/download/ltc%2Dfinancial%2Dtrend%2Dpivot%2D19%2D23.xls", // Replace with actual link
		},
		{
			title: "Enrolled Medi-Cal Fee-for-Service (FFS) Providers",
			description:
				"This dataset provides basic information about the FFS providers enrolled in the Medi-Cal program, including provider number, name, type, specialty, and geographic information.",
			cleanup:
				"Data Cleanup: No significant data preprocessing required.",
			logo: logo1, // Replace with the logo link
			link: "https://data.chhs.ca.gov/dataset/profile-of-enrolled-medi-cal-fee-for-service-ffs-providers", // Replace with actual link
		},
		{
			title: "California Hospitals Building Data",
			description:
				"Provides basic information for general acute care hospital buildings including height, number of stories, building code, and completion year. The data includes exact Latitudes and Longitudes of hospitals.",
			cleanup:
				"Data Cleanup: No significant data preprocessing required.",
			logo: logo2, // Replace with the logo link
			link: "https://data.ca.gov/dataset/hospital-building-data", // Replace with actual link
		},
		{
			title: "California Death Profiles 2019-2022",
			description:
				"Reports the annual number of deaths in California by ZIP Code. The cause of death categories are based on the underlying cause as coded by the International Classification of Diseases.",
			cleanup:
				"Data Cleanup: Filtered out homicides, suicides, and accidents, and added geographical values for better visualizations.",
			logo: logo1, // Replace with the logo link
			link: "https://data.chhs.ca.gov/dataset/death-profiles-by-zip-code", // Replace with actual link
		},
	];

	return (
		<div style={styles.container}>
			<h2 style={styles.header}>Datasets Overview</h2>
			<div style={styles.cardContainer}>
				{datasets.map((dataset, index) => (
					<div key={index} style={styles.card}>
						<img
							src={dataset.logo}
							alt={`${dataset.title} logo`}
							style={styles.logo}
						/>
						<h3 style={styles.cardTitle}>{dataset.title}</h3>
						<p style={styles.cardDescription}>
							{dataset.description}
						</p>
						<p style={styles.cleanup}>{dataset.cleanup}</p>
						<a
							href={dataset.link}
							target='_blank'
							rel='noopener noreferrer'
							style={styles.button}
						>
							Link to Dataset
						</a>
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
	cardContainer: {
		display: "grid",
		gridTemplateColumns: "repeat(2, 1fr)", // 2x2 grid
		gap: "2rem",
		justifyItems: "center",
		alignItems: "start", // Align items to the start of each card for better spacing
	},
	card: {
		padding: "1.5rem",
		borderRadius: "10px",
		width: "95%",
		border: "2px solid #ddd",
		textAlign: "left",
		background: "transparent",
	},
	cardTitle: {
		fontSize: "1.5rem",
		fontWeight: "bold",
		color: "#333",
		marginBottom: "1rem",
	},
	cardDescription: {
		fontSize: "1rem",
		color: "#555",
		marginBottom: "1rem",
		textAlign: "justify", // Justify the description
	},
	cleanup: {
		fontSize: "0.9rem",
		color: "#777",
		marginBottom: "1rem",
		textAlign: "justify", // Justify the cleanup text
	},
	logo: {
		width: "600px",
		height: "180px",
		objectFit: "cover",
		marginBottom: "1rem",
	},
	button: {
		display: "inline-block",
		padding: "10px 20px",
		backgroundColor: "#4CAF50",
		color: "white",
		textDecoration: "none",
		borderRadius: "5px",
		fontSize: "1rem",
	},
};

export default Data;
