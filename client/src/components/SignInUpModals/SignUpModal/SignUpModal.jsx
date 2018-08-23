// update modal to set className on modal based on is-open? Or maybe can't because that's based on the navbar

import React, { Component } from "react";
import "./SignUpModal.css";
import SignInBtn from "../SignInBtn";
import InputBox from "../InputBox";
import ModalSubmitBtn from "../ModalSubmitBtn"
import ModalCancelBtn from "../ModalCancelBtn";
// import { isThisHour } from "date-fns";

// APIs
import APIArtists from "../../../utils/APIArtists";

class SignUpModal extends Component {
    // If you need to have access to the parent component in the handler, you also need to bind the function to the component instance:
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            emailValidated: false,
            emailValidationMessage: "please enter a valid email",
            passwordValidated: false,
            passwordValidationMessage: "please enter a valid password",confirmPasswordValidated: false,
            confirmPasswordValidationMessage: "passwords must match",
        };

        this.handleSignUpModalClose = this.handleSignUpModalClose.bind(this);
        this.handleSignInModalOpen = this.handleSignInModalOpen.bind(this);
        // this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount() {
        // do I need this?
    };

    handleInputChange = (event, callback) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        }, callback);
    };
    handleEmailValidation = event => {
        // need to query DB for existing emails...
        // if email comes back with new entry, set emailValidated state to true,
        // else change emailValidationMessage to be helpful
    };
    handlePasswordConfirmValidation = event => {
        this.handleInputChange(event, () => {
            console.log(this.state.password, this.state.confirmPassword)
            if (this.state.password.length >= 7) {
                this.setState({
                    passwordValidated: true,
                    passwordValidationMessage: "that'll work"
                });
            } else {
                this.setState({
                    passwordValidated: false,
                    passwordValidationMessage: "please enter a password"
                    
                });
            }
            if (this.state.passwordValidated && (this.state.password === this.state.confirmPassword)) {
                this.setState({
                    confirmPasswordValidated: true,
                    confirmPasswordValidationMessage: "it's a match!"
                });
            } else {
                this.setState({
                    confirmPasswordValidated: false,
                    confirmPasswordValidationMessage: "passwords must match"
                });
            }
        });
    };

    handleFormSubmit = event => {
        // saving to database 
        console.log("submit")
        APIArtists.saveArtist({
            email: this.state.email,
            password: this.state.password
        })
        .then(data => console.log(data))
        // and logging them in right away
    };
    handleSignUpModalClose() {
        document.querySelector("#SignUpModal").classList.remove("is-active");
        this.setState({
            email: "",
            password: "",
            confirmPassword: "",
            emailValidated: false,
            emailValidationMessage: "please enter a valid email",
            passwordValidated: false,
            passwordValidationMessage: "please enter a valid password",confirmPasswordValidated: false,
            confirmPasswordValidationMessage: "passwords must match",
        });
    };
    handleSignInModalOpen() {
        // open sign-in
        document.querySelector("#SignInModal").classList.add("is-active");
        // close sign-up
        document.querySelector("#SignUpModal").classList.remove("is-active");
        this.setState({
            email: "",
            password: "",
            confirmPassword: "",
            emailValidated: false,
            emailValidationMessage: "please enter a valid email",
            passwordValidated: false,
            passwordValidationMessage: "please enter a valid password",confirmPasswordValidated: false,
            confirmPasswordValidationMessage: "passwords must match",
        });
    };

    render() {
        return (
            <div className="modal"/*{this.props.modalClassName}*/ id="SignUpModal">
                <div className="box">
                    <div className="modal-background"></div>
                    <div className="modal-content">
                        <h3 className="has-text-centered is-size-3">Sign Up</h3>
                        {/* email input box */}
                        <InputBox
                            label="email"                            
                            inputClassName={this.state.emailValidated? "input is-success": "input is-danger"}
                            inputType="email"
                            inputId="signUpEmailInputBox"
                            inputValue={this.state.email}
                            inputOnChange={this.handleInputChange}
                            inputName="email"
                            inputPlaceholder="enter your email"
                            leftIconClassName="fas fa-envelope"
                            rightIconClassName= {this.state.emailValidated? "fas fa-check": "fas fa-exclamation-triangle"}
                            paragraphClassName={this.state.emailValidated? "help is-success": "help is-danger"}
                            paragraphMessage={this.state.emailValidationMessage}
                        />
                        {/* Password input box */}
                        <InputBox
                            label="password"                            
                            inputClassName={this.state.passwordValidated? "input is-success": "input is-danger"}
                            inputType="password"
                            inputId="signUpPasswordInputBox"
                            inputValue={this.state.password}
                            inputOnChange={this.handlePasswordConfirmValidation}
                            inputName="password"
                            inputPlaceholder="7 character minimum"
                            leftIconClassName="fas fa-key"
                            rightIconClassName= {this.state.passwordValidated? "fas fa-check": "fas fa-exclamation-triangle"}
                            paragraphClassName={this.state.passwordValidated? "help is-success": "help is-danger"}
                            paragraphMessage={this.state.passwordValidationMessage}
                        />

                        {/* confirm password input box */}
                        <InputBox
                            label="confirm password"                            
                            inputClassName={this.state.confirmPasswordValidated? "input is-success": "input is-danger"}
                            inputType="password"
                            inputId="signUpConfirmPasswordInputBox"
                            inputValue={this.state.confirmPassword}
                            inputOnChange={this.handlePasswordConfirmValidation}
                            inputName="confirmPassword"
                            inputPlaceholder="confirm password"
                            leftIconClassName="fas fa-key"
                            rightIconClassName= {this.state.confirmPasswordValidated? "fas fa-check": "fas fa-exclamation-triangle"}
                            paragraphClassName={this.state.confirmPasswordValidated? "help is-success": "help is-danger"}
                            paragraphMessage={this.state.confirmPasswordValidationMessage}
                        />

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
                            <ModalSubmitBtn
                                onClick={this.handleFormSubmit}
                                id="modal-sign-up-submit-btn"
                                disabled={this.state.confirmPasswordValidated && this.state.passwordValidated && this.state.emailValidated? "": "disabled"}
                            />
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
            </div>
        )
    }
};

export default SignUpModal;