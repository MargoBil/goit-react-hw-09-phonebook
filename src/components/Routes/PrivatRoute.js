import React from "react";
import { Route, Redirect } from "react-router-dom";
import routes from "../routes/routes";
import { connect } from "react-redux";
import authSelectors from "../../redux/selectors/authSelectors";

const PrivatRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) => {
      // const {isAuttenticated} = authSelectors;
      return isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={routes.signInPage.path} />
      );
    }}
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PrivatRoute);
