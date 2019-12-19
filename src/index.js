import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from './styles/theme';
import AppNavigator from './routes';

const App = () => (
  <PaperProvider theme={theme}>
    <AppNavigator />
  </PaperProvider>
);

export default App;
