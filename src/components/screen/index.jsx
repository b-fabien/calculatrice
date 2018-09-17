import React from "react";
import PropTypes from "prop-types";

const Screen = props => (
  <div>
    <h2>résultat</h2>
    <strong onClick={props.addResultat}>{props.resultat}</strong>
  </div>
);
Screen.propTypes = {};
export default Screen;
