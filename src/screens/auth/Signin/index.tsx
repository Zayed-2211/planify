import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import styles from './styles';
import Button from "../../../components/Button";
import Title from "../../../components/Title";
import Input from "../../../components/Input";

const Signin = ({navigation}: {navigation:any}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Title>Welcome back!</Title>

            <Input placeholder='Email' keyboardType='email-address' />
            <Input placeholder='Password' secureTextEntry />
            <View style={styles.button}>
                <Button onPress type>Login</Button>
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
