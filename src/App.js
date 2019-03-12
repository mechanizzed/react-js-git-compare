import React, { Fragment } from 'react';

import GlobalStyle from './styles/global';

// Page Main
import Main from './pages/main/Main';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Main />
  </Fragment>
);

export default App;
