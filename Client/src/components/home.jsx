import React, { Component } from "react";
import IssueUpdateForm from "./issueUpdateForm";
import IssueDeleteForm from "./issueDeleteForm";
import PostBookForm from "./postBookForm";
import PostCommentForm from "./postCommentForm";


class Home extends Component {
  state = {
    movies: []
  };



  render() {

    return (
      <div>
        <h1></h1>
        <PostBookForm />
        <PostCommentForm />
        <IssueDeleteForm />
      </div>
    );
  }
}

export default Home;
