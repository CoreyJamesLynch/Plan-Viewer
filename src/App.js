/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import GlobalStyle from './styles/globalStyle';
import CountryPanel from './Components/CountryPanel';
import Countries from './data';

class App extends React.Component {
  render() {
    const vacations = Countries.map((country) => (
      <CountryPanel
        key={country.id}
        countryName={country.name}
        countryImg={country.img}
      />
    ));
    return (
      <>
        <GlobalStyle />
        {vacations}
      </>
    );
  }
}

export default App;
