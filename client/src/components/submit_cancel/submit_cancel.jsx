import React from "react";

const SubmitCancel = props => {
    return (
    <div className="field is-grouped is-grouped-centered">
        <p className="control submit-cancel-buttons">
            <a className={"button is-primary " + props.hideAdd}
                onClick={props.addOnClick}
                >
            Add
            </a>
        </p>
        <p className="control submit-cancel-buttons">
            <a className="button is-dark submit-button" onClick={props.updateOnClick}>
            Update
            </a>
        </p>
        <p className="control submit-cancel-buttons">
            <a className="button is-light" onClick={props.cancelOnClick}>
            Cancel
            </a>
        </p>
    </div> 
);
};
export default SubmitCancel;