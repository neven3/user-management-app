import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navigation from './Components/Navigation';
import { LoginPage, MainPage } from './Pages';
import store from './Redux/store';

function App() {

  return (
    <HashRouter>
      <Switch>
        <Provider store={store}>
          <Navigation />
          <Route
            exact
            path="/"
            component={LoginPage}
          />
          <Route
            exact
            path="/main"
            component={MainPage}
          />
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
          />
        </Provider>
      </Switch>
    </HashRouter>
  );
}

export default App;
