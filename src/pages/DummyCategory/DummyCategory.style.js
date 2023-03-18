import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dddd',
        padding: 10,
    },
    image: {
        height: Dimensions.get('screen').height / 3,
        width: Dimensions.get('screen').width/1.25,
        resizeMode: 'contain'
    },
    image_view: {
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        fontStyle: 'italic'
    }
})