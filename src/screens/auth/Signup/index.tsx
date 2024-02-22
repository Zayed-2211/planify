import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import styles from './styles';
import Button from "../../../components/Button";
import Title from "../../../components/Title";
import Input from "../../../components/Input";

const Signup = ({navigation}: {navigation:any}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Title>Join the hub!</Title>

            <Input placeholder='First Name' />
            <Input placeholder='Last Name' />
            <Input placeholder='Email' keyboardType='email-address' />
            <Input placeholder='Password' secureTextEntry />
            <Input placeholder='Confirm Password' secureTextEntry />
            
            <Button onPress type='blue'>Create account</Button>
            
            
            <View>
                <Text style={styles.footerText}>
                    Already registered?
                    <Text 
                        onPress={() => {navigation.navigate('Signin')}} 
                        style={styles.footerLink}>
                        {' '}
                        Sign in!
                    </Text>
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Signup); 
