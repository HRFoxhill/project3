import React, { Component } from "react";
import "./SignUpModal.css";
import SignInBtn from "../SignInBtn";
import PasswordInputBox from "../PasswordInputBox";
import UsernameInputBox from "../UsernameInputBox";

class SignUpModal extends Component {

    render() {
        return (
            <div className="modal">
                <div className="modal-background"></div>
                <div className="modal-content">
                    {/* email */}
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-danger" type="email" placeholder="Email input" value="email@address.com" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-exclamation-triangle"></i>
                            </span>
                        </div>
                        <p className="help is-danger">This email is invalid</p>
                    </div>

                    <UsernameInputBox />
                    <PasswordInputBox />

                    {/* confirm password box */}
                    <div className="field">
                        <label class="label">Confirm Password</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-success" type="password" placeholder="*******" value="password"  />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-check"></i>
                            </span>
                        </div>
                        <p className="help is-success">It's a match!</p>
                    </div>

                    {/* Terms & conditions */}
                    <div className="field">
                        <div className="control">
                            <label className="checkbox">
                                <input type="checkbox" />
                                I agree to the <a href="#">terms and conditions</a>
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="radio">
                                <input type="radio" name="question" />
                                Yes
    </label>
                            <label className="radio">
                                <input type="radio" name="question" />
                                No
    </label>
                        </div>
                    </div>

                    {/* Submit/close btns */}
                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link is-rounded">Submit</button>
                        </div>
                        <div className="control">
                            <button className="button is-text is-rounded">Cancel</button>
                        </div>
                        <div className="control">
                            Already have an account? &nbsp;
                            <SignInBtn />
                        </div> 
                    </div>
                </div>
                <button className="modal-close is-large" aria-label="close"></button>
                
            </div>
        )
    }
};

export default SignUpModal;