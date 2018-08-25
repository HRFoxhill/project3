import React, { Component } from "react";
import BasicInfoForm from "../../components/basicInfoForm";
import MediumChecklist from "../../components/mediumChecklist";
import ProfilePhotoField from "../../components/profilePhotoField";
import SubmitCancel from "../../components/submit_cancel";
import APIArtists from "../../utils/APIArtists";

class EditInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artistId: "",
            websiteUrl: "http://via.placeholder.com/500x500",
            email: "",
            artistName: "",
            phone: "",
            bio: "",
            profilePhoto: "",
            update: false,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    };
    populateThePage = () => {
        let parsedUrlArtistId = window.location.href.split(":").pop();
        this.setState({
            artistId: parsedUrlArtistId,
        })
        console.log(parsedUrlArtistId)

        APIArtists.getArtByArtist(parsedUrlArtistId)
            .then(data => {
                console.log(data.data);
                this.setState({
                    websiteUrl: data.data.websiteUrl,
                    email: data.data.email,
                    artistName: data.data.artistName,
                    phone: data.data.phone,
                    bio: data.data.bio,
                    profilePhoto: data.data.profilePhoto,
                })
            })
            .catch(err => console.log(err));
    };
    componentDidMount = () => {
        // console.log(this.state)
        this.populateThePage();
    };
    componentDidUpdate = () => {
        let currentUpdateState = this.state.update
        if (currentUpdateState === true) {
            this.setState({ update: false })
            this.populateThePage()
        };
    };
    handleInputChange = (event, callback) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        }, callback);
        console.log(this.state)
    };
    updateArtist = artistId => {
        console.log("updating...")
        APIArtists.updateArtist(artistId, {
            websiteUrl: this.state.websiteUrl,
            email: this.state.email,
            artistName: this.state.artistName,
            phone: this.state.phone,
            bio: this.state.bio,
            profilePhoto: this.state.profilePhoto,
        })
            .then(data => {
                this.setState({ update: true })
                console.log(data)
            })
            .catch(err => console.log(err))
    };
    resetState = () => {
        this.populateThePage();
        this.setState({ update: true })
    };

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
                            websiteUrl={this.state.websiteUrl}
                            phone={this.state.phone}
                            email={this.state.email}
                            profilePhoto={this.state.profilePhoto}
                            handleInputChange={this.handleInputChange}
                        />
                        <div className="columns">
                            <div className="column">
                                {/* //profile photo
                                //preview of current */}
                                <ProfilePhotoField
                                    profilePhoto={this.state.profilePhoto}
                                    handleInputChange={this.handleInputChange}
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
                <SubmitCancel
                    hideAdd={"is-hidden"}
                    updateOnClick={() => this.updateArtist(this.state.artistId)}
                    cancelOnClick={this.resetState}
                />

            </div>


        );
    }
}

export default EditInfo;
