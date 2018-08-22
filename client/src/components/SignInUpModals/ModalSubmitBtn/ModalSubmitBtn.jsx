import React from "react";
import "./ModalSubmitBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const ModalSubmitBtn = props => (
    <div className="control">
        <button className="button is-link is-rounded" {...props} id="modal-submit-btn" /*disabled*/>Sign In</button>
    </div>
);

export default ModalSubmitBtn;