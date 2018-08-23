import React from "react";

const ProfilePhotoField = props => {
    return (
       
    <div className="tile is-parent is-8">
        <div className="tile is-child box">
            <figure className="image is-50x50">
                <img className="is-rounded"src="https://i.pinimg.com/originals/5e/12/50/5e125039e7283e37a51b52c6cb261aeb.jpg"/>
            </figure>
            <input className="input" type="text" placeholder="url"></input>
        </div>
    </div>

);
};
export default ProfilePhotoField;