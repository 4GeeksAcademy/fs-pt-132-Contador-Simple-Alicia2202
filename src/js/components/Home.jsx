import React from "react";
import Digit from "./Digit";



//create your first component
const Home = ({ seconds }) => {

	const digits = seconds.toString().padStart(6, "0")

	return (
		<div className="container vh-100 d-flex  justify-content-center align-items-center">

			<div className="p-2">
				<Digit num={digits[0]} />
			</div>
			<div className="p-2">
				<Digit num={digits[1]} />
			</div>
			<div className="p-2">
				<Digit num={digits[2]} />
			</div>
			<div className="p-2">
				<Digit num={digits[3]} />
			</div>
			<div className="p-2">
				<Digit num={digits[4]} />
			</div>
			<div className="p-2">
				<Digit num={digits[5]} />
			</div>

		</div>
	);
};

export default Home;