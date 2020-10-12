import React from "react";
import {View,  FlatList,Text} from 'react-native';
import CoreEngine from "../../core/CoreEngine";
import NotificationItem from "../../component/partial/NotificationItem"
import messages from "../../assets/data/demo1"
class Notifications extends CoreEngine {

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
            }}><Text >Notifications</Text></View>
        )
    });


    handleClick(item){
        console.warn("handleClick ");
    }

    handleColmn(item) {
        return <NotificationItem  item={item} onPress={(i) => this.handleClick(i)} onPressatc={(i) => this.handleClickatc(i)}/>
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:"#F7F8FA"}} >
                <FlatList
                    data={messages}
                    keyExtractor={(item, index) => item.id}
                    numColumns={1}
                    renderItem={({item}) => this.handleColmn(item)}
                />
            </View>
        );
    }
}

export default Notifications

