import React from "react";
import {View, FlatList,Text} from 'react-native';
import CoreEngine from "../../core/CoreEngine";
import MessageItem from "../../component/partial/MessageItem"
import demo1 from "../../assets/data/demo1"

import ProfileHeader from "../../component/partial/ProfileHeader"
import Heading from "../../component/global/Heading";
class Account extends CoreEngine {

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
            }}><Text >Profile</Text></View>
        )
    });



    handleClick(item){
        console.warn("handleClick ");
    }

    handleColmn(item) {
        return <MessageItem  cadreWidth={200} cadreHeight={210} imageHeight={150}  item={item} onPress={(i) => this.handleClick(i)} onPressatc={(i) => this.handleClickatc(i)}/>
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:"#F7F8FA"}} >
                <ProfileHeader/>
                <Heading title={"My offers"} style={{fontWeight:"bold",paddingLeft:10}} />
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

export default Account

