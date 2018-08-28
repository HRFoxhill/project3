import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const ModalSubmitBtn = props => (
    <div className="control">
        <button className="button is-link " {...props} /*disabled*/>Submit</button>
    </div>
);

export default ModalSubmitBtn;