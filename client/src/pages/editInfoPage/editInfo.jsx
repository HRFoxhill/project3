import React, { Component } from "react";
import BasicInfoForm from "../../components/basicInfoForm";
import MediumChecklist from "../../components/mediumChecklist";
import ProfilePhotoField from "../../components/profilePhotoField";
import SubmitCancel from "../../components/submit_cancel";
import APIArtists from "../../utils/APIArtists";

class EditInfo extends Component {
    state = {
        _id: "",
        profilePhoto: "",
        artistName: "",
        bio: "",
        websiteURL: "",
        phone: "",
        mediums: ""
    };
    componentDidMount = event => {
        let parsedUrlArtistId = window.location.href.split("=").pop();
        this.setState({
            _id: parsedUrlArtistId,
        })
        console.log(parsedUrlArtistId)
        APIArtists.getArtistById(parsedUrlArtistId)
            .then(data => {
                console.log(data.data);
                this.setState({
                    profilePhoto: data.data.profilePhoto,
                    artistName: data.data.artistName,
                    bio: data.data.bio,
                    websiteURL: data.data.websiteURL,
                    phone: data.data.phone,
                    // medium: data.data.medium
                })
                console.log(this.state.art)
            })
            .catch(err => console.log(err));
    }

    render() {
      return (
          <div>
          <div className="columns">
                {/* //container
                        //form
                            //basic info
                                //website url (optional)
                                //phone # (optional)
                                //artist statement
                                //gallery address/name?
                                //style choice: light or dark checkboxes */}
                <div className="column is-two-thirds">
                    <BasicInfoForm
                    artistName={this.state.artistName}
                    bio={this.state.bio}
                    websiteURL={this.state.websiteURL}
                    phone={this.state.phone}
                    />
                    <div className="columns">
                        <div className="column">
                            {/* //profile photo
                                //preview of current */}
                            <ProfilePhotoField
                              profilePhoto={this.state.profilePhoto}
                            />
                        </div>
                    </div>
                
                </div>
                {/* //mediums
                    //checkbox list */}
                <div className="column is-one-quarter">
                    <MediumChecklist

                    />
                </div>
                </div>
                {/* //submit a show
                //SAVE CHANGES button */}
                <SubmitCancel/>
            
            </div>
          
       
);
}}

export default EditInfo;
