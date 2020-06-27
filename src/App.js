import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './ymtp-logo-hologram.png';
import './App.css';
import { Game } from './components/Game';
import { Rules } from './components/Rules';
import { Cards } from './components/Cards';
import { Contact } from './components/Contact';
import { NoMatch } from './components/NoMatch';

function App() {
  return (
    <React.Fragment>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />

          <p>COMING SOON</p>
          <a
            className='App-link'
            href='https://github.com/drewwmercer/you-make-the-play'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
        </header>
      </div>

      <Router>
        <Switch>
          <Route exact path='/' component={Game} />
          <Route path='/rules' component={Rules} />
          <Route path='/cards' component={Cards} />
          <Route path='/contact' component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
