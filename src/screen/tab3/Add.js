import React from "react";
import {FlatList,SafeAreaView,TouchableOpacity} from 'react-native';
import CoreEngine from "../../core/CoreEngine";
import {center,width} from "../../core/constant/ConstantStyle"
import CardView from 'react-native-cardview'
import Color from "../../core/constant/Color";
import addicons from "../../assets/data/addicons"
import Heading from "../../component/global/Heading"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
class Add extends CoreEngine {

    handleClick(item){
        this.goToScreen("details")

    }

    handleColmn(item) {
        return <TouchableOpacity onPress={() => this.handleClick(item)}><CardView
            cardElevation={2}
            cardMaxElevation={100}
            cornerRadius={10} elevation={40} style={{backgroundColor:"white",width:(width-40)/2,...center,margin:10,height:150}}>
            <FontAwesome name={item.icon} size={60} style={{color: Color.main}}/>
            <Heading title={item.title}/>
        </CardView></TouchableOpacity>
    }

    render() {


        return (

            <SafeAreaView style={{flex:1,backgroundColor:Color.bg,paddingLeft: 8}} >

                <Heading style={{margin:10,marginTop:25,textAlign:"left",fontSize:30}} title={"What kind of property you want to list?"} />
                <FlatList
                    data={addicons}
                    keyExtractor={(item, index) => item.id}
                    numColumns={2}
                    renderItem={({item}) => this.handleColmn(item)}
                />


            </SafeAreaView>
        );
    }
}

export default Add

