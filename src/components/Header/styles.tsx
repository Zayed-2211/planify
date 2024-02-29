import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        marginVertical: 20,

        
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.purple
    },
    icon: {
        width: 24,
        height: 24,
    }
})

export default styles;

