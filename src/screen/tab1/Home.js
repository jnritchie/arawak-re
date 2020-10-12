import React from "react";
import {View,SafeAreaView,FlatList,ScrollView} from 'react-native';
import CoreEngine from "../../core/CoreEngine";
import Cadres from "../../component/global/Cadres"
import RowSearch from "../../component/global/RowSearch"
import Heading from "../../component/global/Heading"
import Cadre from "../../component/global/Cadre"
import demo1 from "../../assets/data/demo1"
import demo2 from "../../assets/data/demo2"
import Color from "../../core/constant/Color";

class Home extends CoreEngine {

    getDataUsingGet(){
        //GET request 
        fetch('https://arawak.app/wp-json/wp/v2/property', {
            method: 'GET'
            //Request Type 
        })
        .then((response) => response.json())
        //If response is in json then in success
        .then((responseJson) => {
            //Success 
            //alert(JSON.stringify(responseJson));
            alert("success");
            //console.log(responseJson);
            //let arawak = hello;
            this.setState({arawak: responseJson});
            console.log(this.state.arawak);

        })
        //If response is not in json then in error
        .catch((error) => {
            //Error 
            //alert(JSON.stringify(error));
            alert("fail");
            console.error(error);
        });
    }

    componentDidMount() {
        this.getDataUsingGet();
    }

    handleClick(item){
        this.goToScreen("productFromHome")
    }


    handleColmn(item) {
        return <Cadre  cadreWidth={200} cadreHeight={210} imageHeight={150}  item={item} onPress={(i) => this.handleClick(i)} onPressatc={(i) => this.handleClickatc(i)}/>
    }

    onPressSearch(e){

        this.goToScreen("search")
    }
    render() {

        return (
            <SafeAreaView style={{flex:1,backgroundColor:Color.bg,paddingLeft: 8}} >
                <RowSearch onPressSearch={this.onPressSearch.bind(this)} />
                <ScrollView>
                <View style={{height: 230}}>
                    <Cadres items={this.arawak} title="Top Listings" cadreWidth={290} cadreHeight={190} imageHeight={130} onPress={(item) => this.handleClick(item)} />
                </View>

                    <Heading style={{margin:10,marginTop:25,textAlign:"left"}} title={"New Postings"} />

                <FlatList
                    data={demo1}
                    keyExtractor={(item, index) => item.id}
                    numColumns={2}
                    renderItem={({item}) => this.handleColmn(item)}
                />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default Home
