import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />

        <div className='app__body'>
          <Sidebar />

          <Switch>
            <Route path='/mail'>
              <Mail />
            </Route>
            <Route path='/'>
              <EmailList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
