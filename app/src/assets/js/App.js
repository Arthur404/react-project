import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Hero from './components/sections/Hero'
import Work from './components/sections/Work'

import '../style/main.scss'

const history = createBrowserHistory();

class App extends Component {
    render() {
        return <Router history={history}>
            <main>
                <Route exact path='/' render={(props) => (
                    <Hero page='Home'/>
                )}/>
                <Route exact path='/blog' render={(props) => (
                    <Hero page='Blog'/>
                )}/>
                <Route exact path='/about' render={(props) => (
                    <Hero page='About'/>
                )}/>
                <Route exact path='/contacts' render={(props) => (
                    <Hero page='Contacts'/>
                )}/>
                <Work/>
            </main>
        </Router>
    }
}

export default App;