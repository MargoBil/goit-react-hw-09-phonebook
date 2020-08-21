import React from "react";
import { Route, Redirect } from "react-router-dom";
import routes from "../../routes/routes";
import { connect } from "react-redux";
import authSelectors from "../../redux/selectors/authSelectors";

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  restricted,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthenticated && restricted ? (
        <Redirect to={routes.contactsPage.path} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);
