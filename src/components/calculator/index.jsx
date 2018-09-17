import React from "react";
import PropTypes from "prop-types";

import Input from "../input";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operator: "+",
      number1: 0,
      number2: 0
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let theName = event.target.name;
    let theValue = event.target.value;

    if (theName !== "operator" && theValue === "") {
      theValue = 0;
    }
    this.setState(
      () => {
        return { [[theName]]: theValue };
      },
      () => {
        const result = eval(
          this.state.number1 + this.state.operator + this.state.number2
        );
        this.props.showResultat(result);
      }
    );
  }

  render() {
    return (
      <section>
        <form>
          <label>
            <p>Premier Nombre</p>
            <Input
              inputOnChange={this.handleChange}
              inputPlaceHolder="enter un nombre"
              inputType="number"
              inputPattern="[1-9]"
              inputName="number1"
            />
          </label>
          <label>
            <p>Opérateur</p>
            <select id="operateur" onChange={this.handleChange} name="operator">
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">*</option>
              <option value="/">/</option>
            </select>
          </label>
          <label>
            <p>Deuxieme Nombre</p>
            <Input
              inputOnChange={this.handleChange}
              inputPlaceHolder="enter un nombre"
              inputType="number"
              inputPattern="[1-9]"
              inputName="number2"
            />
          </label>
        </form>
      </section>
    );
  }
}

Calculator.propTypes = {};
export default Calculator;
