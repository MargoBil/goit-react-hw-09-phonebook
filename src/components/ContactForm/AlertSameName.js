import React from 'react';

import s from './AlertSameName.module.css';

const AlertSameName = () => {
  return (
    <div className={s.box}>
      <p className={s.text}>Contact already exists!</p>
    </div>
  );
};

export default AlertSameName;
