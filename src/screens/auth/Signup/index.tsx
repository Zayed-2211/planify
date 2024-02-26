import React, {useState} from "react";
import { Linking, SafeAreaView, View, Text, Alert } from "react-native";
import styles from './styles';
import Button from "../../../components/Button";
import Title from "../../../components/Title";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import { PRIVACY_POLICY_LINK, TERMS_CONDITIONS_LINK, } from '../../../constants/links';
import auth from '@react-native-firebase/auth';

const Signup4 = ({navigation}: {navigation: any}) => {

    const [agreed, setAgreed] = useState(false)
    const [value, setValue] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirm_password: ''
    })

    const onCheckboxPress = () => {
        setAgreed(value => !value)
    }

    const onLinkPress = (url: string) => {
        Linking.openURL(url)
    }

    
    const onSubmit = () => {
        if (!value.firstname) {
          Alert.alert('Please enter First name');
          return;
        }
        if (!value.lastname) {
          Alert.alert('Please enter Last name');
          return;
        }
        if (!value.email) {
          Alert.alert('Please enter a valid email');
          return;
        }
        if (value.password !== value.confirm_password) {
          Alert.alert('Passwords do not match');
          return;
        }
        if (!agreed) {
          Alert.alert('You should agree to the terms');
          return;
        }
        auth()
        .createUserWithEmailAndPassword(value.email, value.password)
        .then(() => {
            console.log('User account created & signed in!');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            }

            console.error(error);
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <Title>Join the hub!</Title>

            <Input 
                placeholder='First Name' 
                value={value.firstname}
                onChangeText={(val: string) => setValue({ ...value, firstname: val})}
            />
            <Input 
                placeholder='Last Name' 
                value={value.lastname}
                onChangeText={(val: string) => setValue({ ...value, lastname: val})}
            />
            <Input 
                placeholder='Email' 
                value={value.email}
                keyboardType='email-address' 
                onChangeText={(val: string) => setValue({ ...value, email: val})}
            />
            <Input 
                placeholder='Password' 
                value={value.password}
                secureTextEntry 
                onChangeText={(val: string) => setValue({ ...value, password: val})}
            />
            <Input 
                placeholder='Confirm Password' 
                value={value.confirm_password}
                secureTextEntry 
                onChangeText={(val: string) => setValue({ ...value, confirm_password: val})}
            />

            <View style={styles.row}>
                <Checkbox checked={agreed} onPress={onCheckboxPress} />

                <Text style={styles.agreeText}>
                    I agree to {' '}
                    <Text 
                        style={styles.link} 
                        onPress={() => onLinkPress(PRIVACY_POLICY_LINK)}>
                        Terms and Conditions
                    </Text>
                    {' '} and  {' '}
                    <Text 
                        style={styles.link} 
                        onPress={() => onLinkPress(TERMS_CONDITIONS_LINK)}>
                        Privacy Policy
                    </Text>
                </Text>
            </View>
            
            <Button onPress={onSubmit} type='blue'>Create account</Button>

            <Text style={styles.footerText}>
                Already registered?
                <Text 
                    onPress={() => {navigation.navigate('Signin')}} 
                    style={styles.footerLink}>
                    {' '}
                    Sign in!
                </Text>
            </Text>
        </SafeAreaView>
    )
}

export default React.memo(Signup4); 
