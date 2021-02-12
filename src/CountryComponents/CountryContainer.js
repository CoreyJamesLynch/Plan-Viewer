/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import Countries from '../data';
import CountryPanel from './CountryPanel';
import Container from './styledCountryComponents';

const CountryCont = () => {
  const [active, setActive] = useState(false);
  const [countryObj, setCountryObj] = useState(Countries);
  const clickHandler = (id) => {
    // console.log(id);
    const clickCountries = [...countryObj];
    const activeCountry = clickCountries.find((country) => country.id === id);
    console.log(activeCountry);
  };
  const vacations = Countries.map((country) => (
    <CountryPanel
      key={country.id}
      country={country}
      clickHandler={clickHandler}
      // className={}
    />
  ));
  return <Container>{vacations}</Container>;
};

export default CountryCont;
