import React from "react";
import "./UsernameInputBox.css";
import 'bulma/css/bulma.css';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const UsernameInputBox = props => (
    <div className="field">
        <label className="label">Username</label>
        <div className="control has-icons-left has-icons-right">
            <input className="input is-success" type="text" placeholder="Username" value="username" {...props} />
            <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
            </span>
        </div>
        <p className="help is-success">This username is available</p>
    </div>
);

export default UsernameInputBox;