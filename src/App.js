/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import GlobalStyle from './styles/globalStyle';
import CountryContainer from './CountryComponents/CountryContainer';
import Countries from './data';

const App = () => {
  const [active, setActive] = useState(true);

  const clickHandler = (id) => {
    console.log(id);
  };

  return (
    <>
      <GlobalStyle />
      <CountryContainer clickHandler={clickHandler} data={Countries} />
    </>
  );
};

export default App;
