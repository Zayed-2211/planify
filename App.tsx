import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Routes from './src/Routes';

const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff'
  }
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer theme={appTheme}>
      <Routes />
    </NavigationContainer>
  );
}
export default App;
