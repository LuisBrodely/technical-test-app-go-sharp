import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/presentation/navigation/RootNavigator';
import { Provider } from 'react-redux';
import { store, persistor } from './src/app/store';
import { PersistGate } from 'redux-persist/integration/react';
import { AuthProvider } from './src/presentation/providers/AuthProvider';

const App = () => {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
    },
  };

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <NavigationContainer theme={theme}>
            <AuthProvider>
              <RootNavigator />
            </AuthProvider>
          </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App