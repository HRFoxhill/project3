import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const ModalCancelBtn = props => (
    <div className="control">
        <button className="button is-text is-rounded" {...props}>Cancel</button>
    </div>
);

export default ModalCancelBtn;