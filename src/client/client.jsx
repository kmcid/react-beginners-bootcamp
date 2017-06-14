// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

import Welcome from './Welcome'
import Mother from './Mother'

const render = (AppComponent, appname) => {
  ReactDOM.render(
    <BrowserRouter>
      <AppComponent />
    </BrowserRouter>,
    document.querySelector(`#${appname}-app`),
  )
}

render(Welcome, 'welcome')
render(Mother, 'mother')

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./Welcome', () => {
    // eslint-disable-next-line global-require
    const nextWelcome = require('./Welcome').default
    render(nextWelcome, 'welcome')
  })
}

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./Mother', () => {
    // eslint-disable-next-line global-require
    const nextMother = require('./Mother').default
    render(nextMother, 'mother')
  })
}
