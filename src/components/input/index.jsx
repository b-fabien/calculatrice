import React from "react";

const Input = props => (
  <input
    type={props.inputType}
    pattern={props.inputPattern}
    title="nombre"
    placeholder={props.inputPlaceHolder}
    onChange={props.inputOnChange}
    value={props.inputValue}
    name={props.inputName}
  />
);

export default Input;
