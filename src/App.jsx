import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectIsSendMessageOpen } from './features/mailSlice';

import './App.css';

import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';

const App = () => {
  const isSendMessageOpen = useSelector(selectIsSendMessageOpen);

  return (
    <Router>
      <div className='app'>
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

        {isSendMessageOpen && <SendMail />}
      </div>
    </Router>
  );
};

export default App;
