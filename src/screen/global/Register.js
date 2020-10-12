import React from "react";
import {View,Text} from 'react-native';
import CoreEngine from "../../core/CoreEngine";
import RowInput from "../../component/global/RowInput"
import {center} from "../../core/constant/ConstantStyle"
import Button from "../../component/global/Button";
import Heading from "../../component/global/Heading";
class Register extends CoreEngine {

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
            }}><Text >Register</Text></View>
        )
    });



    render() {

        return (
            <View style={{flex:1,backgroundColor:"#F7F8FA",}} >

                <Heading title={"Sign up"} style={{textAlign:"center"}} />
                <View style={{flex:1,height:200}}>
                    <RowInput placeholder={"Full Name"} />
                    <RowInput placeholder={"Age"} />
                    <RowInput placeholder={"Email"} />
                    <RowInput placeholder={"Password"} secureTextEntry={true} />
                    <RowInput placeholder={"Confirm Password"} secureTextEntry={true} />
                </View>
                <View style={{flex:1,...center}}>
                    <Button info rounded style={{width:300,}} > Create an account </Button>
                </View>


            </View>
        );
    }
}

export default Register

