import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect} from "react-router-dom";

import ThemeButton from "./ThemeButton/ThemeButton";
import Wrapper from "./Wrapper/Wrapper";
import Navigation from "../components/Navigation/Navigation";
import routes from '../routes/routes';
import authOperations from '../redux/actions/authOperations';


class App extends Component {
  componentDidMount() {
    // this.props.onFetchNamesToProps();
    this.props.onGetCurrentUser();
    // this.props.onFetchThemeToProps();
  }

  render() {
    const {contactsPage, signUpPage, signInPage} = routes;
    return (
      <Wrapper>
        <Navigation/>
       
        <Suspense fallback={<div></div>}>
          <Switch>
            <Route {...contactsPage}/>
            <Route {...signUpPage}/>
            <Route {...signInPage}/>
            <Redirect to="/" />
          </Switch>
        </Suspense>
        <ThemeButton />
      </Wrapper>
    );
  }
}

const mapDispatchToProps = {
  // onFetchNamesToProps: operations.fetchNames,
  // onFetchThemeToProps: operations.fetchTheme,
  onGetCurrentUser: authOperations.getCurrentUser
};

export default connect(null, mapDispatchToProps)(App);
