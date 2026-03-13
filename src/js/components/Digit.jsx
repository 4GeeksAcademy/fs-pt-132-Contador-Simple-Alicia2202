import react from "react";

const Digit = ({ num }) => {

    return (
        <div className="card bg-dark text-white digit">

            <div className="card-body">

                {/* <div className="d-inline"> */}
                {num}
                {/* </div> */}
            </div>
        </div>
    )
};

export default Digit;