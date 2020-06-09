import React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'gatsby';
import classNames from "classnames";
import { ArrowLeft } from 'react-feather';

import './Header.scss';

const Header = ({ previous, className }) => {
  const componentClassNames = classNames('header', className);

  return (
    <header className={componentClassNames}>
      { previous && <Link to={previous}><ArrowLeft /></Link>}
      <Link to="/" className="header_logo">Accessibili'Tips</Link>
    </header>
  );
}

Header.propTypes = {
  className: PropTypes.string,
}

export default Header;
