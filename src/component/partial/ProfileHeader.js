import React       from 'react';


import { View,  Image, StyleSheet,Text } from 'react-native'
import Color from "../../core/constant/Color";

const fontFamily = Platform.OS === 'ios' ? 'Avenir' : 'sans-serif'

function ProfileHeader({}) {

    return   <View style={styles.heroContainer}>
        <Image  source={{uri: 'https://i.ytimg.com/vi/4e18ocSTwCo/mqdefault.jpg'}}  style={styles.heroImage} />
        <View style={{ flex: 1 }}>
            <Text style={styles.heroTitle}>Joe Doe</Text>
            <Text style={styles.heroSubtitle}>Member since 28.Jan 2019</Text>
        </View>

    </View>;

}


export default ProfileHeader;


const styles = StyleSheet.create({
    heroContainer: {
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        flexDirection: 'row',
    },
    heroImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: Color.main,
        marginHorizontal: 20,
    },
    heroTitle: {
        fontFamily,
        color: 'black',
        fontSize: 24,
    },
    heroSubtitle: {
        fontFamily,
        color: '#999',
        fontSize: 14,
    },
})