import React       from 'react';


import Color from "../../core/constant/Color";
import IconButton from "./IconButton/index";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { View,  TextInput, StyleSheet } from 'react-native'


function RowSearch({
                      placeholder       = 'Search here ...',
    onPressSearch,

                 }) {


    return  <View>
        <IconButton style={{
            position:"absolute",
            zIndex:33,
            top:15,
            left:10
        }}>
        <FontAwesome name="search" size={18} style={{color: Color.main}} />
        </IconButton>

        <TextInput returnKeyType={"search"} style = {styles.input}
                       underlineColorAndroid = "transparent"
                       placeholder = {placeholder}
                       placeholderTextColor = {Color.mainlite}
                       autoCapitalize = "none"

                   onSubmitEditing={onPressSearch}
                   autoCorrect={false}
                      /></View>;

}


export default RowSearch;

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: 'white',
        backgroundColor: 'white',
        borderRadius:10,
        borderWidth: 1,
        padding:5,
        paddingLeft:30
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText:{
        color: 'white'
    }
})