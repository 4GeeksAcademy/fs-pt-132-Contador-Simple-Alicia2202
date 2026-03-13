import React from "react";
import Digit from "./Digit";



//create your first component
const Home = ({ seconds }) => {

	const digits = (seconds.toString().padStart(6, "0")).split("")
	
	return (
		<div className="container vh-100 d-flex  justify-content-center align-items-center">
			<div className="p-2 iconoreloj">
				<Digit num={<i className="fa-regular fa-clock"></i>} />
			</div>
			{
				digits.map((digit,i) => {
					return (
						<div  key={i} className="p-2">
							<Digit num={digit} />
						</div>
					)
				})
			}
			

		</div>
	);
};

export default Home;