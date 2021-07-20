import React from 'react'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import AppLayout from 'components/AppLayout'
import * as ROUTES from 'constants/routes'
import CharactersPage from 'pages/Characters'
import ComicsPage from 'pages/Comics'
import CharacterAndComics from 'components/Comics'
import NotFound from 'components/NotFound'

export const Routes = () => {
  return (
    <Router>
      <AppLayout>
        <Switch>
          <Route component={ComicsPage} exact path={ROUTES.COMICS} />
          <Route component={CharactersPage} exact path={ROUTES.CHARACTERS} />
          <Route component={CharacterAndComics} exact path={ROUTES.CHARACTER_AND_COMICS} />
          <Route component={NotFound} exact path={ROUTES.NOT_FOUND} />
          <Redirect to={ROUTES.CHARACTERS}/>
        </Switch>
      </AppLayout>
    </Router>
  )
}

export default Routes
