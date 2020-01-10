import React, { Component } from "react";
import PostBookForm from "./postBookForm";
import PostCommentForm from "./postCommentForm";

class Home extends Component {
  state = {
    books: []
  };
  async componentDidMount() {
    // const { data: issues } = await getPosts();
    // this.setState({ issues });
    // console.log(this.state);
  }

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
    const posts = this.state.books;

    return (
      <div>
        <h1></h1>
        <PostBookForm />
        <PostCommentForm />
      </div>
    );
  }
}

export default Home;
