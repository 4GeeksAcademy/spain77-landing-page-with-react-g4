import React from "react";
import {Header} from "./header.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="app">
			<Header />
		</div>
	);
};

export default Home;
