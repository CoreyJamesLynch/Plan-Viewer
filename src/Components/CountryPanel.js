import React from 'react';
import PropTypes from 'prop-types';
import Container, { Panel, PanelHeader } from './styledComponents';

const CountryPanel = ({ countryName, countryImg }) => {
  return (
    <Container>
      <Panel style={{ backgroundImage: `url(${countryImg})` }}>
        <PanelHeader>{countryName}</PanelHeader>
      </Panel>
    </Container>
  );
};

export default CountryPanel;

CountryPanel.propTypes = {
  countryName: PropTypes.string.isRequired,
  countryImg: PropTypes.string.isRequired,
};
