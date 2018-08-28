import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SignUpBtn = props => (
    <a className="button login-button" {...props}>Create an Account</a>
);

export default SignUpBtn;