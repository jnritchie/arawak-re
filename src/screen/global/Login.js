import React from "react";
import {View, StyleSheet,Image,Text} from 'react-native';
import CoreEngine from "../../core/CoreEngine";
import Images from "../../core/constant/Images"
import RowInput from "../../component/global/RowInput"
import {center} from "../../core/constant/ConstantStyle"
import Button from "../../component/global/Button";
import Icon from 'react-native-vector-icons/FontAwesome';
class Login extends CoreEngine {

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
            }}><Text >Login</Text></View>
        )
    });


    render() {

        return (
            <View style={{flex:1,backgroundColor:"#F7F8FA",}} >

                <View style={{flex:1,...center,height:300}}>
                <Image source={Images.logo} style={{width:200,height:200}}  resizeMode="contain" />
                </View>
                <View style={{flex:1,height:200}}>
                    <RowInput placeholder={"Email"} />
                    <RowInput placeholder={"Password"} secureTextEntry={true} />
                </View>
                    <View style={{flex:1,...center}}>
                    <Button info rounded style={{width:300,}} > Login </Button>
                        <Button link style={{width:300,color:"red"}} > Forget Password ? </Button>
                    </View>

                <View style={{flex:1,...center}}>
                    <Text>Don`t you have an account ?</Text>
                    <Button onPress={()=>this.goToScreen("register")} success rounded style={{width:300,marginTop:10}} > Sign up </Button>
                </View>

            </View>
        );
    }
}

export default Login
