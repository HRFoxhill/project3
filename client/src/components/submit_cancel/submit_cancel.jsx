import React from "react";

const SubmitCancel = props => {
    return (
    <div className="field is-grouped is-grouped-centered">
        <p className="control">
            <a className={"button is-primary " + props.hideAdd}
                onClick={props.addOnClick}
                >
            Add
            </a>
        </p>
        <p className="control">
            <a className="button is-info" onClick={props.updateOnClick}>
            Update
            </a>
        </p>
        <p className="control">
            <a className="button is-light" onClick={props.cancelOnClick}>
            Cancel
            </a>
        </p>
    </div> 
);
};
export default SubmitCancel;