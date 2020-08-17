import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes/routes";
import { connect } from "react-redux";

import UserProfile from "../UserProfile/UserProfile";
import selectors from "../../redux/selectors/authSelectors";

import s from "./UserMenu.module.css";

const UserMenu = ({isAuth}) => {
  const { signUpPage, signInPage } = routes;
  return (
    <div className={s.box}>
      <NavLink
        className={s.link}
        activeClassName={s.active}
        exact
        to={signUpPage.path}
      >
        <h2>SignUp</h2>
      </NavLink>

      <NavLink
        className={s.link}
        activeClassName={s.active}
        exact
        to={signInPage.path}
      >
        <h2>SignIn</h2>
      </NavLink>
      {isAuth && <UserProfile />}
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: selectors.isAuthenticated(state),
});
export default connect(mapStateToProps)(UserMenu);
