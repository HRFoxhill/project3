import React from "react";
import "./EmailInputBox.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const EmailInputBox = props => (
    <div className="field">
        <label className="label">email</label>
        <div className="control has-icons-left has-icons-right">
            <input className="input danger" type="email" {...props} id="email-input" />
            <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
                {/* <i className="fas fa-exclamation-triangle"></i> */}
                <i className="fas fa-exclamation-triangle" id="email-validation-symbol"></i>

            </span>
        </div>
        <p className="help is-danger" id="email-validation-message">This email is invalid</p>
    </div>

);

export default EmailInputBox;