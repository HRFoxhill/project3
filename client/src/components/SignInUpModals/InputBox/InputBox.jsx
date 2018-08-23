import React from "react";
import "./InputBox.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const InputBox = props => (
    <div className="field">
        <label className="label">{props.label}</label>
        <div className="control has-icons-left has-icons-right">
            <input className={props.inputClassName} type={props.inputType} id={props.inputId} value={props.inputValue} onChange={props.inputOnChange} name={props.inputName} placeholder={props.inputPlaceholder}/>
            <span className="icon is-small is-left">
                <i className={props.leftIconClassName}></i>
            </span>
            <span className="icon is-small is-right">
                <i className={props.rightIconClassName}></i>
            </span>
        </div>
        <p className={props.paragraphClassName}>{props.paragraphMessage}</p>
    </div>

);

export default InputBox;