import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './ymtp-logo-hologram.png';
import './App.css';
import { Game } from './Game';
import { Rules } from './Rules';
import { Cards } from './Cards';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Jumbotron />
      <Layout>
        <div className='App'>
          {/* <header className='App-header'> */}
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
          {/* </header> */}
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
      </Layout>
    </React.Fragment>
  );
}

export default App;
