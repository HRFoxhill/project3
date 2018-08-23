import React, { Component } from "react";
import "./SignInModal.css";
import SignUpBtn from "../SignUpBtn";
import InputBox from "../InputBox";
import ModalSubmitBtn from "../ModalSubmitBtn"
import ModalCancelBtn from "../ModalCancelBtn";

// APIs
import APIArtists from "../../../utils/APIArtists";
import APIArt from "../../../utils/APIArt";

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

    // LEFT OFF HERE -- incomplete
    // handleEmailValidation = event => {
    //     // need to query DB for existing emails...
    //     APIArtists.getArtByArtist("5b7d7b649752afd46dcff970")
    //         .then(res =>
    //             console.log(res)
    //         )
    //         .catch(err => console.log(err));
    // };

    // handlePasswordValidation = event => {

    // };

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
        APIArtists.checkLogin(this.state.email, this.state.password)
        .then(data => {
            let results = data.data;
            console.log(results);
            function isEmpty(myObject) {
                for(var key in myObject) {
                    if (myObject.hasOwnProperty(key)) false
                }
                return true;
            }
// ENDED OFF HERE: NOT FULLY WORKING!
            if (isEmpty(results)) {
                console.log("could not find email");
                this.setState({
                    emailValidationMessage: "invalid email"
                });
            } else if (results === false) {
                console.log("incorrect password");
                this.setState({
                    passwordValidationMessage: "incorrect password"
                });
            } else if (results.length >= 1) {
                console.log("'logged in'");
                
            }
        })
        .catch(err => console.log(err));
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
            <div className="modal"/*{this.props.modalClassName}*/  id="SignInModal">
                <div className="box">
                    <div className="modal-background"></div>
                    <div className="modal-content">
                        <h3 className="has-text-centered is-size-3">Sign In</h3>
                        <InputBox
                            label="email"                            
                            inputClassName={this.state.emailValidated? "input is-success": "input is-danger"}
                            inputType="email"
                            inputId="signInEmailInputBox"
                            inputValue={this.state.email}
                            inputOnChange={this.handleInputValidation}
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
                            inputId="signInPasswordInputBox"
                            inputValue={this.state.password}
                            inputOnChange={this.handleInputValidation}
                            inputName="password"
                            inputPlaceholder="enter your password"
                            leftIconClassName="fas fa-key"
                            rightIconClassName= {this.state.passwordValidated? "fas fa-check": "fas fa-exclamation-triangle"}
                            paragraphClassName={this.state.passwordValidated? "help is-success": "help is-danger"}
                            paragraphMessage={this.state.passwordValidationMessage}
                        />
                        {/* Submit/close btns */}
                        <div className="field is-grouped">
                            <ModalSubmitBtn
                                onClick={this.handleFormSubmit}
                                disabled={this.state.passwordValidated && this.state.emailValidated? "": "disabled"}
                            />
                            <ModalCancelBtn
                                onClick={this.handleSignInModalClose}
                            />
                            <div className="control has-text-right">
                                Don't have an account yet? &nbsp;
                            <SignUpBtn onClick={this.handleSignUpModalOpen}
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