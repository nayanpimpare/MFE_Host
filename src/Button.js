import React from "react";
import PropTypes from "prop-types";

const Button = ({ buttonName }) => {
  return <button type="button">{buttonName}</button>;
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Button;
