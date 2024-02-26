import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './screens/auth/Onboarding';
import Signin from './screens/auth/Signin';
import Signup from './screens/auth/Signup';
import { Text } from 'react-native';

const Stack = createStackNavigator();

function Routes(): React.JSX.Element {
    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState()
  
    function onAuthStateChanged(user:any) {
      setUser(user)
      if (initializing) setInitializing(false)
    }
  
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
      return subscriber
    }, []);
  
    if (initializing) {
        return (
            <Text>Initializing!</Text>
        )
    }
  
    if (!user) {
        return (
            <Text>Welcome!</Text>
        )
    }

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen component={Onboarding} name="Onboarding" />
            <Stack.Screen component={Signin} name="Signin" />
            <Stack.Screen component={Signup} name="Signup" />
        </Stack.Navigator>
    );
}
export default React.memo(Routes);
