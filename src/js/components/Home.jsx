import React from "react";
import Digit from "./Digit";



//create your first component
const Home = ({ seconds, stop, resume, reset }) => {

	const digits = (seconds.toString().padStart(6, "0")).split("")

	return (
		<div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
			<div className="d-flex align-item-center">
				<div className="p-2 iconoreloj">
					<Digit num={<i className="fa-regular fa-clock"></i>} />
				</div>
				{digits.map((digit, i) => {
					return (
						<div key={i} className="p-2">
							<Digit num={digit} />
						</div>
					)
				})
				}
			</div>


			<div className="mt-3 d-flex gap-2">
				<button onClick={stop} className="btn btn-danger">Stop</button>
				<button onClick={resume} className="btn btn-success">Resume</button>
				<button onClick={reset} className="btn btn-warning"><i className="fa-solid fa-arrow-rotate-left resetbutton"></i></button>
			</div>
		</div>


	);
};

export default Home;