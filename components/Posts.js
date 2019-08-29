import React from "react";

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        return res.json();
      })
      .then(data => {
        let postsArr = data;

        this.setState({
          posts: postsArr[0]
        });
      });
  }

  render() {
    return (
      <div>
        <div>Posts</div>
        <p>{this.state.posts.title}</p>
      </div>
    );
  }
}

export default Posts;
