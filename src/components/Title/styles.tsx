import { StyleSheet, } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'left',
        color: 'black',
        paddingTop: 24,
        paddingBottom: 24,
    },
    thin: {
        fontWeight: '300',
        color: colors.purple,
        fontSize: 24,
        paddingHorizontal: 24
    }

})

export default styles;
