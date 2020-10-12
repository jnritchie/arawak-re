import React from "react";
import {View, StyleSheet,Image,Text} from 'react-native';
import CoreEngine from "../../core/CoreEngine";
import RowInput from "../../component/global/RowInput"
import {center} from "../../core/constant/ConstantStyle"
import Button from "../../component/global/Button";
import Heading from "../../component/global/Heading";
class AddDetails extends CoreEngine {

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
            }}><Text >Add</Text></View>
        )
    });



    render() {

        return (
            <View style={{flex:1,backgroundColor:"#F7F8FA",}} >

                <Heading title={"Basic Information"} style={{textAlign:"center"}} />
                <View style={{flex:1,height:200}}>
                    <RowInput placeholder={"Name"} />
                    <RowInput placeholder={"Address"} />
                    <RowInput placeholder={"Contact Email"} />
                    <RowInput placeholder={"Description"} />
                </View>
                <View style={{flex:1,...center}}>
                    <Button info rounded style={{width:300}} onPress={()=>this.goToScreen("address")} > Select Address  </Button>
                    <Button info rounded style={{width:300,marginTop:10}} > Save </Button>
                </View>


            </View>
        );
    }
}

export default AddDetails

