import P from "prop-types";
import { Component } from "react";
import "./styles.css";

export class Button extends Component {
  render() {
    const { text, actionClick, disabled = false } = this.props;
    return (
      <button className="button" onClick={actionClick} disabled={disabled}>
        {text}
      </button>
    );
  }
}

// Tipos
Button.propTypes = {
  text: P.string.isRequired,
  actionClick: P.func.isRequired,
  disabled: P.bool,
};

Button.defaultProps = {
  disabled: false,
};
