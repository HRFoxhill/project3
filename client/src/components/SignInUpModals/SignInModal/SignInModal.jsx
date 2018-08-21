import React, { Component } from "react";
import "./SignInModal.css";
import SignUpBtn from "../SignUpBtn";
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
        // handling login
    };
    handleSignInModalClose() {
        document.querySelector("#SignInModal").classList.remove("is-active");
    };
    handleSignUpModalOpen() {
        // open sign-up
        document.querySelector("#SignUpModal").classList.add("is-active");
        // close sign-in
        document.querySelector("#SignInModal").classList.remove("is-active");
    };

    render() {
        return (
            <div className="modal is-active" id="SignInModal">
                <div className="modal-background"></div>
                <div className="modal-content">
                    <h3 className="has-text-centered is-size-3">Sign In</h3>
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
                    {/* Submit/close btns */}
                    <div className="field is-grouped">
                        <ModalSubmitBtn />
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
        )
    }
};

export default SignUpModal;