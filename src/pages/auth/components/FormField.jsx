import React, { Component } from "react";
import "./form-field.scss";
import eyeOff from "../../../assets/eye-off.png";
import eyeOn from "../../../assets/eye-on.png";

export class FormField extends Component {
  styles = {
    field: {
      borderBottomColor: this.props.color || "#00D23A"
    }
  };
  state = {
    showPassword: false
  };
  render() {
    const { type, label, placeholder } = this.props;
    const { showPassword } = this.state;
    return (
      <div className="field-container">
        <div className="label">{label}</div>
        <div className="form-field" style={this.styles.field}>
          <input
            type={!showPassword ? type : "text"}
            placeholder={placeholder}
          />
          {type === "password" && (
            <img
              src={showPassword ? eyeOn : eyeOff}
              alt=""
              style={{ height: "70%" }}
              onClick={() => {
                this.setState({ showPassword: !showPassword });
              }}
            />
          )}
        </div>
      </div>
    );
  }
}
