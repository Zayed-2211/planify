import { StyleSheet, } from "react-native";
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    footerText: {
        textAlign: 'center', 
        fontSize: 15,
        color: colors.grey,
        marginTop: 30
    },
    footerLink: {
        fontWeight: 'bold',
        color: colors.purple,
    },
    row: {
        marginTop: 10,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'

    },
    agreeText: {
        textAlign: 'center', 
        fontSize: 13,
        color: colors.grey,
    }, 
    link: {
        color: colors.midGrey,
        textDecorationLine: 'underline'
    }

})

export default styles;