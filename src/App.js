import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Visualization from "./components/Visualization";
import Data from "./components/Data";
import Contact from "./components/Contact";
import Analysis from "./components/Analysis";

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/visualization' element={<Visualization />} />
				<Route path='/data' element={<Data />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/analysis' element={<Analysis />} />
			</Routes>
		</Router>
	);
};

export default App;
