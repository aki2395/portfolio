import React, { useState, useEffect, useRef } from 'react';

function App() {
  let [bool, menuFlag] = useState('undefined');

  const setBoolInMenuFlag = () => {
    menuFlag(!bool);
  };

  let [scrollCount, setScrollCount] = useState(0);

  // const setBoolInHeaderFlag = () => {
  //   headerFlag(!headerBool);
  // }
  const wrapRef = useRef(null);

  useEffect(() => {
    // ref.currentで現在の参照の値を取得できる
    // ここではdiv要素のDOM
    // console.log(wrapRef.current.scrollTop);
    // console.log(headerRef.current.getBoundingClientRect().top);
  });

  const addScrollCount = React.useCallback((e) => {
    setScrollCount(scrollCount = wrapRef.current.scrollTop);
  }, [scrollCount]);

  let [boolOfWeb, web] = useState(true);
  let [boolOfGraphic, graphic] = useState(false);
  let [boolOfPhoto, photo] = useState(false);
  let [boolOfMovie, movie] = useState(false);

  const setBoolInWeb = () => {
    web(boolOfWeb = true);
    graphic(boolOfGraphic = false);
    photo(boolOfPhoto = false);
    movie(boolOfMovie = false);
  }

  const setBoolInGraphic = () => {
    web(boolOfWeb = false);
    graphic(boolOfGraphic = true);
    photo(boolOfPhoto = false);
    movie(boolOfMovie = false);
  }

  const setBoolInPhoto = () => {
    web(boolOfWeb = false);
    graphic(boolOfGraphic = false);
    photo(boolOfPhoto = true);
    movie(boolOfMovie = false);
  }

  const setBoolInMovie = () => {
    web(boolOfWeb = false);
    graphic(boolOfGraphic = false);
    photo(boolOfPhoto = false);
    movie(boolOfMovie = true);
  }

  return (
    <div onScroll={addScrollCount} className="wrap" ref={wrapRef}>
      <div className="bg">
        <div className="img-wrap img-wrap--circle">
          <img src="../img/circle.png" alt=""/>
        </div>
        <div className="img-wrap img-wrap--small-circle">
          <img src="../img/circle_small.png" alt=""/>
        </div>
        <div className="img-wrap img-wrap--rhombus">
          <img src="../img/rhombus.png" alt=""/>
        </div>
        <div className="img-wrap img-wrap--diagonal-lines">
          <img src="../img/diagonal_lines.png" alt=""/>
        </div>
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
            <li onClick={setBoolInMenuFlag} className="menu__item">
              <img src="../img/home.svg" alt=""/>
            </li>
            <li onClick={setBoolInMenuFlag} className="menu__item">
              <img src="../img/work.svg" alt=""/>
            </li>
            <li onClick={setBoolInMenuFlag} className="menu__item">
              <img src="../img/about.svg" alt=""/>
            </li>
            <li onClick={setBoolInMenuFlag} className="menu__item">
              <img src="../img/mail.svg" alt=""/>
            </li>
          </ul>
        </div>
      </div>
      <header className={`header${scrollCount > 0 ? ' is-active' : ' is-disabled'}`}>
        <a className="link" href="/">
          <div className="logo">
            <img src="../img/aki_is_logo_white.svg" alt=""/>
          </div>
        </a>
      </header>
      <section className="section fv">
      </section>
      <section className="section work">
        <h2 className="sub-tit">
         <img src="../img/work.svg" alt=""/>
        </h2>
        <div className="tit-wrap">
          <p onClick={setBoolInWeb} className={`tit--tertiary${boolOfWeb === true ? ' is-active' : ''}`}>--web</p>
          <p onClick={setBoolInGraphic} className={`tit--tertiary${boolOfGraphic === true ? ' is-active' : ''}`}>--graphic</p>
          <p onClick={setBoolInPhoto} className={`tit--tertiary${boolOfPhoto === true ? ' is-active' : ''}`}>--photo</p>
          <p onClick={setBoolInMovie} className={`tit--tertiary${boolOfMovie === true ? ' is-active' : ''}`}>--movie</p>
        </div>
        <div className="inner">
          <div className="counter">
            <p>1</p>-<p>10</p>
          </div>
          <ul className={`list list--work${boolOfWeb === true ? ' is-active' : ''}`}>
            <li className="item">
              <div className="img-wrap">
                <img src="" alt=""/>
              </div>
              <p className="main-txt">
                サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
              </p>
              <ul className="list list--skill">
                <li className="item">HTML</li>
                <li className="item">CSS3</li>
                <li className="item">SASS</li>
                <li className="item">JavaScript</li>
                <li className="item">jQuery</li>
                <li className="item">React</li>
                <li className="item">Git</li>
                <li className="item">webDesign</li>
              </ul>
            </li>
          </ul>
          <ul className={`list list--work${boolOfGraphic === true ? ' is-active' : ''}`}>
            <li className="item">
              <div className="img-wrap">
                <img src="" alt=""/>
              </div>
              <p className="main-txt">
                サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
              </p>
              <ul className="list list--skill">
                <li className="item">HTML</li>
                <li className="item">CSS3</li>
                <li className="item">SASS</li>
                <li className="item">JavaScript</li>
                <li className="item">jQuery</li>
                <li className="item">React</li>
                <li className="item">Git</li>
                <li className="item">graphicDesign</li>
              </ul>
            </li>
          </ul>
          <ul className={`list list--work${boolOfPhoto === true ? ' is-active' : ''}`}>
            <li className="item">
              <div className="img-wrap">
                <img src="" alt=""/>
              </div>
              <p className="main-txt">
                サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
              </p>
              <ul className="list list--skill">
                <li className="item">HTML</li>
                <li className="item">CSS3</li>
                <li className="item">SASS</li>
                <li className="item">JavaScript</li>
                <li className="item">jQuery</li>
                <li className="item">React</li>
                <li className="item">Git</li>
                <li className="item">shooting</li>
              </ul>
            </li>
          </ul>
          <ul className={`list list--work${boolOfMovie === true ? ' is-active' : ''}`}>
            <li className="item">
              <div className="img-wrap">
                <img src="" alt=""/>
              </div>
              <p className="main-txt">
                サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
              </p>
              <ul className="list list--skill">
                <li className="item">HTML</li>
                <li className="item">CSS3</li>
                <li className="item">SASS</li>
                <li className="item">JavaScript</li>
                <li className="item">jQuery</li>
                <li className="item">React</li>
                <li className="item">Git</li>
                <li className="item">movieEditing</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <section className="section about">
        <h2 className="sub-tit">
         <img src="../img/about.svg" alt=""/>
        </h2>
      </section>
      <section className="section mail">
        <h2 className="sub-tit">
         <img src="../img/mail.svg" alt=""/>
        </h2>
      </section>
    </div>
  );
}

export default App;
