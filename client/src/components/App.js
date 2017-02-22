import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";

// React Router
import { Route, Redirect } from "react-router";
import ProtectedRoute from "./routes/ProtectedRoute";

// Components
import Header from "./layout/Header";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Dashboard from "./Dashboard";
import Home from "./Home";

class App extends Component {
  //redirectAfterAuth = () =>
    // If user is authenticated and calls /sign
    // this.props.isAuthenticated ? <Redirect push to="/dashboard" /> : <SignIn />;

  redirectWhenAuthd = component =>
    this.props.isAuthenticated ? <Redirect push to="/dashboard" /> : component;

  redirectWhenUnAthd = () => !this.props.isAuthenticated && <Redirect push to="/" />;

  render() {
    const { match } = this.props;
    return (
      <div>
        <Header />
        <div className="App">
          <Route exact path={match.url} component={Home} />
          <Route 
            path="/signin" 
            render={() => this.redirectWhenAuthd(<SignIn />)} 
          />
          <Route
            path="/signup"
            render={() => this.redirectWhenAuthd(<SignUp />)}
          />
          <Route path="/signout" render={() => this.redirectWhenUnAthd()} />
          <ProtectedRoute
            path="/dashboard"
            isAuthenticated={this.props.isAuthenticated}
            component={<Dashboard />}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(App);
