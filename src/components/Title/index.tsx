import React from "react";
import { Text } from "react-native";
import styles from './styles';

const Title = ({ children, type }: { children: any, type: any }) => {
    return (
        <Text style={[styles.title, type === 'thin'? styles.thin : {}]}>{children}</Text>
    )
}

export default React.memo(Title); 