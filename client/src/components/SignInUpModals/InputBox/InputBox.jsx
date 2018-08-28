import React from "react";

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