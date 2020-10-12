import { StyleSheet } from 'react-native';
import Color from "../../../core/constant/Color";

const BaseStyles = StyleSheet.create({
    main: {
        padding: 10,
        borderRadius: 3,
    },
    label: {
        color: '#fff',
        textAlign:"center",
        fontWeight:"bold"
    },
    rounded: {
        borderRadius: 20,
    },
});

const Danger = StyleSheet.create({
    main: {
        backgroundColor: '#e74c3c',
    },
});

const Info = StyleSheet.create({
    main: {
        backgroundColor: Color.TabActive,
    },
});

const Success = StyleSheet.create({
    main: {
        backgroundColor: 'green',
    },
});

const Default = StyleSheet.create({
    main: {
        backgroundColor: 'rgba(0 ,0 ,0, 0)',
    },
    label: {
        color: '#333',
    },
});

export default BaseStyles;
export {
    Danger,
    Info,
    Success,
    Default,
};