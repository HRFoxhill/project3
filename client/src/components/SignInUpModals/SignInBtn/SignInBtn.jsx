import React from "react";
import "./SignInBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SignInBtn = props => (
    <a className="button is-info is-rounded" {...props}>Go to Sign In</a>
);

export default SignInBtn;