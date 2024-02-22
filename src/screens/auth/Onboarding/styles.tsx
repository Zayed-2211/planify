import { StyleSheet, Dimensions } from "react-native";
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: height*.7,
    }, 
    title: {
        fontSize: 22,
        color: 'rgba(23, 49, 71, 1)',
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 20,
    }, 
    subtitle: {
        fontSize: 15,
        color: 'rgba(139, 151, 168, 1)',
        fontWeight: '400',
        textAlign: 'center',
        marginBottom: 32,
    },
    content: {
        padding: 48,
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
})

export default styles;