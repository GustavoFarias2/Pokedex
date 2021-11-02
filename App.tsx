import React from 'react';

import {LogBox} from 'react-native';

import MainApp from './src';

LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {
  return <MainApp />;
};

export default App;
