import React from 'react';
import { Heart } from 'react-feather';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer_credits">
        Made with <span title="love"><Heart className="icon" /></span> by Human on Earth
      </p>
      <p className="footer_credits">
        Created by{' '}
        <a href="https://github.com/qmachard" target="_blank" rel="noopener noreferrer">
          @qmachard
        </a>{' '}
        - Hosted on{' '}
        <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">
          Github Pages
        </a>
      </p>
    </footer>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
