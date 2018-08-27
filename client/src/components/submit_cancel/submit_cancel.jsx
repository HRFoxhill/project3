import React from "react";

const SubmitCancel = props => {
    return (
    <div className="field is-grouped is-grouped-centered">
        <p className="control submit-cancel-buttons">
            <a className={"button is-logo-color " + props.hideAdd}
                onClick={props.addOnClick}
                >
            Add
            </a>
        </p>
        <p className="control submit-cancel-buttons">
            <a className="button is-logo-color submit-button" onClick={props.updateOnClick}>
            Update
            </a>
        </p>
        <p className="control submit-cancel-buttons">
            <a className="button" onClick={props.cancelOnClick}>
            Cancel
            </a>
        </p>
    </div> 
);
};
export default SubmitCancel;