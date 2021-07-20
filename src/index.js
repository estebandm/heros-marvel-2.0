import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Routes from 'routes'

import CharactersContext from 'context/CharactersContext'
import ComicsContext from 'context/ComicsContext'

ReactDOM.render(
  <React.StrictMode>
    <ComicsContext.Provider>
      <CharactersContext.Provider>
        <Routes />
      </CharactersContext.Provider>
    </ComicsContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
