import React from 'react'

import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import { StandardContainer } from './src/components'

import Routes from './src/routes/Routes'

const App = () => {
  return (
    <StandardContainer>
      <Routes />
    </StandardContainer>
  )
}

export default App