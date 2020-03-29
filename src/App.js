import React, { useState } from 'react';

function App() {
  let [bool, menuFlag] = useState('undefined');

  const setBoolInMenuFlag = () => {
    menuFlag(!bool);
  };

  return (
    <div className="wrap">
      <div className="bg">
        <div className="line-wave"></div>
      </div>
      <div onClick={setBoolInMenuFlag} className="hamburger-menu">
        <div>
          <span className={`hamburger-menu__line${
            !bool === true ? ' is-active'
            : bool === 'undefined' ? ''
            :' is-disabled'
          }`}></span>
          <span className={`hamburger-menu__line${
            !bool === true ? ' is-active'
            : bool === 'undefined' ? ''
            :' is-disabled'
          }`}></span>
          <span className={`hamburger-menu__line${
            !bool === true ? ' is-active'
            : bool === 'undefined' ? ''
            :' is-disabled'
          }`}></span>
        </div>
      </div>
      <div className={`menu${
        !bool === true ? ' is-active'
        : bool === 'undefined' ? ''
        :' is-disabled'
        }`}>
        <div className="menu__inner">
          <ul className="menu__list">
            <li className="menu__item">
              <img src="../img/home.svg" alt=""/>
            </li>
            <li className="menu__item">
              <img src="../img/work.svg" alt=""/>
            </li>
            <li className="menu__item">
              <img src="../img/about.svg" alt=""/>
            </li>
            <li className="menu__item">
              <img src="../img/mail.svg" alt=""/>
            </li>
          </ul>
        </div>
      </div>
      <header>
        <div className="logo">
          <img src="../img/aki_is_logo_white.svg" alt=""/>
        </div>
      </header>
      <div className="fv"></div>
    </div>
  );
}

export default App;
