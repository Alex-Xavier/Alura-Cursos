import React from 'react'

import StandardContainer from './src/components/StandardContainer'

import Provider from './src/provider/provider'

import Routes from './src/routes/Routes'

const App = () => {
  return (
    <StandardContainer>
      <Provider>
        <Routes />
      </Provider>
    </StandardContainer>
  );
}

export default App