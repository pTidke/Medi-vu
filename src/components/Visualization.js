import React, { useEffect } from "react";

const Visualization = () => {
	useEffect(() => {
		// Dynamically load the Tableau API script
		const scriptElement = document.createElement("script");
		scriptElement.src =
			"https://public.tableau.com/javascripts/api/viz_v1.js";
		scriptElement.async = true;
		document.body.appendChild(scriptElement);

		// Apply Tableau-specific resizing logic once the script is loaded
		scriptElement.onload = () => {
			const divElement = document.getElementById("viz1733776051245");
			const vizElement = divElement?.getElementsByTagName("object")[0];
			if (vizElement) {
				vizElement.style.width = "1620px"; // Adjust to fit container width
				vizElement.style.height = "1600"; // Adjust to occupy 80% of viewport height
			}
		};

		// Cleanup the script when the component unmounts
		return () => {
			document.body.removeChild(scriptElement);
		};
	}, []);

	return (
		<div style={styles.container}>
			<h2 style={styles.header}>Healthcare Visualization</h2>
			<div
				className='tableauPlaceholder'
				id='viz1733776051245'
				style={styles.tableauContainer}
			>
				<noscript>
					<a href='/visualization'>
						<img
							alt='Story 1'
							src='https://public.tableau.com/static/images/Me/MediVu/Story1/1_rss.png'
							style={{ border: "none" }}
						/>
					</a>
				</noscript>
				<object className='tableauViz' style={styles.tableauObject}>
					<param
						name='host_url'
						value='https%3A%2F%2Fpublic.tableau.com%2F'
					/>
					<param name='embed_code_version' value='3' />
					<param name='site_root' value='' />
					<param name='name' value='MediVu/Story1' />
					<param name='tabs' value='no' />
					<param name='toolbar' value='yes' />
					<param
						name='static_image'
						value='https://public.tableau.com/static/images/MJ/MJYYYJ8W8/1.png'
					/>
					<param name='animate_transition' value='yes' />
					<param name='display_static_image' value='yes' />
					<param name='display_spinner' value='yes' />
					<param name='display_overlay' value='yes' />
					<param name='display_count' value='yes' />
					<param name='language' value='en-US' />
				</object>
			</div>
		</div>
	);
};

const styles = {
	container: {
		padding: "0",
		margin: "0",
		backgroundColor: "#f5f5f5",
		minHeight: "100vh",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	header: {
		textAlign: "center",
		margin: "1rem 0",
		fontFamily: "Aptos, sans-serif",
		fontSize: "1.5rem",
		color: "#000",
	},
	tableauContainer: {
		width: "100%",
		height: "calc(100vh - 3rem)", // Full height minus header space
		position: "relative",
	},
	tableauObject: {
		width: "100%",
		height: "100%",
	},
};

export default Visualization;
