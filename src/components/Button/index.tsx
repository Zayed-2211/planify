import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from './styles';

const Button = ({onPress, children}: {onPress: any, children: any}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    )
}

export default React.memo(Button); 