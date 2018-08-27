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
            mediumCeramics: "",
            mediumDigitArts: "",
            mediumDrawing: "",
            mediumGlass: "",
            mediumIllustration: "",
            mediumMixedMedia: "",
            mediumPainting: "",
            mediumPhotography: "",
            mediumSculpture: "",
            mediumArray: [],
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
                    websiteUrl: data.data.websiteURL,
                    email: data.data.email,
                    artistName: data.data.artistName,
                    phone: data.data.phone,
                    bio: data.data.bio,
                    profilePhoto: data.data.profilePhoto,
                    mediumArray: data.data.medium,
                });
                this.displayMediums();
            })
            .catch(err => console.log(err));
    };
    componentDidMount = () => {
        let update = document.getElementById("update-success")
        update.style.display = "none"
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
        let newMediumArray = [];
        if (this.state.mediumCeramics !== "") {
            newMediumArray.push("Ceramics")
        }
        if (this.state.mediumDigitArt !== "") {
            newMediumArray.push("Digit Art")
        }
        if (this.state.mediumDrawing !== "") {
            newMediumArray.push("Drawing")
        }
        if (this.state.mediumGlass !== "") {
            newMediumArray.push("Glass")
        }
        if (this.state.mediumIllustration !== "") {
            newMediumArray.push("Illustration")
        }
        if (this.state.mediumMixedMedia !== "") {
            newMediumArray.push("Mixed Media")
        }
        if (this.state.mediumPainting !== "") {
            newMediumArray.push("Painting")
        }
        if (this.state.mediumPhotography !== "") {
            newMediumArray.push("Photography")
        }
        if (this.state.mediumSculpture !== "") {
            newMediumArray.push("Sculpture")
        }
        console.log("updating...")
        APIArtists.updateArtist(artistId, {
            websiteURL: this.state.websiteUrl,
            email: this.state.email,
            artistName: this.state.artistName,
            phone: this.state.phone,
            bio: this.state.bio,
            profilePhoto: this.state.profilePhoto,
            medium: newMediumArray,
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
    displayMediums = () => {
        if (this.state.mediumArray.indexOf("Ceramics") !== -1) {
            this.setState({ mediumCeramics: "on" })
        };
        if (this.state.mediumArray.indexOf("Digit Art") !== -1) {
            this.setState({ mediumDigitArt: "on" })
        };
        if (this.state.mediumArray.indexOf("Drawing") !== -1) {
            this.setState({ mediumDrawing: "on" })
        };
        if (this.state.mediumArray.indexOf("Glass") !== -1) {
            this.setState({ mediumGlass: "on" })
        };
        if (this.state.mediumArray.indexOf("Illustration") !== -1) {
            this.setState({ mediumIllustration: "on" })
        };
        if (this.state.mediumArray.indexOf("Mixed Media") !== -1) {
            this.setState({ mediumMixedMedia: "on" })
        };
        if (this.state.mediumArray.indexOf("Painting") !== -1) {
            this.setState({ mediumPainting: "on" })
        };
        if (this.state.mediumArray.indexOf("Photography") !== -1) {
            this.setState({ mediumPhotography: "on" })
        };
        if (this.state.mediumArray.indexOf("Sculpture") !== -1) {
            this.setState({ mediumSculpture: "on" })
        };
    }


    handleCheckboxSelection = medium => {
        // need to capture each time a checkbox is selected by updating a state for each? If update is selected add them to array and send to db
        if (this.state.medium === "on") {
            this.setState({ medium: "" })
        } else if (this.state.medium === "") {
            this.setState({ medium: "on" })
        }
    }

    render() {
        return (
            <div className="editInfo-div">
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
                            mediumCeramics={this.state.mediumCeramics}
                            mediumDigitArt={this.state.mediumDigitArt}
                            mediumDrawing={this.state.mediumDrawing}
                            mediumGlass={this.state.mediumGlass}
                            mediumIllustration={this.state.mediumIllustration}
                            mediumMixedMedia={this.state.mediumMixedMedia}
                            mediumPainting={this.state.mediumPainting}
                            mediumPhotography={this.state.mediumPhotography}
                            mediumSculpture={this.state.mediumSculpture}
                            handleInputChange={this.handleInputChange}
                        />
                    </div>
                </div>
                {/* //submit a show
                //SAVE CHANGES button */}
                <SubmitCancel
                    hideAdd={"is-hidden"}
                    updateOnClick={() => {
                        this.updateArtist(this.state.artistId)
                        let update = document.getElementById("update-success")
                        update.style.display = "block"
                    }}
                    cancelOnClick={this.resetState}
                />
                <div id="update-success" style={{ textAlign: 'center' }}>Profile Updated!</div>
            </div>


        );
    }
}


export default EditInfo;
