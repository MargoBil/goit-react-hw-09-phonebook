import React from 'react';

import s from "./Section.module.css";

const SectionMainTitle = ({theme, title}) => {
    return (<h2 className={s[`name${theme}`]}>{title}</h2>)
};

export default SectionMainTitle;