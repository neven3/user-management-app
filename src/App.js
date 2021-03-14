import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navigation from './components/Navigation';
import { LoginPage, MainPage } from './pages';
import store from './redux/store';

function App() {

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
