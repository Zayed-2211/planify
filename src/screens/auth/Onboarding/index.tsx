import React from "react";
import { Image, View, Text } from "react-native";
import styles from './styles';
import Button from "../../../components/Button";

const onPress = () => {}

const Onboarding = () => {
    return (
        <View style={styles.container}>
            <View style={{flex:1}}>
                <Image 
                    style={styles.image} 
                    source={require('../../../assets/onboarding.jpg')} 
                />

                <View style={styles.footer} />
            </View>


            <View style={styles.content}>
                <Text style={styles.title}>Best task management app</Text>
                <Text style={styles.subtitle}>
                    Get organized by sorting out all your tasks and boost your productivity.
                </Text>
                <Button onPress>Log in</Button>
                <Button onPress>Get Started</Button>
            </View>
        </View>
    )
}

export default React.memo(Onboarding); 
