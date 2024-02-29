import React from 'react'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import { Text, Alert, View, Linking } from 'react-native';
import styles from './styles';
import auth from '@react-native-firebase/auth'
import { PRIVACY_POLICY_LINK, TERMS_CONDITIONS_LINK } from '../../constants/links';

function DrawerContent(props: any) {
  const {navigation} = props

  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'))
      .then(() => Alert.alert('You signed out!'))
  }

  return (
    <DrawerContentScrollView {...props}>
        <View style={styles.drawer}>
            <Text style={styles.link} onPress={() => navigation.navigate('Home')}>
                Home
            </Text>
            <Text style={styles.link} onPress={() => navigation.navigate('Tasks')}>
                Tasks
            </Text>
            <Text style={styles.link} onPress={() => Linking.openURL(PRIVACY_POLICY_LINK)}>
                Privacy Policy
            </Text>
            <Text style={styles.link} onPress={() => Linking.openURL(TERMS_CONDITIONS_LINK)}>
                Terms and Conditions
            </Text>
            <Text style={styles.link} onPress={logout}>Log out</Text>
        </View>
    </DrawerContentScrollView>
  );
}

export default React.memo(DrawerContent)