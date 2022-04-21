import React, { Component } from "react";
import CartContext from "./context/cartContext";
import Login from "./context/Login";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";
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
        <CartContext.Provider value={{ cart: [] }}>
          <UserContext.Provider
            value={{
              currentUser: this.state.currentUser,
              onLoggedIn: this.handleLoggedIn,
            }}
          >
            <div>
              <MoviePage />
              <Login />
            </div>
          </UserContext.Provider>
        </CartContext.Provider>
      </React.Fragment>
    );
  }
}

export default App;
