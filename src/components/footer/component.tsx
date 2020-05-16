import React from 'react';

import * as Icons from '../icons';

import './styles.css';

export const Footer = () => (
  <footer>
    <ul className="footer__list">
      <li className="footer__list-item">
        <a aria-label="linkedin" href="https://www.linkedin.com/in/lars-tadema/" target="blank">
          <Icons.LinkedIn />
        </a>
      </li>
      <li className="footer__list-item">
        <a aria-label="twitter" href="https://twitter.com/DutchmanCoding" target="blank">
          <Icons.Twitter />
        </a>
      </li>
      <li className="footer__list-item">
        <a
          aria-label="youtube"
          href="https://www.youtube.com/channel/UCsrhQcikRcUFnNcvmpBWUKA"
          target="blank"
        >
          <Icons.Youtube />
        </a>
      </li>
    </ul>
  </footer>
);
