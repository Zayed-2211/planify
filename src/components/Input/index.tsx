import React from "react";
import { TextInput } from "react-native";
import styles from './styles';
import colors from '../../constants/colors'

const Input = ({...props}) => {
    return (
        <TextInput
            style={styles.input}
            placeholderTextColor={colors.midGrey}
            {...props}
        />
    )
}

export default React.memo(Input);