import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'

import Header from './components/Header'
import Container from './components/Container'
import Home from './pages/Home'
import Start from './pages/Start'
import Reflect from './pages/Reflect'
import End from './pages/End'
import Complete from './pages/Complete'

import { HomeContextProvider } from './components/HomeContext'

export default function ManabuApp() {
  const location = useLocation()

  return (
    <HomeContextProvider>
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
            <Route path="/reflect">
              <Reflect />
            </Route>
            <Route path="/end">
              <End />
            </Route>
            <Route path="/complete">
              <Complete />
            </Route>
          </Switch>
        </Container>
      </div>
    </HomeContextProvider>
  )
}
