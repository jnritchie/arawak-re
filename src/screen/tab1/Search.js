import React from "react";
import {View, StyleSheet,Text} from 'react-native';
import CoreEngine from "../../core/CoreEngine";
import { Marker } from 'react-native-maps';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MapView from 'react-native-maps';

import Color from "../../core/constant/Color";

import Cadres from "../../component/global/Cadres"
import demo1 from "../../assets/data/demo1"
class Search extends CoreEngine {

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
            }}><Text >Result</Text></View>
        )
    });

    constructor(props) {
        super(props);
        this.state = {
            coordinate: {latitude: 37.78825, longitude: -122.4324 },
            coordinate2: {latitude: 37.78703, longitude: -122.4124 },
            coordinate3: {latitude: 37.78805, longitude: -122.4220 },
            coordinate4: {latitude: 37.78720, longitude: -122.4311 }

        };
    }


    onDragEnd=(e) => {
        this.setState({ coordinate: e.nativeEvent.coordinate });
    }


    render() {
        const {coordinate,coordinate2,coordinate3,coordinate4} = this.state
        return (
            <View style={styles.mapContainer}>
                <MapView
                    style={styles.map}
                    ref={ref => {this.map = ref;}}
                    enableZoomControl={true}
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
                        onDragEnd={this.onDragEnd}
                        title={'Location 1 '}
                        description={"Location Description.."}
                    >
                        <FontAwesome name="map-marker" style={{color: Color.main}}  size={40} />
                    </Marker>

                    <Marker

                        coordinate={coordinate2}
                        onDragEnd={this.onDragEnd}
                        title={'Location 2 '}
                        description={"Location Description.."}
                    >
                        <FontAwesome name="map-marker" style={{color: Color.main}}  size={40} />
                    </Marker>


                    <Marker

                        coordinate={coordinate3}
                        onDragEnd={this.onDragEnd}
                        title={'Location 3 '}
                        description={"Location Description.."}
                    >
                        <FontAwesome name="map-marker" style={{color: Color.main}}  size={40} />
                    </Marker>

                    <Marker

                        coordinate={coordinate4}
                        onDragEnd={this.onDragEnd}
                        title={'Location 4 '}
                        description={"Location Description.."}
                    >
                        <FontAwesome name="map-marker" style={{color: Color.main}}  size={40} />
                    </Marker>
                </MapView>

                <View style={styles.stickFooter}>
                        <Cadres items={demo1} title="" cadreWidth={290} cadreHeight={190} imageHeight={130}  />
                </View>

            </View>
        );
    }
}

export default Search


const styles = StyleSheet.create({

    mapContainer: {
        height: "100%",
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    stickFooter:{
        flex:1,
        zIndex:22,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        height: 230,
        marginBottom:10
    },
});