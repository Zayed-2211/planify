import React from "react";
import { TextInput } from "react-native";
import styles from './styles';
import colors from '../../constants/colors'

const OutlinedInput = ({...props}) => {
    return (
        <TextInput
            placeholderTextColor={colors.midGrey}
            {...props}
            style={styles.input}
        />
    )
}

export default React.memo(OutlinedInput);