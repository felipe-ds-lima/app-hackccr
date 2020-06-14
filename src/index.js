import React from 'react';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Routes from './routes';

import { store, persistor } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar backgroundColor="#f8f7fd" barStyle="dark-content" />
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
