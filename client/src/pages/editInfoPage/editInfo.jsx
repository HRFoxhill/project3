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
            profilePhoto: false,
            mediumCeramics: false,
            mediumDigitArts: false,
            mediumDrawing: false,
            mediumGlass: false,
            mediumIllustration: false,
            mediumMixedMedia: false,
            mediumPainting: false,
            mediumPhotography: false,
            mediumSculpture: false,
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
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        }, callback);
        // console.log(this.state)
    };
    updateArtist = artistId => {
        console.log("updating...")
        // this.updateMediumArray()
        APIArtists.updateArtist(artistId, {
            websiteURL: this.state.websiteUrl,
            email: this.state.email,
            artistName: this.state.artistName,
            phone: this.state.phone,
            bio: this.state.bio,
            profilePhoto: this.state.profilePhoto,
            mediumArray: this.state.mediumArray
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
            this.setState({ mediumCeramics: true })
        };
        if (this.state.mediumArray.indexOf("Digit Art") !== -1) {
            this.setState({ mediumDigitArt: true })
        };
        if (this.state.mediumArray.indexOf("Drawing") !== -1) {
            this.setState({ mediumDrawing: true })
        };
        if (this.state.mediumArray.indexOf("Glass") !== -1) {
            this.setState({ mediumGlass: true })
        };
        if (this.state.mediumArray.indexOf("Illustration") !== -1) {
            this.setState({ mediumIllustration: true })
        };
        if (this.state.mediumArray.indexOf("Mixed Media") !== -1) {
            this.setState({ mediumMixedMedia: true })
        };
        if (this.state.mediumArray.indexOf("Painting") !== -1) {
            this.setState({ mediumPainting: true })
        };
        if (this.state.mediumArray.indexOf("Photography") !== -1) {
            this.setState({ mediumPhotography: true })
        };
        if (this.state.mediumArray.indexOf("Sculpture") !== -1) {
            this.setState({ mediumSculpture: true })
        };
    }

    updateMediumArray = event => {
        this.handleInputChange(event, () => {
            let newMediumArray = [];
            if (this.state.mediumCeramics === true) {
                newMediumArray.push("Ceramics")
            }
            if (this.state.mediumDigitArt === true) {
                newMediumArray.push("Digit Art")
            }
            if (this.state.mediumDrawing === true) {
                newMediumArray.push("Drawing")
            }
            if (this.state.mediumGlass === true) {
                newMediumArray.push("Glass")
            }
            if (this.state.mediumIllustration === true) {
                newMediumArray.push("Illustration")
            }
            if (this.state.mediumMixedMedia === true) {
                newMediumArray.push("Mixed Media")
            }
            if (this.state.mediumPainting === true) {
                newMediumArray.push("Painting")
            }
            if (this.state.mediumPhotography === true) {
                newMediumArray.push("Photography")
            }
            if (this.state.mediumSculpture === true) {
                newMediumArray.push("Sculpture")
            }
            this.setState({
                mediumArray: newMediumArray,
            });
        });
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
                            handleInputChange={this.updateMediumArray}
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
