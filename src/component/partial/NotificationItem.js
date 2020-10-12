import React       from 'react';

import CardView from 'react-native-cardview'
import { View,  Image, StyleSheet,Text } from 'react-native'
import Color from "../../core/constant/Color";

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import messages from "../../assets/data/demo1"
function NotificationItem({item}) {

    const index1  = Math.floor(Math.random() * 8) + 1
    const index2  = Math.floor(Math.random() * 8) + 1
    const index3  = Math.floor(Math.random() * 8) + 1

    return  <CardView cardElevation={2}
                      cardMaxElevation={100}
                      cornerRadius={10} elevation={40} style={styles.container}>
        <View style={{flex: 1}}>
            <FontAwesome name={item.icon} size={60} style={{color: Color.main,padding:25}}/>
        </View>
        <View style={{flex: 3,padding:20}}>

            <View style={{flex:1,flexDirection: 'row',height:20}}>
                <View style={{flex: 3}}>
                    <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{item.title}</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.time} numberOfLines={1} ellipsizeMode='tail'>{item.time}</Text>
                </View>
            </View>
            <View style={{flex:1,flexDirection: 'row'}}>
                <Image  style={styles.miniImage} source={{uri: messages[index1].img}} />
                <Image  style={styles.miniImage} source={{uri: messages[index2].img}} />
                <Image  style={styles.miniImage} source={{uri: messages[index3].img}} />
            </View>


        </View>
    </CardView>;

}


export default NotificationItem;


const styles = StyleSheet.create({
    container: {
        height:120,
        backgroundColor:"white",
        flex: 1,
        margin:5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start' // if you want to fill rows left to right
    },
    title: {
        fontSize :15,
        color:Color.mainblack,
        fontWeight:"bold",
        height:20
    },

    miniImage: {
        width: 50,
        height:50,
        margin:3,
        borderRadius:10
    },
    desc: {
        fontSize :12,
        color:Color.mainblack,
        paddingTop:10,
        height:40
    },
    time: {
        fontSize :10,
        color:Color.mainblack,
        paddingTop:2,
        textAlign:"right"
    },
})