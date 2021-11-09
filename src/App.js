import React from 'react';

import GlobalStyle from './styles/global';

import Pages from './routes';

function App() {
  return (
    <>
      <Pages />;
      <GlobalStyle />
    </>
  );
}

export default App;
