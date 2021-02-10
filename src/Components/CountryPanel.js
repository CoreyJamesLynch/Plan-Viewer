import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader } from './styledComponents';

const CountryPanel = ({ countryName, countryImg }) => {
  return (
    <Panel style={{ backgroundImage: `url(${countryImg})` }}>
      <PanelHeader>{countryName}</PanelHeader>
    </Panel>
  );
};

export default CountryPanel;

CountryPanel.propTypes = {
  countryName: PropTypes.string.isRequired,
  countryImg: PropTypes.string.isRequired,
};
