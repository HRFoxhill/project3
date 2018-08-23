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

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
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

    handleFormSubmit = event => {
        // handling login
// not working yet
        // APIArtists.getArtistByName("Laura Garabedian")
        // .then(data => console.log(data))
        // .catch(err => console.log(err));
        APIArtists.checkLogin("DBrewer@Art.com", "password")
        .then(data => console.log(data))
        .catch(err => console.log(err));
    };

    handleSignInModalClose() {
        document.querySelector("#SignInModal").classList.remove("is-active");
        this.setState({
            email: "",
            password: "",
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
        });
    };

    render() {
        return (
            <div className="modal" id="SignInModal">
                <div className="box">
                    <div className="modal-background"></div>
                    <div className="modal-content">
                        <h3 className="has-text-centered is-size-3">Sign In</h3>
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
                            inputOnChange={this.handleInputChange}
                            inputName="password"
                            inputPlaceholder="enter your password"
                            leftIconClassName="fas fa-envelope"
                            rightIconClassName= {this.state.passwordValidated? "fas fa-check": "fas fa-exclamation-triangle"}
                            paragraphClassName={this.state.passwordValidated? "help is-success": "help is-danger"}
                            paragraphMessage={this.state.passwordValidationMessage}
                        />
                        {/* Submit/close btns */}
                        <div className="field is-grouped">
                            <ModalSubmitBtn
                                onClick={this.handleFormSubmit}
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