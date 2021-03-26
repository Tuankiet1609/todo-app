import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content: {
        flex: 1,
        paddingHorizontal: 16,
        marginTop: 16
    },
    text: {
        fontSize: 17,
        maxWidth: 250
    },
    row: {
        height: 40,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,.1)',
    },
    total: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    footer: {
        width: '100%',
        marginTop: 70
    },
    button: {
        backgroundColor: '#24A6D9',
        marginHorizontal: 16,
        height: 40,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 7,
        paddingHorizontal: 8
    },
    header: {
        marginBottom: 5
    },
    inputGroup: {
        marginTop: 20
    },
    addButton: {
        height: 40,
        width: '100%',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#24A6D9',
        borderStyle: 'dashed',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputTodo: {
        marginTop: 10
    },
    divider: {
        backgroundColor: "#A7CBD9",
        height: 1,
        flex : 1,
        alignSelf: "center",

    },
    titlet: {
        color:"#2D3436",
        fontSize: 30,
        paddingHorizontal: 48,
        fontWeight: "800",
    },
})

export default styles;