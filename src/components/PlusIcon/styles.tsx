import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: colors.blue,
        width: 48,
        height: 48,
        position: 'absolute',
        bottom: 24,
        right: 24
    },
    icon: {
        width: 14,
        height: 14
    }
})

export default styles;

