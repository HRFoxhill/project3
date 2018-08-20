import React, { Component } from "react";
import API from "../../utils/API";
import SignUpModal from "../../components/SignUpModal"

class Home extends Component {
  state = {

  };

  render() {
    return (
        <div>

            Hello WOrld!
            <SignUpModal />

        </div>
        
    )
  }
}

export default Home;
