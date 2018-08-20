import React from "react";
import "./UsernameInputBox.css";
import 'bulma/css/bulma.css';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const UsernameInputBox = props => (
    <div class="field">
        <label class="label">Username</label>
        <div class="control has-icons-left has-icons-right">
            <input class="input is-success" type="text" placeholder="Username" value="bulma" {...props} />
            <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
            </span>
        </div>
        <p class="help is-success">This username is available</p>
    </div>
);

export default UsernameInputBox;