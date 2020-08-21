import React from 'react';
import {connect} from 'react-redux';
import selectors from '../../redux/selectors/authSelectors';
import operations from '../../redux/actions/authOperations';
import themeSelector from '../../redux/selectors/themeSelectors';

import s from './UserProfile.module.css';

const UserProfile = ({name, onLogout, themeColor}) => {
  return (
    <div className={s.box}>
      <span className={s[`text${themeColor}`]}>Welcome, {name}!</span>
      <div className={s.btnBox}>
        <button
          className={s[`btn${themeColor}`]}
          type="button"
          onClick={onLogout}
        >
          SignOut
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  name: selectors.getCurrentUserName(state),
  themeColor: themeSelector.getTheme(state),
});

const mapDispatchToProps = {
  onLogout: operations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
