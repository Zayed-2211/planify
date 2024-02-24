import React, {useState} from "react";
import { Linking, SafeAreaView, View, Text } from "react-native";
import styles from './styles';
import Button from "../../../components/Button";
import Title from "../../../components/Title";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import { PRIVACY_POLICY_LINK, TERMS_CONDITIONS_LINK, } from '../../../constants/links';

const onPress = () => {}

const Signup = ({navigation}: {navigation:any}) => {
    const [agreed, setAgreed] = useState(false)

    const onCheckboxPress = () => {
        setAgreed(value => !value)
    }

    const onLinkPress = (url: any) => {
        Linking.openURL(url)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Title>Join the hub!</Title>

            <Input placeholder='First Name' />
            <Input placeholder='Last Name' />
            <Input placeholder='Email' keyboardType='email-address' />
            <Input placeholder='Password' secureTextEntry />
            <Input placeholder='Confirm Password' secureTextEntry />

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
            
            <Button onPress type='blue'>Create account</Button>

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

export default React.memo(Signup); 
