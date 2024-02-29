import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Onboarding from './screens/auth/Onboarding';
import Signin from './screens/auth/Signin';
import Signup from './screens/auth/Signup';
import Home from './screens/app/Home';
import AddTask from './screens/app/AddTask';
import Tasks from './screens/app/Tasks';
import DrawerContent from './components/DrawerContent';
import { Text, StyleSheet, Image } from 'react-native';

const Stack = createStackNavigator(); 
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

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
    }, [])
  
    if (initializing) {
        return (
            <Text>Initializing!</Text>
        )
    }

    const Tabs: any = () => {
        return (
            <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false}}>
                <Tab.Screen 
                    name="Home" 
                    component={Home} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <Image 
                                style={styles.icon}
                                source={
                                    focused
                                    ? require('./assets/home_active.png')
                                    : require('./assets/home_inactive.png')
                                } 
                            />
                        )
                    }}
                />
                <Tab.Screen 
                    name="Tasks"
                    component={Tasks} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <Image 
                                style={styles.icon}
                                source={
                                    focused
                                    ? require('./assets/cal_active.png')
                                    : require('./assets/cal_inactive.png')
                                } 
                            />
                        )
                    }}
                />
            </Tab.Navigator>
        )
    }

    if (user) {
        return (
            <Drawer.Navigator 
                drawerContent={(props) => <DrawerContent {...props} />}
                screenOptions={{headerShown: false}}>
                <Drawer.Screen name="Tabs" component={Tabs} />
                <Drawer.Screen name="Add Task" component={AddTask} />
            </Drawer.Navigator>
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

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
      },
})

export default React.memo(Routes)
