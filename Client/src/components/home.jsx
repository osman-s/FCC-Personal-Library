import React, { Component } from "react";
import PostBookForm from "./postBookForm";
import PostCommentForm from "./postCommentForm";
import { getBooks, getComments } from "../services/bookService";

class Home extends Component {
  state = {
    books: [],
    comments: [],
    currentBook: "",
    currentComments: ""
  };

  async componentDidMount() {
    const { data: books } = await getBooks();
    const { data: comments } = await getComments();
    this.setState({ books, comments });
    console.log(this.state);
  }
  // async componentDidUpdate(prevProps, prevState) {
  //   const { data: books } = await getBooks();
  //   if (this.state.books !== books) {
  //     console.log("hello");
  //     this.setState({ books });
  //   }
  // }

  refreshBooks = async () => {
    const { data: books } = await getBooks();
    this.setState({ books });
  };
  refreshComments = async () => {
    const { data: books } = await getBooks();
    await this.setState({ books });
  };
  handleBook = async bookId => {
    var currentBook = this.state.books.filter(book => {
      return book._id == bookId;
    });
    var currentComments = this.state.comments.filter(comment => {
      return comment.book._id == bookId;
    });
    await this.setState({ currentBook, currentComments });
    // console.log(this.state.currentBook, this.state.currentComments);
    console.log(this.state.currentComments);
  };

  // handleClose = async _id => {
  //   const closePost = {
  //     _id: _id,
  //     state: "closed"
  //   };
  //   try {
  //     const response = await issueUpdate(closePost);
  //     window.location = "/projectissues";
  //   } catch (ex) {
  //     if (ex.response && ex.response.status === 400) {
  //       const errors = { ...this.state.errors };
  //       errors.username = ex.response.data;
  //       this.setState({ errors });
  //     }
  //   }
  // };
  // handleDelete = async _id => {
  //   const deletePost = {
  //     _id: _id
  //   };
  //   console.log(deletePost);
  //   try {
  //     const response = await issueDelete(deletePost);
  //     window.location = "/projectissues";
  //   } catch (ex) {
  //     if (ex.response && ex.response.status === 400) {
  //       const errors = { ...this.state.errors };
  //       errors.username = ex.response.data;
  //       this.setState({ errors });
  //     }
  //   }
  // };

  render() {
    const { books, currentBook, currentComments } = this.state;

    return (
      <div>
        <h1></h1>
        <PostBookForm refresh={this.refreshBooks} />
        <PostCommentForm refresh={this.refreshComments} />
        <div className="column-container">
          <div className="book-left-column">
            {books.map(book => (
              <div key={book._id} className="book-outer">
                <div
                  className="book-container"
                  onClick={() => this.handleBook(book._id)}
                >
                  <div className="book-title book">{book.title}</div>{" "}
                  <div className="book-id book">BookId: {book._id}</div>
                  <div>
                    {
                      this.state.comments.filter(comment => {
                        return comment.book._id == book._id;
                      }).length
                    }{" "}
                    comments
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="right-column">
            {currentBook && (
              <div>
                <div className="book-title">{currentBook[0].title}</div>
                <div>BookId: {currentBook[0]._id}</div>
                {!currentComments.length && <div>No comments</div>}
                {currentComments.map((comment, index) => (
                  <div>{index + 1}. {comment.comment}</div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
