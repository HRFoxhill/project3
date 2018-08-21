import React from "react";
import "./PasswordInputBox.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const PasswordInputBox = props => (
    <div class="field">
        <label className="label">password</label>
        <div className="control has-icons-left has-icons-right">
            <input className="input is-success" type="password" placeholder="7 character minimum" value="********" {...props} />
            <span className="icon is-small is-left">
                <i class="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
            </span>
        </div>
        <p className="help is-success">This password is valid</p>
    </div>
);

export default PasswordInputBox;