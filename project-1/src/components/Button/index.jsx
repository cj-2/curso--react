import { Component } from "react";
import "./styles.css";

export class Button extends Component {
    render() {
        const { text, actionClick, disabled } = this.props;
        return (
            <button
                className="button"
                onClick={actionClick}
                disabled={disabled}
            >
                {text}
            </button>
        );
    }
}
