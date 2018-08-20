import React, { Component } from "react";
// import 'bulma/css/bulma.css';
import artistPanel from "../../components/artistPanel";
import artworkPanel from "../../components/artworkPanel";
// import navbar from "../../components/navbar";
// import footer from "../../components/footer";
// import localShows from "../../components/localShows";

class portfolio extends Component{
    state = {

    };
    render() {
        return (
            <div>
                is this working?
                <navbar/>
                <artistPanel/>
                <localShows/>
                <artworkPanel/>
                <footer/>
            </div>
        )
    }
}






export default portfolio;