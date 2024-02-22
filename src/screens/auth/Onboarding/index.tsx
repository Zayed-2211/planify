import React from "react";
import { Image, View, Text } from "react-native";
import styles from './styles';
import Button from "../../../components/Button";

const Onboarding = ({navigation}: {navigation:any}) => {
    
    return (
        <View style={styles.container}>
            <Image 
                style={styles.image} 
                source={require('../../../assets/onboarding.jpg')} 
            />

            <View style={styles.content}>
                <Text style={styles.title}>Best task management app</Text>
                <Text style={styles.subtitle}>
                    Get organized by sorting out all your tasks and boost your productivity.
                </Text>
                <Button onPress={() => navigation.navigate('Signin')} type>Log in</Button>
                <Button onPress={() => navigation.navigate('Signup')} type={'blue'}>Get Started</Button>
            </View>
        </View>
    )
}

export default React.memo(Onboarding); 
