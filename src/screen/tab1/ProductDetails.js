import React from "react";
import {View,  StyleSheet,Text,ScrollView} from 'react-native';
import CoreEngine from "../../core/CoreEngine";
import Cadres from "../../component/global/Cadres"
import Banner from "../../component/global/Banner"
import Button from "../../component/global/Button"
import Heading from "../../component/global/Heading"
import ProfileHeader from "../../component/partial/ProfileHeader"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Cadre from "../../component/global/Cadre"
import demo1 from "../../assets/data/demo1"
import demo2 from "../../assets/data/demo2"
import Color from "../../core/constant/Color";
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

import Seperator from "../../component/global/Seperator";
class ProductDetails extends CoreEngine {

    constructor(props) {
        super(props);
        this.state = {
        coordinate: {latitude: 37.78825, longitude: -122.4324 }
        };
    }



    handleClick(item){
        console.warn("handleClick ");
    }


    handleColmn(item) {
        return <Cadre  cadreWidth={200} cadreHeight={210} imageHeight={150}  item={item} onPress={(i) => this.handleClick(i)} onPressatc={(i) => this.handleClickatc(i)}/>
    }

    renderMiniInfoHead(info1,info2) {

        return <View style={{flex:1,flexDirection: 'row',}}>
            <View style={{flex: 1}}>
                <Text style={styles.miniinfohead} >{info1}</Text>
            </View>
            <View style={{flex: 1}}>
                <Text style={styles.miniinfohead} >{info2}</Text>
            </View>
        </View>
    }

    renderStickyFooter() {

        return <View style={styles.stickFooter}>
            <View style={{flex: 1}}>
                <FontAwesome.Button
                    name="send"
                    backgroundColor={Color.main2}
                >
                    Make Offer
                </FontAwesome.Button>
            </View>
            <View style={{flex: 1,flexDirection:"row", justifyContent: 'space-between',marginLeft:10}}>
                <FontAwesome.Button
                    name="phone"
                    iconStyle={{paddingLeft:10}}
                    backgroundColor={Color.mainblack}
                />
                <FontAwesome.Button
                    iconStyle={{paddingLeft:10}}
                    name="comment"
                    backgroundColor={Color.main}
                />
                <FontAwesome.Button
                    name="ellipsis-h"
                    iconStyle={{paddingLeft:10}}
                    backgroundColor={Color.mainblacklite}
                />



            </View>
        </View>
    }

    renderMiniInfo(info1,info2) {

        return <View style={{flex:1,flexDirection: 'row',}}>
            <View style={{flex: 1}}>
                <Text style={styles.miniinfo} >{info1}</Text>
            </View>
            <View style={{flex: 1}}>
                <Text style={styles.miniinfo} >{info2}</Text>
            </View>
        </View>
    }


    render() {
        const {coordinate} = this.state

        return (
            <View style={{flex:1,backgroundColor:Color.bg}}>
                <ScrollView  >
                    <Button  onPress={() => this.props.navigation.goBack()}  style={{margin:10,position:"absolute",zIndex:99,top:20}} ><FontAwesome name="chevron-left" style={{color: Color.main}}  size={20} /></Button>

                    <View style={{height: 260, backgroundColor: "white"}}>
                        <Banner items={demo2} height={260} showdots={true} onPress={(item) => this.handleClickcat(item)} />
                    </View>

                    <View style={{flex:1,flexDirection: 'row'}}>
                        <View style={{flex: 1}}>
                            <Text style={styles.price} numberOfLines={1} ellipsizeMode='tail'>$ 10,000</Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Button  info style={{margin:10}} >Find a broker</Button>
                        </View>
                    </View>
                    <Text style={styles.desc} >
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua
                    </Text>



                    {this.renderMiniInfo("Posted on June , 12, 2019","Views (332)")}


                    <Seperator />
                    <Heading title={"Location : new york , tenesi"} />

                    <View style={styles.mapContainer}>
                    <MapView
                        style={styles.map}
                        ref={ref => {this.map = ref;}}
                       // minZoomLevel={4}  // default => 0
                      //  maxZoomLevel={10} // default => 20
                        enableZoomControl={true}
                       // showsUserLocation = {true}
                      //  showsMyLocationButton = {true}
                        zoomEnabled = {true}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >


                        <Marker
                            coordinate={coordinate}
                            title={"Home"}
                            description={"location"}
                        >
                            <FontAwesome name="map-marker" style={{color: Color.main}}  size={40} />
                        </Marker>
                    </MapView>
                    </View>


                    {this.renderMiniInfoHead("Apartment","3")}
                    {this.renderMiniInfo("Property style","Bedrooms")}
                    {this.renderMiniInfoHead("2","1 990 sqft")}
                    {this.renderMiniInfo("Bathromms","Footage")}
                    {this.renderMiniInfoHead("5 of 25","Panel")}
                    {this.renderMiniInfo("Floor","4")}
                    <Seperator />

                    <ProfileHeader/>

                    <Seperator />
                    <View style={{height: 230,marginBottom:100}}>
                        <Cadres items={demo1} title="Similar postings" cadreWidth={290} cadreHeight={190} imageHeight={130} onPress={(item) => this.handleClick(item)} />
                    </View>





                </ScrollView>
                {this.renderStickyFooter()}
            </View>
        );
    }
}

export default ProductDetails


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 0,
        paddingBottom: 100
    },

    price: {
        fontSize :20,
        color:Color.mainblack,
        fontWeight:"bold",
        margin:15,
        textAlign:"center"
    },
    desc: {
        fontSize :18,
        color:Color.mainblack,
        margin:15,
    },
    loginForm: {},
    inputWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        //borderColor: '#9B9B9B',
        //borderBottomWidth: 1,
    },
    input: {
        borderColor: '#9B9B9B',
        height: 40,
        marginTop: 10, marginLeft: 10,
        paddingHorizontal: 10, paddingTop: 0, paddingBottom: 8,
        flex: 1,
        textAlign: "right"
    },
    loginButton: {
        marginTop: 20,
        backgroundColor: 'blue',
        borderRadius: 5,
        elevation: 1,
    },
    separatorWrap: {
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    separator: {
        borderBottomWidth: 1,
        flexGrow: 1,
        borderColor: '#9B9B9B',
    },
    miniinfo: {
        color: '#9B9B9B',
        fontSize: 15,
        padding:12,
        textAlign:"left"
    },
    miniinfohead: {
        color: Color.mainblack,
        fontWeight:"bold",
        fontSize: 15,
        padding:12,
        textAlign:"left"

    },

    signUp: {
        color: 'black',
        marginTop: 20,
    },
    highlight: {
        fontWeight: 'bold',
    },

    mapContainer: {
        height: 200,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    stickFooter:{
        flex:1,
        flexDirection: 'row',
        width: '100%',
        backgroundColor:"white",
        padding:10,
        borderColor:Color.mainblack,
        borderTopWidth:1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },


});