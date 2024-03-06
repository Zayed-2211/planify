import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    iconContainer: {
        margin: 24,
    },
    icon: {
        width: 32,
        height: 32,
    },
    subtitle: {
        fontSize: 12,
        fontWeight: '500',
        marginHorizontal: 24,
        marginTop: 12,
        color: colors.black
    }
})

export default styles;