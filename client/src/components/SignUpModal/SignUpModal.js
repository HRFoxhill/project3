import React from "react";
import "./SignUpModal.css";
import 'bulma/css/bulma.css';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const Modal = props => (
    <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">
            {/* email */}
            <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input is-danger" type="email" placeholder="Email input" value="hello@" />
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i class="fas fa-exclamation-triangle"></i>
                    </span>
                </div>
                <p class="help is-danger">This email is invalid</p>
            </div>

            {/* Username */}
            <div class="field">
                <label class="label">Username</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input is-success" type="text" placeholder="Text input" value="bulma" />
                    <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                    </span>
                </div>
                <p class="help is-success">This username is available</p>
            </div>

            {/* Password */}
            <div class="field">
                <label class="label">Password</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input is-success" type="text" placeholder="Text input" value="bulma" />
                    <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                    </span>
                </div>
                <p class="help is-success">This password is valid</p>
            </div>

            {/* Terms & conditions */}
            <div class="field">
                <div class="control">
                    <label class="checkbox">
                        <input type="checkbox" />
                            I agree to the <a href="#">terms and conditions</a>
                    </label>
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <label class="radio">
                        <input type="radio" name="question" />
                        Yes
    </label>
                    <label class="radio">
                        <input type="radio" name="question" />
                        No
    </label>
                </div>
            </div>

            {/* Submit/close btns */}
            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-link">Submit</button>
                </div>
                <div class="control">
                    <button class="button is-text">Cancel</button>
                </div>
            </div>
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
    </div>
);

export default Modal;