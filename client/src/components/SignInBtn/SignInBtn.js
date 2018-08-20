import React from "react";
import "./SignInBtn.css";
import 'bulma/css/bulma.css';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SignInBtn = props => (
    <a class="button is-info is-rounded" {...props}>Sign In</a>
);

export default SignInBtn;