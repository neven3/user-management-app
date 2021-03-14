import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import { LoginPage, MainPage } from './pages';
import store from './redux/store';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Provider store={store}>
          <div>
            <Navigation />
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/main" component={MainPage} />
          </div>
        </Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
