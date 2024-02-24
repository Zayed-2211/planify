import { StyleSheet, } from "react-native";
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.purple,
        borderRadius: 3,
        width: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8
    },
    innerSquare: {
        backgroundColor: colors.purple,
        borderRadius: 1,
        width: 8,
        height: 8,
    },
    checked: {
        borderWidth: 2,
    },
})

export default styles;
