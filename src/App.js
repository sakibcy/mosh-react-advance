import React, { Component } from "react";
import CartContext from "./context/cartContext";
import Login from "./context/Login";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";
import Counter from "./hooks/Counter";
import Users from "./hooks/Users";
class App extends Component {
  state = { currentUser: { name: "Doraemon" } };

  handleLoggedIn = (username) => {
    console.log("Logging the user: " + username);
    const user = { name: "Nobita" };

    this.setState({ currentUser: user });
  };

  render() {
    return (
      <React.Fragment>
        <Counter />
        <Users />
      </React.Fragment>
    );
  }
}

export default App;
