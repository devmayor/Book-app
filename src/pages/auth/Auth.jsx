import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Background } from "./components/Background";
import { FormField } from "./components/FormField";
import { Button } from "../../../components/Button";
import light from "../../../assets/light.png";
import "./styles.scss";

export class Auth extends Component {
  state = {};

  render() {
    const {} = this.state;
    return (
      <Background>
        <img src={light} alt="" />
        <h1>Welcome!</h1>
        <p>
          Create your account to get started. After that, you can share books
          and make friends
        </p>
        {this.props.match.params.auth === "register" ? (
          <div className="form">
            <FormField type="text" label="email" placeholder="Enter Email" />
            <FormField
              type="password"
              label="password"
              placeholder="Enter Password"
            />
            <FormField
              type="password"
              label="type password again"
              placeholder="Confirm Password"
            />
            <div className="button-field">
              <Link to="/books">
                <Button> Sign Up </Button>
              </Link>
            </div>
            <div>
              Already have an account? <Link to="/login">Login</Link>
            </div>
          </div>
        ) : (
          <div className="form">
            <FormField type="text" label="email" placeholder="Enter Email" />
            <FormField
              type="password"
              label="password"
              placeholder="Enter Password"
            />
            <div className="button-field">
              <Link to="/books">
                <Button> Sign In </Button>
              </Link>
            </div>
            <div>
              Don't have an account? <Link to="/register">Register</Link>
            </div>
          </div>
        )}
      </Background>
    );
  }
}
