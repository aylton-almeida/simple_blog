import React from 'react';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from './styles/theme';
import AppNavigator from './routes';
import {Provider} from 'react-redux';
import {store} from './store/store';

const App = () => (
  <>
    <StatusBar backgroundColor={theme.colors.primaryDark} />
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <AppNavigator />
      </PaperProvider>
    </Provider>
  </>
);

export default App;
