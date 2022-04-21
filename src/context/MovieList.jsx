import React, { Component } from "react";
import Login from "./Login";
import MovieRow from "./MovieRow";
import UserContext from "./userContext";

class MovieList extends Component {
  static contextType = UserContext;
  state = {};

  componentDidMount() {
    console.log("context: ", this.context);
  }

  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => (
          <div>
            Movie List{" "}
            {userContext.currentUser ? userContext.currentUser.name : ""}{" "}
            <MovieRow />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

// MovieList.contextType = UserContext; // Two ways to access context outside render method

export default MovieList;
