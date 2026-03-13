import react from "react";

const Digit = ({ num }) => {

    return (
        <div className="card bg-dark text-white digit">

            <div className="card-body">

                {num}
               
            </div>
        </div>
    )
};

export default Digit;