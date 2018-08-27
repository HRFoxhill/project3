import React, { Component } from "react";
import "./SignInModal.css";
import SignUpBtn from "../SignUpBtn";
import InputBox from "../InputBox";
import ModalSubmitBtn from "../ModalSubmitBtn"
import ModalCancelBtn from "../ModalCancelBtn";

// APIs
import APIArtists from "../../../utils/APIArtists";

class SignUpModal extends Component {
    // If you need to have access to the parent component in the handler, you also need to bind the function to the component instance:
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            emailValidated: false,
            emailValidationMessage: "please enter your email address",
            passwordValidated: false,
            passwordValidationMessage: "please enter your password",
        };

        this.handleSignInModalClose = this.handleSignInModalClose.bind(this);
        this.handleSignUpModalOpen = this.handleSignUpModalOpen.bind(this);
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

    handleInputValidation = event => {
        this.handleInputChange(event, () => {
            if (this.state.email.length >= 1) {
                this.setState({
                    emailValidated: true,
                    emailValidationMessage: "please enter your email"
                });
            } else {
                this.setState({
                    emailValidated: false,
                    emailValidationMessage: "please enter your email"

                });
            };
            if (this.state.password.length >= 1) {
                this.setState({
                    passwordValidated: true,
                    passwordValidationMessage: "please enter your password"
                });
            } else {
                this.setState({
                    passwordValidated: false,
                    passwordValidationMessage: "please enter your password"

                });
            };
        });
    };

    handleFormSubmit = event => {
        // handling login
        APIArtists.checkLogin(this.state)
            .then(data => {
                let results = data.data.user;
                console.log("Logged in as: " + results[0].email);
                this.handleSignInModalClose();
                window.location.reload();
            })
            .catch(err => {
                this.setState({
                    emailValidated: false,
                    emailValidationMessage: "incorrect email or password",
                    passwordValidated: false,
                    passwordValidationMessage: "incorrect email or password"
                })
                console.log("Failed to log in: " + err);
            });
    };

    handleSignInModalClose() {
        document.querySelector("#SignInModal").classList.remove("is-active");
        this.setState({
            email: "",
            password: "",
            emailValidated: false,
            emailValidationMessage: "please enter your email address",
            passwordValidated: false,
            passwordValidationMessage: "please enter your password",
        });
    };
    handleSignUpModalOpen() {
        // open sign-up
        document.querySelector("#SignUpModal").classList.add("is-active");
        // close sign-in
        document.querySelector("#SignInModal").classList.remove("is-active");
        this.setState({
            email: "",
            password: "",
            emailValidated: false,
            emailValidationMessage: "please enter your email address",
            passwordValidated: false,
            passwordValidationMessage: "please enter your password",
        });
    };

    render() {
        return (
            <div className="modal"/*{this.props.modalClassName}*/ id="SignInModal">
                <div className="box">
                    <div className="modal-background"></div>
                    <div className="modal-content">
                        <h3 className="has-text-centered is-size-3">Sign In</h3>
                        <InputBox
                            label="email"
                            inputClassName={this.state.emailValidated ? "input is-success" : "input is-danger"}
                            inputType="email"
                            inputId="signInEmailInputBox"
                            inputValue={this.state.email}
                            inputOnChange={this.handleInputValidation}
                            inputName="email"
                            inputPlaceholder="enter your email"
                            leftIconClassName="fas fa-envelope"
                            rightIconClassName={this.state.emailValidated ? "fas fa-check" : "fas fa-exclamation-triangle"}
                            paragraphClassName={this.state.emailValidated ? "help is-success" : "help is-danger"}
                            paragraphMessage={this.state.emailValidationMessage}
                        />
                        {/* Password input box */}
                        <InputBox
                            label="password"
                            inputClassName={this.state.passwordValidated ? "input is-success" : "input is-danger"}
                            inputType="password"
                            inputId="signInPasswordInputBox"
                            inputValue={this.state.password}
                            inputOnChange={this.handleInputValidation}
                            inputName="password"
                            inputPlaceholder="enter your password"
                            leftIconClassName="fas fa-key"
                            rightIconClassName={this.state.passwordValidated ? "fas fa-check" : "fas fa-exclamation-triangle"}
                            paragraphClassName={this.state.passwordValidated ? "help is-success" : "help is-danger"}
                            paragraphMessage={this.state.passwordValidationMessage}
                        />
                        {/* Submit/close btns */}
                        <div className="field is-grouped">
                            <ModalSubmitBtn
                                id="signInBtn"
                                onClick={this.handleFormSubmit}
                                disabled={this.state.passwordValidated && this.state.emailValidated ? "" : "disabled"}
                            />
                            <ModalCancelBtn
                                id="cancelBtn"
                                onClick={this.handleSignInModalClose}
                            />
                            <div className="control has-text-right">
                                Don't have an account yet? &nbsp;
                            <SignUpBtn
                                    id="createAnAccountBtn"
                                    onClick={this.handleSignUpModalOpen}
                                />
                            </div>
                        </div>
                    </div>
                    <button className="modal-close is-large" aria-label="close" onClick={this.handleSignInModalClose}></button>
                </div>
            </div>
        )
    }
};

export default SignUpModal;