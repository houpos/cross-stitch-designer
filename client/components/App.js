import React from 'react'
import { Provider } from 'react-redux'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './NavBar'
import ProjectBoard from './ProjectBoard'
import PDFGenerator from './PDFGenerator'
import store from '../store'
import '../../public/styles.css'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavBar />
          <main>
            <Switch>
              <Route exact path='/' component={ProjectBoard} />
              <Route exact path='/pdf/:pdfId' component={PDFGenerator} />
            </Switch>
          </main>
        </div>
      </Router>
    </Provider>
  )
}

export default App
