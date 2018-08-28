import React, { Component } from "react";
import SignUpBtn from "../SignUpBtn";
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
      emailValidated: false,
      emailValidationMessage: "please enter your email address",
      passwordValidated: false,
      passwordValidationMessage: "please enter your password"
    };
    // not sure these are necessary
    this.handleSignInModalClose = this.handleSignInModalClose.bind(this);
    this.handleSignUpModalOpen = this.handleSignUpModalOpen.bind(this);
  }

  // sets the state/value for any type of input box in real time as long as they share the same name/value attributes as the state
  handleInputChange = (event, callback) => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      },
      callback
    );
  };
  // handles the client-side email/password validation
  handleInputValidation = event => {
    // First handles the input change (from above)
    this.handleInputChange(event, () => {
      // if there's something in the email box (length >=1, sets its corresponding states to true
      if (this.state.email.length >= 1) {
        this.setState({
          emailValidated: true,
          emailValidationMessage: "please enter your email"
        });
        // else false
      } else {
        this.setState({
          emailValidated: false,
          emailValidationMessage: "please enter your email"
        });
      }
      // same deal with password, just making sure the box isn't empty
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
      }
    });
  };
  // handles when "submitBtn" is clicked on form
  handleFormSubmit = event => {
    // calls the magical passport route which uses the email/password states
    APIArtists.checkLogin(this.state)
      .then(data => {
        // returns the user data
        let results = data.data.user;
        console.log("Logged in as: " + results[0].email);
        // closes the sign-in modal
        this.handleSignInModalClose();
        // refreshes the page to buy time to display the new navbar btns
        window.location.reload();
      })
      .catch(err => {
        // or if login fails, sets states back to false and displays warning message
        this.setState({
          emailValidated: false,
          emailValidationMessage: "incorrect Email or Password",
          passwordValidated: false,
          passwordValidationMessage: "incorrect Email or Password"
        });
        console.log("Failed to log in: " + err);
      });
  };

  handleSignInModalClose() {
    // in the future, this should be updated using react states, not by manipulating the DOM directly
    // removes the "is-active" class from the sign-in modal so it is hidden from view
    document.querySelector("#SignInModal").classList.remove("is-active");
    // resets all the states so if you come back to the modal, it doesn't still have the values you typed in before
    this.setState({
      email: "",
      password: "",
      emailValidated: false,
      emailValidationMessage: "please enter your Email Address",
      passwordValidated: false,
      passwordValidationMessage: "please enter your Password"
    });
  }
  handleSignUpModalOpen() {
    //Again, in the future, this should be updated using react states, not by manipulating the DOM directly
    // add the "is-active" class to the sign-up modal so it displays
    document.querySelector("#SignUpModal").classList.add("is-active");
    // removes the "is-active" class from sign-in in case it was previously open (hides from view)
    document.querySelector("#SignInModal").classList.remove("is-active");
    // resets the state of everything so if you return to modal, previous answers aren't still displayed
    this.setState({
      email: "",
      password: "",
      emailValidated: false,
      emailValidationMessage: "please enter your Email Address",
      passwordValidated: false,
      passwordValidationMessage: "please enter your Password"
    });
  }

  // ternary statements below are mostly testing to see if the various inputs are valid then displaying either success colors/symbols or danger color/symbols.
  // The submitBtn will also be given a "disabled" attribute unless all the input boxes are true (so you can't submit without missing information)
  render() {
    return (
      <div className="modal" id="SignInModal">
        <div className="box modal-box">
          <div className="modal-content">
            <h3 className="has-text-centered is-size-3">Sign In</h3>
            <InputBox
              label="Email"
              inputClassName={
                this.state.emailValidated
                  ? "input modal-input is-success"
                  : "input modal-input is-danger"
              }
              inputType="email"
              inputId="signInEmailInputBox"
              inputValue={this.state.email}
              inputOnChange={this.handleInputValidation}
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
              inputId="signInPasswordInputBox"
              inputValue={this.state.password}
              inputOnChange={this.handleInputValidation}
              inputName="password"
              inputPlaceholder="enter your password"
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
            {/* Submit/close btns */}
            <div className="field is-grouped level">
              <ModalSubmitBtn
                id="signInBtn"
                onClick={this.handleFormSubmit}
                disabled={
                  this.state.passwordValidated && this.state.emailValidated
                    ? ""
                    : "disabled"
                }
              />
              <ModalCancelBtn
                id="cancelBtn"
                onClick={this.handleSignInModalClose}
              />
              <div className="control level-item has-text-right">
                Don't have an account yet? &nbsp;
                  <SignUpBtn
                  id="createAnAccountBtn"
                  onClick={this.handleSignUpModalOpen}
                />
              </div>
            </div>
          </div>
          <a className="delete level-item signIn-close" onClick={this.handleSignInModalClose} />
        </div>
      </div>
    );
  }
}

export default SignUpModal;
