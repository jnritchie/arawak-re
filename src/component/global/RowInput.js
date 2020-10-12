import React       from 'react';
import Color from "../../core/constant/Color";
import { View,  TextInput, StyleSheet } from 'react-native'

function RowInput({
                       placeholder       = 'Email',
                      secureTextEntry = false

                   }) {
    return  <View>
        <TextInput style = {styles.input}
                   underlineColorAndroid = "transparent"
                   placeholder = {placeholder}
                   secureTextEntry={secureTextEntry}
                   placeholderTextColor = {Color.mainlite}
                   autoCapitalize = "none"
        /></View>;

}


export default RowInput;

const styles = StyleSheet.create({
    input: {
        margin: 10,
        height: 50,
        borderColor: Color.mainblacklite,
        backgroundColor: 'white',
        borderRadius:20,
        borderWidth: 1,
        padding:13,
    },
})