import React from "react";

const ProfilePhotoField = props => {
    return (

        <div className="tile is-parent is-8">
            <div className="tile is-child box">
                <figure className="image is-50x50">
                    <img className="is-rounded" src={props.profilePhoto} />
                </figure>
                <input
                    className="input"
                    type="text"
                    placeholder="profile photo url"
                    onChange={props.handleInputChange}
                    name="profilePhoto"
                    value={props.profilePhoto}
                ></input>
            </div>
        </div>

    );
};
export default ProfilePhotoField;