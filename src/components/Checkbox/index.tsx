import React from "react";
import { Pressable, View } from "react-native";
import styles from './styles';

const Checkbox = ({ checked, onPress }: { checked: any, onPress: any }) => {
    return (
        <Pressable 
            onPress={onPress} 
            style={[styles.container, checked ? styles.checked : {}]}>
            {checked ? ( <View style={styles.innerSquare} /> ) : null}
        </Pressable>
    )
}

export default React.memo(Checkbox); 