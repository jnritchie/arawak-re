import React from "react";
import {View,  FlatList,Text} from 'react-native';
import CoreEngine from "../../core/CoreEngine";
import Cadre from "../../component/global/Cadre"
import demo1 from "../../assets/data/demo1"

import {width} from "../../core/constant/ConstantStyle"
class Favorites extends CoreEngine {


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
            }}><Text >Favorites</Text></View>
        )
    });

    constructor(props) {
        super(props);
        this.state = {};
    }



    handleClick(item){
        console.warn("handleClick ");
    }

    handleColmn(item) {
        return <Cadre  cadreWidth={(width-20)/2} cadreHeight={210} imageHeight={150}  item={item} onPress={(i) => this.handleClick(i)} onPressatc={(i) => this.handleClickatc(i)}/>
    }

    render() {


        return (
            <View style={{flex:1,backgroundColor:"#F7F8FA"}} >

                <FlatList
                    data={demo1}
                    keyExtractor={(item, index) => item.id}
                    numColumns={2}
                    renderItem={({item}) => this.handleColmn(item)}
                />


            </View>
        );
    }
}

export default Favorites
