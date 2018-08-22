import React, { Component } from "react";
import "./SignUpModal.css";
import SignInBtn from "../SignInBtn";
import PasswordInputBox from "../PasswordInputBox";
import EmailInputBox from "../EmailInputBox";
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

    };
    handlePasswordConfirmValidation = event => {
        this.handleInputChange(event, () => {
            console.log(this.state.password, this.state.confirmPassword)
            if (this.state.password !== this.state.confirmPassword) {

            } else {


            }
        });
        // compare password state to confirm password state - if they are !not equal display red and add the caution sign symbol

        // else display green and checkmark symbol
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
        });
    };

    render() {
        return (
            <div className="modal" id="SignUpModal">
                <div className="box">
                    <div className="modal-background"></div>
                    <div className="modal-content">
                        <h3 className="has-text-centered is-size-3">Sign Up</h3>
                        <EmailInputBox
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            name="email"
                            placeholder="enter your email address"
                        >
                        </EmailInputBox>
                        <PasswordInputBox
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            name="password"
                            placeholder="enter a new password"
                        >
                        </PasswordInputBox>

                        {/* confirm password box */}
                        <div className="field">
                            <label class="label">confirm password</label>
                            <div className="control has-icons-left has-icons-right">
                                {/* Password confirm */}
                                <input className="input is-success" type="password"
                                    value={this.state.confirmPassword}
                                    onChange={this.handlePasswordConfirmValidation}
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
                            <ModalSubmitBtn
                                onClick={this.handleFormSubmit}
                                id="modal-sign-up-submit-btn"
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