import React from "react";
import {Header} from "./header.jsx";
import { Footer01 } from "./Footer01.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<Header />
      <Footer01 />
		</div>
	);
};

export default Home;
