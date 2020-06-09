import React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'gatsby';
import classNames from "classnames";

import 'src/components/organisms/Header/Header.scss';

const Header = ({ className }) => {
  const componentClassNames = classNames('header', className);

  return (
    <header className={componentClassNames}>
      <Link to="/" className="header_logo">Accessibili'Tips</Link>
    </header>
  );
}

Header.propTypes = {
  className: PropTypes.string,
}

export default Header;
