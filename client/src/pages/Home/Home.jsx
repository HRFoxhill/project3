import React, { Component } from "react";
import API from "../../utils/API";
import SignUpModal from "../../components/SignInUpModals/SignUpModal";
import SignInModal from "../../components/SignInUpModals/SignInModal";

class Home extends Component {
  state = {

  };

  render() {
    return (
        <div>

            Hello WOrld!
            {/* the sign up modal is for testing purposes - feel free to remove/move */}
            <SignUpModal />
            <SignInModal />

        </div>
        
    )
  }
}

export default Home;
