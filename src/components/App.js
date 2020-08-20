import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect} from "react-router-dom";

import ThemeButton from "./ThemeButton/ThemeButton";
import Wrapper from "./Wrapper/Wrapper";
import Navigation from "../components/Navigation/Navigation";
import routes from '../routes/routes';
import authOperations from '../redux/actions/authOperations';
import PrivatRoute from '../components/Routes/PrivatRoute';


class App extends Component {
  componentDidMount() {
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
            {/* <PrivatRoute {...contactsPage}/>
            <PublicRoute {...signUpPage}/>
            <PublicRoute {...signInPage}/> */}
            <PrivatRoute {...contactsPage}/>
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
  // onFetchThemeToProps: operations.fetchTheme,
  onGetCurrentUser: authOperations.getCurrentUser
};

export default connect(null, mapDispatchToProps)(App);
