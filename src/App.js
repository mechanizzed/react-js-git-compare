import React, { Fragment } from 'react';

import GlobalStyle from './styles/global';

const App = () => ({
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <div>
          <h1>Github compare</h1>
        </div>
      </Fragment>
    );
  },
});

export default App;
