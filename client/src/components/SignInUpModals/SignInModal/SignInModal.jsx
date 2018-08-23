import React, { Component } from "react";
import "./SignInModal.css";
import SignUpBtn from "../SignUpBtn";
import PasswordInputBox from "../PasswordInputBox";
import EmailInputBox from "../EmailInputBox";
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

        APIArtists.getArtistByName("Laura Garabedian")
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