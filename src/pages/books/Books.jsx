import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Background } from "./components/Background";
import { Rating } from "./components/Rating";
import { Button } from "../../components/Button";
import zoom from "../../assets/zoom.png";
// import one from "../../../assets/books/1.png";
import two from "../../assets/books/2.png";
import three from "../../assets/books/3.png";
import four from "../../assets/books/4.png";
import five from "../../assets/books/5.png";
import six from "../../assets/books/6.png";
// import three from "../../assets/books/3.png";
import arrowRight from "../../assets/arrow-right.png";

import home from "../../assets/home.png";
import review from "../../assets/review.png";
import notifications from "../../assets/notifications.png";
import bookOpen from "../../assets/book-open.png";

import "./styles.scss";

export class Books extends Component {
  books = [
    {
      id: 1,
      image: two,
      title: "Dark Tower",
      author: "Henrie Charlies",
      rating: 5,
      reviwersCount: "232,000",
      intro:
        "Sometimes dead is better....When the Creeds move into a beautiful old house in rural Maine, -- and now an idyllic home...."
    },

    {
      id: 2,
      image: three,
      title: "Papillon",
      author: "Jason Fried",
      rating: 2,
      reviwersCount: "232,000",
      intro:
        "Sometimes dead is better....When the Creeds move into a beautiful old house in rural Maine, -- and now an idyllic home...."
    },
    {
      id: 3,
      image: two,
      title: "Remote Office",
      author: "Jason Fried",
      rating: 4,
      reviwersCount: "232,000",
      intro:
        "Sometimes dead is better....When the Creeds move into a beautiful old house in rural Maine, -- and now an idyllic home...."
    },
    {
      id: 4,
      image: four,
      title: "Scar Tissue",
      author: "Anthony Kiddies",
      rating: 5,
      reviwersCount: "232,000",
      intro:
        "Sometimes dead is better....When the Creeds move into a beautiful old house in rural Maine, -- and now an idyllic home...."
    },
    {
      id: 5,
      image: five,
      title: "Eat Awesome",
      author: "Paul Jarvis",
      rating: 5,
      reviwersCount: "232,000",
      intro:
        "Sometimes dead is better....When the Creeds move into a beautiful old house in rural Maine, -- and now an idyllic home...."
    },
    {
      id: 6,
      image: six,
      title: "The Waste Lands",
      author: "Stephen King",
      rating: 5,
      reviwersCount: "232,000",
      intro:
        "Sometimes dead is better....When the Creeds move into a beautiful old house in rural Maine, -- and now an idyllic home...."
    }
  ];

  state = {
    books: this.books
  };

  componentDidMount() {
    this.setState({ books: this.books });
  }

  search = e => {
    const value = e.target.value;
    const books = this.books.filter(book => {
      if (
        book.title.toLowerCase().includes(value.toLowerCase()) ||
        book.author.toLowerCase().includes(value.toLowerCase())
      ) {
        return true;
      }
      return false;
    });
    this.setState({ books });
  };

  changeRating = rating => {
    const bookId = this.props.match.params.id;
    const books = this.books.map(book => {
      //   alert();
      if (parseInt(book.id) === parseInt(bookId)) {
        return {
          ...book,
          rating
        };
      }
      return book;
    });
    // this.books = books;
    this.setState({ books });
  };
  render() {
    const { books } = this.state;
    const { match } = this.props;
    return (
      <Background>
        {match.params.id ? (
          <>
            <div className="top">
              <h3 className="title">
                <Link to="/books">
                  <img src={arrowRight} alt="" />
                </Link>
              </h3>
              <h3 className="title">Add Book Review</h3>
            </div>
            <div className="content extra">
              <div className="details-image">
                <img src={books[match.params.id - 1].image} alt="" />
                <div>
                  <h2>{books[match.params.id - 1].title}</h2>
                  <h4>{books[match.params.id - 1].author}</h4>
                  <p>
                    <h4>
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20868 3.56626L4.96694 0L3.72521 3.56626H0L3.03604 5.94295L1.84274 9.616L4.96694 7.34611L8.09115 9.616L6.89784 5.94295L9.93388 3.56626H6.20868Z"
                          fill="#445984"
                        />
                      </svg>
                      {parseFloat(books[match.params.id - 1].rating)} <br />{" "}
                    </h4>

                    <h6>{books[match.params.id - 1].reviwersCount} reviews</h6>
                  </p>
                </div>
              </div>
              <div className="intro">
                {books[match.params.id - 1].intro}
                <div className="more">
                  <Link to="">Full Synopsis</Link>
                </div>
              </div>
              <hr width="100%" />
              <h4>TAP TO ADD A REVIEW</h4>
              <Rating
                rating={books[match.params.id - 1].rating}
                onSelect={this.changeRating}
              />
              <div className="button-wrapper-2">
                <Link to="/review">
                  <Button>Add Book Review</Button>
                </Link>
              </div>
              <br />
              <div style={{ height: "15em" }} />
            </div>
          </>
        ) : (
          <>
            <h3 className="title">My Book List</h3>
            <div className="content">
              <div className="form-field">
                <img src={zoom} alt="" style={{ padding: 5 }} />
                <input
                  type={"text"}
                  placeholder="Search Book"
                  onChange={this.search}
                />
              </div>
              <h5 className="header">BOOKS REVIEWED BY YOU</h5>
              <div className="book-list">
                {books.map(book => {
                  return (
                    <Link to={`/books/${book.id}`}>
                      <div className="card">
                        <img src={book.image} alt="" />
                        <div className="details">
                          <h3>{book.title}</h3>
                          <p>{book.author}</p>
                          <Rating rating={book.rating} />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div style={{ height: "15em", background: "transparent" }} />
              <div className="button-wrapper">
                <Link to="/review">
                  <Button>Add Book Review</Button>
                </Link>
              </div>
            </div>
          </>
        )}
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
      </Background>
    );
  }
}
