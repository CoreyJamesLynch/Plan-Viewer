/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import CountryPanel from './CountryPanel';
import Container from './styledCountryComponents';

class CountryCont extends React.Component {
  render() {
    const vacations = this.props.data.map((country) => (
      <CountryPanel
        key={country.id}
        country={country}
        clickHandler={this.props.clickHandler}
      />
    ));
    return <Container>{vacations}</Container>;
  }
}

export default CountryCont;
