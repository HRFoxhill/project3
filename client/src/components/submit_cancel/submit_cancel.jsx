import React from "react";

const SubmitCancel = props => {
    return (
    <div className="field is-grouped is-grouped-centered">
        <p className="control">
            <a className="button is-primary">
            Submit
            </a>
        </p>
        <p className="control">
            <a className="button is-light">
            Cancel
            </a>
        </p>
    </div> 
);
};
export default SubmitCancel;