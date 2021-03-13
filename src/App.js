import React from 'react';
import { Provider } from 'react-redux';
// import { LoginPage, MainPage } from './pages';
import { MainPage } from './pages';
import store from './redux/store';

function App() {
  // currentPage

  return (
    <Provider store={store}>
      <div>
        <h1>User Management App</h1>
        {/* <LoginPage /> */}
        <MainPage />
      </div>
    </Provider>
  );
}

export default App;
