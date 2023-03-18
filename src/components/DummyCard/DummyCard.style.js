import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },
    image: {
        height: Dimensions.get('screen').height/ 4,
        width: Dimensions.get('screen').width/1.25,
        resizeMode : 'contain',

    },
    image_view: {
        alignItems: 'center'
    },
    text_container: {
        padding: 10,
        
    },
    price: {
        color: 'red',
    },
    content_container: {
        alignItems: 'center',
        margin: 5
    },
    text: {
        fontSize: 20,
        color: 'black'
    }

})