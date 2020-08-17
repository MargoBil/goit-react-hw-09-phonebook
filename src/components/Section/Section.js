import React from 'react';
import {connect} from 'react-redux';

import themeSelectors from '../../redux/selectors/themeSelectors';

import s from './Section.module.css';

const Section = ({title, theme, children}) => {
  return (
    <section className={s.section}>
      <h2 className={s[`name${theme}`]}>{title}</h2>
      {children}
    </section>
  );
};

const mapStateToProps = state => ({
  theme: themeSelectors.getTheme(state),
});

export default connect(mapStateToProps)(Section);
