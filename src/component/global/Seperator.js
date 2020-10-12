import React from "react";
import {StyleSheet, View} from 'react-native';
import Color from "../../core/constant/Color";

class Seperator extends React.PureComponent {


    render() {
        return <View style={[styles.seperator]}  />;
    }
}

export default Seperator

const styles = StyleSheet.create({
    seperator: {
        backgroundColor:Color.mainblack,
        height:1,
        margin:8,
    }
})