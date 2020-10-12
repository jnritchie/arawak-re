import {StyleSheet} from "react-native";
import Config from "./constant/Config";
import Color from "./constant/Color";

export default StyleSheet.create({
    titleHeader: {
        color: '#696D77',
        fontSize: 20,
        textAlign: 'left',
        margin: 10
    },
    titleLink: {
        color: '#078EF8',
        fontSize: 13,
        textAlign: 'right',
        margin: 5
    },
    viewRowRight: {
        flexDirection: 'row',
        justifyContent: "flex-end"
    },
    viewCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },

})