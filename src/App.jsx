import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { auth } from './firebase';

import { useDispatch, useSelector } from 'react-redux';
import { selectIsSendMessageOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';

import Login from './Login';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';

import './App.css';

const App = () => {
  const isSendMessageOpen = useSelector(selectIsSendMessageOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          })
        );
      }
    });
  }, [dispatch]);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
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
      )}
    </Router>
  );
};

export default App;
