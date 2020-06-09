import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Link} from 'gatsby';

import './Card.scss';

/**
 * Card Component
 */
const Card = ({title, description, image, link, padding, className}) => {
  const componentClassNames = classNames(
    'card',
    {
      'card--padding': padding,
      'card--link': !!link,
    },
    className,
  );

  return (
    <article className={componentClassNames}>
      {image && (
        <div className="card_image">
          <img src={image.src} alt={image.alt} />
        </div>
      )}

      <div className="card_inner">
        <h1 className="card_title">
          {link ? (
            <Link to={link} className="a-block">
              {title}
            </Link>
          ) : (
            title
          )}
        </h1>

        {description && <p className="card_description">{description}</p>}
      </div>
    </article>
  );
};

Card.propTypes = {
  link: PropTypes.bool,
  padding: PropTypes.bool,
  className: PropTypes.string,
};

Card.defaultProps = {
  padding: false,
  link: false,
  className: null,
};

export default Card;
