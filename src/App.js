/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import CountryPanel from './Components/CountryPanel';
import Countries from './data';
// import Container, { Panel, PanelHeader } from './styledComponents';

class App extends React.Component {
  render() {
    const vacations = Countries.map((country) => (
      <CountryPanel
        key={country.id}
        countryName={country.name}
        countryImg={country.img}
      />
    ));
    return <>{vacations}</>;
  }
}

export default App;
