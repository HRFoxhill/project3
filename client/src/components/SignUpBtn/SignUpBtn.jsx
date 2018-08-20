import React from "react";
import "./SignInBtn.css";
import 'bulma/css/bulma.css';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SignUpBtn = props => (
    <a className="button is-info is-rounded" {...props}>Sign Up</a>
);

export default SignUpBtn;