import React, { Component } from "react";
import BasicInfoForm from "../../components/basicInfoForm";
import MediumChecklist from "../../components/mediumChecklist";
import ProfilePhotoField from "../../components/profilePhotoField";
import SubmitCancel from "../../components/submit_cancel";

class EditInfo extends Component {
    state = {

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
                <BasicInfoForm/>
                <div className="columns">
                    <div className="column">
                            {/* //profile photo
                                //preview of current */}
                            <ProfilePhotoField/>
                        </div>
                    </div>
                
                </div>
                {/* //mediums
                    //checkbox list */}
                <div className="column is-one-quarter">
                    <MediumChecklist/>
                </div>
                </div>
                {/* //submit a show
                //SAVE CHANGES button */}
                <SubmitCancel/>
            
            </div>
          
       
);
}}

export default EditInfo;
