import React, { Component } from "react";
import SignInBtn from "../SignInBtn";
import InputBox from "../InputBox";
import ModalSubmitBtn from "../ModalSubmitBtn";
import ModalCancelBtn from "../ModalCancelBtn";
import APIArtists from "../../../utils/APIArtists";

class SignUpModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            emailValidated: false,
            emailValidationMessage: "please enter a valid email",
            passwordValidated: false,
            passwordValidationMessage: "please enter a valid password", confirmPasswordValidated: false,
            confirmPasswordValidationMessage: "passwords must match",
            agreedToTerms: false,
        };
        // not sure these are necessary
        this.handleSignUpModalClose = this.handleSignUpModalClose.bind(this);
        this.handleSignInModalOpen = this.handleSignInModalOpen.bind(this);
    };
    // sets the state/value for any type of input box in real time as long as they share the same name/value attributes as the state
    handleInputChange = (event, callback) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState(
            {
                [name]: value
            },
            callback
        );
    };
    // handles client-side email validation (will prevent you from submitting form with empty email box)
    handleEmailValidation = event => {
        // First handles the input change (from above)
        this.handleInputChange(event, () => {
            // then checks if the state.email length is greater than one.
            if (this.state.email.length >= 1) {
                // If so, sets the state.emailValidated to true 
                this.setState({
                    emailValidated: true,
                    emailValidationMessage: "please enter your email"
                });
            };
        });
    };
    // Handling client-side password validation
    handlePasswordConfirmValidation = event => {
        // first handles the input change (from above)
        this.handleInputChange(event, () => {
            // checks if the password is long enough (7 characters in this case)
            if (this.state.password.length >= 7) {
                // if so, sets state.passwordValidated to true and displays success message
                this.setState({
                    passwordValidated: true,
                    passwordValidationMessage: "that'll work"
                });
            } else {
                // else, sets state.passwordValidated to false and displays enter pw message
                this.setState({
                    passwordValidated: false,
                    passwordValidationMessage: "please enter a password"

                });
            }
            // then if the actual pw is validated, and its value matches the value of the confirmPassword
            if (this.state.passwordValidated && (this.state.password === this.state.confirmPassword)) {
                // set the state.confirmPwValidated to true and display success message
                this.setState({
                    confirmPasswordValidated: true,
                    confirmPasswordValidationMessage: "it's a match!"
                });
            } else {
                // else set state.confirmPwValidated to false with instructional message
                this.setState({
                    confirmPasswordValidated: false,
                    confirmPasswordValidationMessage: "passwords must match"
                });
            }
        });
    };
    // will be called when "submit btn" clicked in form
    handleFormSubmit = () => {
        // saves the artist to the database via the utils APIArtist
        APIArtists.saveArtist({
            email: this.state.email,
            password: this.state.password
        })
            // then interprets the data that comes back to handle any errors
            .then(data => {
                // this data will be returned if the email format is invalid, state.emailValidated set back to false, error message displayed
                if (data.data.errors) {
                    this.setState({
                        emailValidated: false,
                        emailValidationMessage: data.data.errors.email.message
                    })
                    // this data will be returned if their email already exists in db - may not want to actually tell them this in case they're trying to hack, state.emailValidated set back to false, error message displayed
                } else if (data.data.driver) {
                    this.setState({
                        emailValidated: false,
                        emailValidationMessage: "Email already in use. Please chose a different email address or sign in."
                    })
                    // or if it comes back with an id, it was successful so redirect them to sign-in
                } else if (data.data._id) {
                    this.handleSignInModalOpen();
                }
            })
            .catch(err => console.log(err))
    };
    handleSignUpModalClose() {
        // in the future, this should be updated using react states, not by manipulating the DOM directly
        // removes the "is-active" class from the sign-up modal so it is hidden from view
        document.querySelector("#SignUpModal").classList.remove("is-active");
        // resets all the states so if you come back to the modal, it doesn't still have the values you typed in before
        this.setState({
            email: "",
            password: "",
            confirmPassword: "",
            emailValidated: false,
            emailValidationMessage: "please enter a valid email",
            passwordValidated: false,
            passwordValidationMessage: "please enter a valid password", confirmPasswordValidated: false,
            confirmPasswordValidationMessage: "passwords must match",
            agreedToTerms: false,
        });
    };
    handleSignInModalOpen() {
        //Again, in the future, this should be updated using react states, not by manipulating the DOM directly
        // add the "is-active" class to the sign-in modal so it displays
        document.querySelector("#SignInModal").classList.add("is-active");
        // removes the "is-active" class from sign-up in case it was previously open (hides from view)
        document.querySelector("#SignUpModal").classList.remove("is-active");
        // resets the state of everything so if you return to modal, previous answers aren't still displayed
        this.setState({
            email: "",
            password: "",
            confirmPassword: "",
            emailValidated: false,
            emailValidationMessage: "please enter a valid email",
            passwordValidated: false,
            passwordValidationMessage: "please enter a valid password", confirmPasswordValidated: false,
            confirmPasswordValidationMessage: "passwords must match",
            agreedToTerms: false,
        });
    };

    // ternary statements below are mostly testing to see if the various inputs are valid then displaying either success colors/symbols or danger color/symbols. 
    // The submitBtn will also be given a "disabled" attribute unless all the input boxes are true (so you can't submit without missing information)
    // currently there are no actual terms to agree to
    render() {
        return (
            <div className="modal" id="SignUpModal">
                <div className="box modal-box">
                    <div className="modal-content">
                        <h3 className="has-text-centered is-size-3">Sign Up</h3>
                        {/* email input box */}
                        <InputBox
                            label="Email"
                            inputClassName={
                                this.state.emailValidated
                                    ? "input modal-input is-success"
                                    : "input modal-input is-danger"
                            }
                            inputType="email"
                            inputId="signUpEmailInputBox"
                            inputValue={this.state.email}
                            inputOnChange={this.handleEmailValidation}
                            inputName="email"
                            inputPlaceholder="enter your email"
                            leftIconClassName="fas fa-envelope"
                            rightIconClassName={
                                this.state.emailValidated
                                    ? "fas fa-check"
                                    : "fas fa-exclamation-triangle"
                            }
                            paragraphClassName={
                                this.state.emailValidated
                                    ? "help is-success"
                                    : "help is-danger"
                            }
                            paragraphMessage={this.state.emailValidationMessage}
                        />
                        {/* Password input box */}
                        <InputBox
                            label="Password"
                            inputClassName={
                                this.state.passwordValidated
                                    ? "input modal-input is-success"
                                    : "input modal-input is-danger"
                            }
                            inputType="password"
                            inputId="signUpPasswordInputBox"
                            inputValue={this.state.password}
                            inputOnChange={this.handlePasswordConfirmValidation}
                            inputName="password"
                            inputPlaceholder="7 character minimum"
                            leftIconClassName="fas fa-key"
                            rightIconClassName={
                                this.state.passwordValidated
                                    ? "fas fa-check"
                                    : "fas fa-exclamation-triangle"
                            }
                            paragraphClassName={
                                this.state.passwordValidated
                                    ? "help is-success"
                                    : "help is-danger"
                            }
                            paragraphMessage={this.state.passwordValidationMessage}
                        />

                        {/* confirm password input box */}
                        <InputBox
                            label="Confirm Password"
                            inputClassName={
                                this.state.confirmPasswordValidated
                                    ? "input modal-input is-success"
                                    : "input modal-input is-danger"
                            }
                            inputType="password"
                            inputId="signUpConfirmPasswordInputBox"
                            inputValue={this.state.confirmPassword}
                            inputOnChange={this.handlePasswordConfirmValidation}
                            inputName="confirmPassword"
                            inputPlaceholder="confirm password"
                            leftIconClassName="fas fa-key"
                            rightIconClassName={
                                this.state.confirmPasswordValidated
                                    ? "fas fa-check"
                                    : "fas fa-exclamation-triangle"
                            }
                            paragraphClassName={
                                this.state.confirmPasswordValidated
                                    ? "help is-success"
                                    : "help is-danger"
                            }
                            paragraphMessage={this.state.confirmPasswordValidationMessage}
                        />

                        {/* Terms & conditions */}
                        <div className="field">
                            <div className="control">
                                <label className="checkbox">
                                    <input
                                        type="checkbox"
                                        checked={this.state.agreedToTerms}
                                        name="agreedToTerms"
                                        onClick={this.handleInputChange}
                                        className="checkbox"
                                    />
                                    I agree to the <a href="#">terms and conditions</a>
                                </label>
                            </div>
                        </div>

                        {/* Submit/close btns */}
                        <div className="field is-grouped level">
                            <ModalSubmitBtn
                                onClick={this.handleFormSubmit}
                                id="modal-sign-up-submit-btn"
                                disabled={
                                    this.state.confirmPasswordValidated &&
                                        this.state.passwordValidated &&
                                        this.state.emailValidated &&
                                        this.state.agreedToTerms
                                        ? false
                                        : true
                                }
                            />
                            <ModalCancelBtn onClick={this.handleSignUpModalClose} />
                            <div className="control has-text-right level-item">
                                Already have an account? &nbsp;
                  <SignInBtn onClick={this.handleSignInModalOpen} />
                            </div>
                        </div>
                    </div>
                    <button className="modal-close is-large" aria-label="close" onClick={this.handleSignUpModalClose}></button>

                </div>
            </div>
        )
    };
};


export default SignUpModal;
