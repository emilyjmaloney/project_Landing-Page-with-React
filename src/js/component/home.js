import React from "react";
import Navbar from "./navbar";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./jumbotron";
import Card from "./card";

//create your first component
export function Home() {
	return (
		<div className="container">
			<Navbar />
			<Jumbotron />
			<Card />
		</div>
	);
}
