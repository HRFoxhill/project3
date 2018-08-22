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
                                <input type="checkbox"/>
                                Ceramics
                            </label>
                        </div>
                        <div className="field">
                            <label className="checkbox">
                                <input type="checkbox"/>
                                Digital Art
                            </label>
                        </div>
                        <div className="field">
                            <label className="checkbox">
                                <input type="checkbox"/>
                                Drawing
                            </label>
                        </div>
                        <div className="field">
                            <label className="checkbox">
                                <input type="checkbox"/>
                                Glass
                            </label>
                        </div>
                        <div className="field">
                            <label className="checkbox">
                                <input type="checkbox"/>
                                Illustration
                            </label>
                        </div>
                        <div className="field">
                            <label className="checkbox">
                                <input type="checkbox"/>
                                Mixed Media
                            </label>
                        </div>
                        <div className="field">
                            <label className="checkbox">
                                <input type="checkbox"/>
                                Painting
                            </label>
                        </div>
                        <div className="field">
                            <label className="checkbox">
                                <input type="checkbox"/>
                                Photography
                            </label>
                        </div>
                        <div className="field">
                            <label className="checkbox">
                                <input type="checkbox"/>
                                Scultpure
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