import React       from 'react';
import CardView from 'react-native-cardview'
import { View,  Image, StyleSheet,Text,TouchableOpacity } from 'react-native'
import Color from "../../core/constant/Color";


function MessageItem({
                      item      ,
                         onPress
                  }) {

    return  <TouchableOpacity onPress={() => onPress(item)}><CardView cardElevation={2}
        cardMaxElevation={100}
        cornerRadius={10} elevation={40} style={styles.container}>
        <View style={{flex: 1}}>
            <Image
                style={{width: "100%", height:90,margin:10,borderRadius:10}}
                source={{uri: item.img}}
            />
        </View>
        <View style={{flex: 3,padding:20}}>

            <View style={{flex:1,flexDirection: 'row'}}>
            <View style={{flex: 3}}>
                <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{item.title}</Text>
            </View>
            <View style={{flex: 1}}>
                <Text style={styles.time} numberOfLines={1} ellipsizeMode='tail'>{item.time}</Text>
            </View>
            </View>

            <Text style={styles.price} numberOfLines={1} ellipsizeMode='tail'>{item.price}</Text>
            <Text style={styles.desc}  ellipsizeMode='tail'>{item.desc}</Text>

        </View>
    </CardView></TouchableOpacity>;

}


export default MessageItem;


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

    price: {
        fontSize :13,
        color:Color.mainblack,
        paddingTop:5,
        height:20
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