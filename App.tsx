import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Routes from './src/Routes';
import store from './src/store'
import { Provider } from 'react-redux'

const appTheme = {
    ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
        background: '#ffffff'
    }
}

function App(): React.JSX.Element {
    return (
        <Provider store={store}>
            <NavigationContainer theme={appTheme}>
                <Routes />
            </NavigationContainer>
        </Provider>
        
    );
}
export default App;
