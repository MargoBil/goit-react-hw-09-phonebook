import React from 'react';
import {connect} from 'react-redux';

import themeSelectors from '../../redux/selectors/themeSelectors';
import {toggleThemeSuccess} from '../../redux/actions';

import s from './ThemeButton.module.css';

const ThemeButton = ({theme, toggleTheme}) => {
  let currentTheme;
  theme === 'Light' ? (currentTheme = 'Dark') : (currentTheme = 'Light');
  return (
    <button
      className={s[`btn${theme}`]}
      type="button"
      onClick={() => toggleTheme(currentTheme)}
    >
      {theme}
    </button>
  );
};
const mapStateToProps = state => ({
  theme: themeSelectors.getTheme(state),
});

const mapDispatchToProps = {
  toggleTheme: toggleThemeSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeButton);
