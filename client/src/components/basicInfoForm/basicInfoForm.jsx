import React from "react";

const BasicInfoForm = props => {
    return (
<div className="tile is-parent is-two-thirds" id="basic-info">
            <article className="tile is-child notification is-light">
              <p className="title">Basic Info</p>
    <form className="is" id="basic-info-form">
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Name</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <input className="input" type="text" placeholder="Name"/>
                        </div>
                    </div>
                </div>
            </div>
         
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Website</label>
                </div>
                <div className="field-body">
                    <div className="field">
                    <div className="control">
                        <input className="input" type="text" placeholder="url"/>
                    </div>
                    </div>
                </div>
            </div>
           
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Phone #</label>
                </div>
                <div className="field-body">
                    <div className="field">
                    <div className="control">
                        <input className="input" type="text" placeholder="666-666-6666"/>
                    </div>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Artist Statement</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <textarea className="textarea" placeholder="Artist Statement"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Portfolio Style</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <label className="radio">
                                <input type="radio" name="question"/>
                                Light
                            </label>
                            <label className="radio">
                                <input type="radio" name="question"/>
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