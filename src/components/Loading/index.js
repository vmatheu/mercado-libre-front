import React from 'react';
import { bool } from 'prop-types';
import './style.sass';

const Loading = ({ loading }) => {
  if (loading) {
    return (
      <div className="walmark-loading">
        <img
          alt="loading"
          className="walmark-loading-image"
          src="https://pa1.narvii.com/6707/4e37fbb8e916b7d46b321e1fc903877608897b23_hq.gif"
        />
      </div>
    );
  }
  return <div />;
};

Loading.defaultProps = {
  loading: false,
};

Loading.propTypes = {
  loading: bool.isRequired,
};

export default Loading;
