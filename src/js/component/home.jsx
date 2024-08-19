import React from "react";
import { Card } from "./Card.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container d-flex">
			<Card title="Adaptability" description="Adaptability is the ability to adjust and thrive in changing circumstances, and it is essential to navigating the complexities of life." />
			<Card title="Humility" description="Humility is the practice of recognizing our limitations and imperfections, and it is essential to personal growth and development." />
			<Card title="Conservation Tools" description="One of the most important uses of technology in nature is the development of conservation tools." />
			<Card title="Honesty" description="Honesty is the practice of speaking and acting truthfully and with integrity, and it is essential to building trust and respect in our relationships." />
		</div>
	);
};

export default Home;
