import React, { Component } from "react";
import { Background } from "./components/Background";
import { Link } from "react-router-dom";
import book from "../../assets/book.png";
import star from "../../assets/star.png";
import arrowLeft from "../../assets/arrow-left.png";
import "./styles.scss";

export class OnBoarding extends Component {
  state = {
    screenId: 1
  };

  onBoardingScreens = [
    {
      image: book,
      header: "Read Books",
      content: `Create your account to get started. After that, you can share books
          and make friends`
    },
    {
      image: star,
      header: "Review Them",
      content: `Create your account to get started. After that, you can share books
          and make friends`
    }
  ];

  render() {
    const { screenId } = this.state;
    const currentScene = this.onBoardingScreens[screenId - 1];
    return (
      <Background screenId={screenId}>
        <img src={currentScene.image} />
        <h1>{currentScene.header}</h1>
        <p>{currentScene.content}</p>

        <div className="row">
          <div className="slider">
            {this.onBoardingScreens.map((screen, index) => {
              if (index + 1 === screenId) {
                return (
                  <div
                    className="active"
                    onClick={() => {
                      this.setState({ screenId: index + 1 });
                    }}
                  />
                );
              }
              return (
                <div
                  onClick={() => {
                    this.setState({ screenId: index + 1 });
                  }}
                />
              );
            })}
          </div>
          {screenId === this.onBoardingScreens.length ? (
            <Link to="/login" className="fab">
              <img src={arrowLeft} />
            </Link>
          ) : (
            <button
              className="fab"
              onClick={() => {
                this.setState({ screenId: screenId + 1 });
              }}
            >
              <img src={arrowLeft} />
            </button>
          )}
        </div>

        <div>
          <a href="/login">Skip Intro</a>
        </div>
      </Background>
    );
  }
}
