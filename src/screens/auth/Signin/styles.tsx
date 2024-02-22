import { StyleSheet, } from "react-native";
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    button: {
        marginVertical: 30
    }, 
    footerText: {
        textAlign: 'center', 
        fontSize: 15,
        color: colors.grey
    },
    footerLink: {
        fontWeight: 'bold',
        color: colors.purple,
    },

})

export default styles;