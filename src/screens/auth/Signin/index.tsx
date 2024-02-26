import React, { useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import auth from '@react-native-firebase/auth';
import styles from './styles';
import Button from "../../../components/Button";
import Title from "../../../components/Title";
import Input from "../../../components/Input";

const Signin = ({navigation}: {navigation:any}) => {
    const [value, setValue] = useState({
        email: '',
        password: ''
    });

    const onSubmit = () => {
        auth()
        .signInWithEmailAndPassword(value.email, value.password)
        .then(() => {
          console.log('User account signed in!');
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
            <Title>Welcome back!</Title>

            <Input 
                placeholder='Email' 
                value={value.email}
                keyboardType='email-address' 
                onChangeText={(val: string) => setValue({ ...value, email: val })}
            />
            <Input 
                placeholder='Password' 
                value={value.password}
                secureTextEntry 
                onChangeText={(val: string) => setValue({...value, password: val}) } 
            />
            <View style={styles.button}>
                <Button onPress={onSubmit} type>Login</Button>
            </View>
            
            <View>
                <Text style={styles.footerText}>
                    Not registered?
                    <Text 
                        onPress={() => {navigation.navigate('Signup')}} 
                        style={styles.footerLink}>
                        {' '}
                        Sign up!
                    </Text>
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Signin); 
