import React from "react";
import { View, Image, Pressable } from "react-native";
import styles from './styles';
import { useNavigation } from "@react-navigation/native";

const PlusIcon = () => {
    const navigation: any = useNavigation()

    const addTask = () => {
        navigation.navigate('AddTask')
    }

    return (
        <Pressable onPress={addTask} hitSlop={8} style={styles.container}>
                <Image style={styles.icon} source={require('../../assets/plus.jpg')} />
        </Pressable>
    )
}

export default React.memo(PlusIcon); 