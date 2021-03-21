import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'

import Header from './Header'
import Container from './Container'
import Home from '../pages/Home'
import Start from '../pages/Start'

export default function ManabuApp() {
  const location = useLocation()

  return (
    <div>
      <Header />
      <Container>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/start">
            <Start />
          </Route>
        </Switch>
      </Container>
    </div>
  )
}
