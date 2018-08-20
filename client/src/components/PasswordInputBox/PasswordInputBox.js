import React from "react";
import "./PasswordInputBox.css";
import 'bulma/css/bulma.css';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const PasswordInputBox = props => (
    <div class="field">
        <label class="label">Password</label>
        <div class="control has-icons-left has-icons-right">
            <input class="input is-success" type="password" placeholder="7 character minimum" value="bulma" {...props} />
            <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
            </span>
        </div>
        <p class="help is-success">This password is valid</p>
    </div>
);

export default PasswordInputBox;