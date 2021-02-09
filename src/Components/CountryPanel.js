import React from 'react';
import PropTypes from 'prop-types';

const CountryPanel = ({ countryName, countryImg }) => {
  return (
    <div>
      <h1>{countryName}</h1>
      <img src={countryImg} alt={countryName} />
    </div>
  );
};

export default CountryPanel;

CountryPanel.propTypes = {
  countryName: PropTypes.string.isRequired,
  countryImg: PropTypes.string.isRequired,
};
