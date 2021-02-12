/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import GlobalStyle from './styles/globalStyle';
import CountryCont from './CountryComponents/CountryContainer';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <CountryCont />
    </>
  );
};

export default App;
