import React, { Component } from "react";
import "./SignUpModal.css";
import SignInBtn from "../SignInBtn";
import PasswordInputBox from "../PasswordInputBox";
import EmailInputBox from "../EmailInputBox";
import ModalSubmitBtn from "../ModalSubmitBtn"
import ModalCancelBtn from "../ModalCancelBtn";

class SignUpModal extends Component {
    // If you need to have access to the parent component in the handler, you also need to bind the function to the component instance:
    // constructor(props) {
    //     super(props);
    //     this.handleClick = this.handleClick.bind(this);
    //   }
    state = {
        email: "",
        password: "",
        confirmPassword: "",
        modalOpen: false,
    };

    componentDidMount() {
        // do I need this?
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleEmailValidation = event => {
        // need to query DB for existing emails...
    };
    handlePasswordValidation = event => {

    };

    handleFormSubmit = event => {
        
    };
    handleSignUpModalClose() {
        document.querySelector("#SignUpModal").classList.remove("is-active");
    };
    handleSignInModalOpen() {
        // open sign-in
        document.querySelector("#SignInModal").classList.add("is-active");
        // close sign-up
        document.querySelector("#SignUpModal").classList.remove("is-active");
    };

    render() {
        return (
            <div className="modal" id="SignUpModal">
                <div className="modal-background"></div>
                <div className="modal-content">
                    <h3 className="has-text-centered is-size-3">Sign Up</h3>
                    <EmailInputBox
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        name="email"
                        placeholder="enter your email address"
                    />
                    <PasswordInputBox
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        placeholder="enter a new password"
                    />

                    {/* confirm password box */}
                    <div className="field">
                        <label class="label">confirm password</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-success" type="password"
                                value={this.state.confirmPassword}
                                onChange={this.handleInputChange}
                                name="confirmPassword"
                                placeholder="confirm your password"
                            />
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

                    {/* Submit/close btns */}
                    <div className="field is-grouped">
                        <ModalSubmitBtn />
                        <ModalCancelBtn 
                            onClick={this.handleSignUpModalClose}
                        />
                        <div className="control has-text-right">
                            Already have an account? &nbsp;
                            <SignInBtn 
                                onClick={this.handleSignInModalOpen}
                            />
                        </div>
                    </div>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={this.handleSignUpModalClose}></button>

            </div>
        )
    }
};

export default SignUpModal;