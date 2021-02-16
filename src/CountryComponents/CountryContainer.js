/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import Countries from '../data';
import CountryPanel from './CountryPanel';
import Container from './styledCountryComponents';

const CountryCont = () => {
  const [active, setActive] = useState(0);

  const clickHandler = (id) => {
    setActive(id);
  };

  const vacations = Countries.map((country) => (
    <CountryPanel
      key={country.id}
      country={country}
      clickHandler={clickHandler}
      className={active === country.id ? 'active' : ''}
    />
  ));

  return <Container>{vacations}</Container>;
};

export default CountryCont;
