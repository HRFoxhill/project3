import React from "react";

const MediumChecklist = props => {
    return (
        <div className="tile is-parent" id="medium-checklist">
            <article className="tile is-child notification is-light box">
                <p className="title">Mediums</p>
                <p className="subtitle">Check all that apply</p>
                <div className="content">
                    {/* <div className="field is-grouped"> */}
                    {/* <div className="field-label is-normal">
                        <label className="label">Mediums</label>
                    </div> */}
                    {/* <div className="field-body"> */}
                    <div className="field">
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                checked={props.mediumCeramics}
                                onClick={props.handleInputChange}
                                name="mediumCeramics"
                            />
                            Ceramics
                            </label>
                    </div>
                    <div className="field">
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                checked={props.mediumDigitalArt}
                                onClick={props.handleInputChange}
                                name="mediumDigitalArt"
                            />
                            Digital Art
                            </label>
                    </div>
                    <div className="field">
                        <label className="checkbox">
                            <input type="checkbox"
                                checked={props.mediumDrawing}
                                onClick={props.handleInputChange}
                                name="mediumDrawing" />
                            Drawing
                            </label>
                    </div>
                    <div className="field">
                        <label className="checkbox">
                            <input type="checkbox"
                                checked={props.mediumGlass}
                                onClick={props.handleInputChange}
                                name="mediumGlass" />
                            Glass Works
                            </label>
                    </div>
                    <div className="field">
                        <label className="checkbox">
                            <input type="checkbox"
                                checked={props.mediumIllustration}
                                onClick={props.handleInputChange}
                                name="mediumIllustration" />
                            Illustration
                            </label>
                    </div>
                    <div className="field">
                        <label className="checkbox">
                            <input type="checkbox"
                                checked={props.mediumMixedMedia}
                                onClick={props.handleInputChange}
                                name="mediumMixedMedia" />
                            Mixed Media
                            </label>
                    </div>
                    <div className="field">
                        <label className="checkbox">
                            <input type="checkbox"
                                checked={props.mediumPainting}
                                onClick={props.handleInputChange}
                                name="mediumPainting" />
                            Painting
                            </label>
                    </div>
                    <div className="field">
                        <label className="checkbox">
                            <input type="checkbox"
                                checked={props.mediumPhotography}
                                onClick={props.handleInputChange}
                                name="mediumPhotography" />
                            Photography
                            </label>
                    </div>
                    <div className="field">
                        <label className="checkbox">
                            <input type="checkbox"
                                checked={props.mediumSculpture}
                                onClick={props.handleInputChange}
                                name="mediumSculpture" />
                            Sculpture
                            </label>
                    </div>
                    {/* </div> */}
                    {/* </div> */}
                </div>
            </article>
        </div>

    )
}
export default MediumChecklist;