import React from "react";
import {View, StyleSheet,FlatList,Text} from 'react-native';
import CoreEngine from "../../core/CoreEngine";
import MessageItem from "../../component/partial/MessageItem"
import demo1 from "../../assets/data/demo1"
class Messages extends CoreEngine {

    static navigationOptions = ({navigation}) => ({
        headerTitleStyle: {textAlign: 'center', alignSelf: 'center', color: 'white'},
        headerStyle: {
            backgroundColor: 'white',
        },
        headerTitle: (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}><Text >Messages</Text></View>
        )
    });


    handleClick(item){
        this.goToScreen("chatFromMsg")
    }

    handleColmn(item) {
        return <MessageItem  cadreWidth={200} cadreHeight={210} imageHeight={150}  item={item} onPress={(i) => this.handleClick(i)} />
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:"#F7F8FA"}} >

                <FlatList
                    data={demo1}
                    keyExtractor={(item, index) => item.id}
                    numColumns={1}
                    renderItem={({item}) => this.handleColmn(item)}
                />


            </View>
        );
    }
}

export default Messages
