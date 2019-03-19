import React, { Component } from "react";
import { Link } from "react-router-dom";

import home from "../../assets/home.png";
import review from "../../assets/review.png";
import notifications from "../../assets/notifications.png";
import { Button } from "../../components/Button";
import bookOpen from "../../assets/book-open.png";
import mark from "../../assets/mark.png";
import four from "../../assets/books/4.png";
import five from "../../assets/books/5.png";
import six from "../../assets/books/6.png";

import "./styles.scss";

export class Review extends Component {
  interests = [
    {
      id: 4,
      image: four,
      title: "Scar Tissue",
      author: "Anthony Kiddies"
    },
    {
      id: 6,
      image: six,
      title: "The Waste Lands",
      author: "Stephen King"
    },
    {
      id: 5,
      image: five,
      title: "Eat Awesome",
      author: "Paul Jarvis"
    }
  ];
  render() {
    return (
      <div className="review">
        <img src={mark} alt="" width="40%" />
        <h1>Thank you!</h1>
        <p>
          You have submitted your first book review. Now it’s time to make some
          friends.
        </p>
        <div className="button-wrapper">
          <Button>ADD FRIENDS</Button>
        </div>

        <h6>YOU MAY ALSO BE INTERESTED IN:</h6>
        <div className="interest">
          {this.interests.map(interest => {
            return (
              <Link to={`/books/${interest.id}`}>
                <div className="item">
                  <img src={interest.image} alt="" className="book-img" />
                  <span className="title">{interest.title}</span>
                  <span className="author">{interest.author}</span>
                </div>
              </Link>
            );
          })}
        </div>
        <div style={{ height: "3em" }} />
        <div className="footer">
          <Link to="/">
            <img src={home} alt="" />
            Timeline
          </Link>
          <Link to="/books">
            <img src={bookOpen} alt="" />
            My Books
          </Link>
          <Link to="/review">
            <img src={review} alt="" />
            Add Review
          </Link>
          <Link to="/books">
            <img src={notifications} alt="" />
            Notifications
          </Link>
        </div>
      </div>
    );
  }
}
