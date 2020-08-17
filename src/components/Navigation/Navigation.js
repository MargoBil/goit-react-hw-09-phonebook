import React from 'react';
import {NavLink} from 'react-router-dom';

import UserMenu from '../UserMenu/UserMenu';

import routes from '../../routes/routes';

import s from './Navigation.module.css';

const Navigation = () => {
  const {contactsPage} = routes;
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <NavLink
          className={s.link}
          activeClassName={s.active}
          exact
          to={contactsPage.path}
        >
          <h2>My contacts</h2>
        </NavLink> 
        <UserMenu/>
      </li>
    </ul>
  );
};

export default Navigation;