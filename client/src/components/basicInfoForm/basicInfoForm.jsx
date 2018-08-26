import React from "react";

const BasicInfoForm = props => {
    return (
        <div className="tile is-parent is-two-thirds" id="basic-info">
            <article className="tile is-child notification is-light">
                <p className="title">Basic Info</p>
                <form className="is" id="basic-info-form">
                    {/* name*/}
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Name</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Name"
                                        onChange={props.handleInputChange}
                                        name="artistName"
                                        value={props.artistName}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* email - will this change log in?*/}
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Email</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Name"
                                        onChange={props.handleInputChange}
                                        name="email"
                                        value={props.email}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* website url */}
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Website URL</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="url"
                                        onChange={props.handleInputChange}
                                        name="websiteUrl"
                                        value={props.websiteUrl}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* phone */}
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Phone #</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="666-666-6666"
                                        onChange={props.handleInputChange}
                                        name="phone"
                                        value={props.phone}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* statement */}
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Artist Statement</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <textarea
                                        className="textarea"
                                        placeholder="Artist Statement" onChange={props.handleInputChange}
                                        name="bio"
                                        value={props.bio}
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* portfolio style */}
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Portfolio Style</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <label className="radio">
                                        <input type="radio" name="question" />
                                        Light
                                </label>
                                    <label className="radio">
                                        <input type="radio" name="question" />
                                        Dark
                                </label>
                                </div>
                                <p className="help">Preview</p>
                            </div>
                        </div>
                    </div>
                </form>
            </article>
        </div>

    )
}
export default BasicInfoForm;