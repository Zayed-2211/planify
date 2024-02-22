import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './src/screens/auth/Onboarding';
import Signin from './src/screens/auth/Signin';
import Signup from './src/screens/auth/Signup';

const Stack = createStackNavigator();
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
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={Onboarding} name="Onboarding" />
        <Stack.Screen component={Signin} name="Signin" />
        <Stack.Screen component={Signup} name="Signup" />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
export default App;
