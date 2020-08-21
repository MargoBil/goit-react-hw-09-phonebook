import React, {Component, Suspense} from 'react';
import {connect} from 'react-redux';
import {Switch, Redirect} from 'react-router-dom';

import ThemeButton from './ThemeButton/ThemeButton';
import Wrapper from './Wrapper/Wrapper';
import Navigation from '../components/Navigation/Navigation';
import routes from '../routes/routes';
import authOperations from '../redux/actions/authOperations';
import PrivatRoute from '../components/Routes/PrivatRoute';
import PublicRoute from '../components/Routes/PublicRoute';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    const {contactsPage, signUpPage, signInPage} = routes;
    return (
      <Wrapper>
        <Navigation />
        <Suspense fallback={<div></div>}>
          <Switch>
            <PrivatRoute {...contactsPage} />
            <PublicRoute {...signUpPage} />
            <PublicRoute {...signInPage} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
        <ThemeButton />
      </Wrapper>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
