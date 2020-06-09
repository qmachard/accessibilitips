import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';

import Header from '../../molecules/Header';
import Footer from '../../organisms/Footer';

import './Layout.scss';

/**
 * Layout Component
 */
const Layout = ({ title, description, theme, className, children }) => {
  const componentClassNames = classNames('layout', className);

  return (
    <div className={componentClassNames}>
      <Helmet>
        <html lang="fr" data-theme={theme} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
      </Helmet>

      <Header/>

      <main className="layout_main">
        {children}
      </main>

      <Footer />
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Layout.defaultProps = {
  className: null,
  theme: 'dark',
};

export default Layout;
