import React from 'react';
import Countries from './data';
// import Container, { Panel, PanelHeader } from './styledComponents';

const App = () => {
  console.log(Countries.map((country) => console.log(country)));
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
};

export default App;
