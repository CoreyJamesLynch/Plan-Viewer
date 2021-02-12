/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader } from './styledCountryComponents';

const CountryPanel = (props) => {
  return (
    <Panel
      style={{ backgroundImage: `url(${props.country.img})` }}
      onClick={() => props.clickHandler(props.country.id)}
    >
      <PanelHeader>{props.country.name}</PanelHeader>
    </Panel>
  );
};

export default CountryPanel;

// CountryPanel.propTypes = {
//   countryName: PropTypes.string.isRequired,
//   countryImg: PropTypes.string.isRequired,
// };
