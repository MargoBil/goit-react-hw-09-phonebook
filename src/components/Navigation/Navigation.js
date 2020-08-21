import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import UserMenu from '../UserMenu/UserMenu';

import routes from '../../routes/routes';
import themeSelectors from '../../redux/selectors/themeSelectors';

import s from './Navigation.module.css';

const Navigation = ({themeColor}) => {
  const {contactsPage} = routes;
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <NavLink
          className={s[`link${themeColor}`]}
          activeClassName={s.active}
          exact
          to={contactsPage.path}
        >
          <h2>MY CONTACTS</h2>
        </NavLink> 
        <UserMenu/>
      </li>
    </ul>
  );
};

const mapStateToProps = (state) => ({
  themeColor: themeSelectors.getTheme(state)
})

export default connect(mapStateToProps)(Navigation);