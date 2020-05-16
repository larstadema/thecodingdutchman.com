import React from 'react';

import logo from '../../logo.png';

import './styles.css';

export const Header = () => (
  <header className="hero">
    <img className="hero__logo" src={logo} alt="hero-logo" />
    <h1 className="hero__title">TheCodingDutchman</h1>
    <h2 className="hero__subtitle">Lars Tadema</h2>
    <hr />
    <strong className="hero__slogan">Shaking things up online and offline</strong>
  </header>
);
