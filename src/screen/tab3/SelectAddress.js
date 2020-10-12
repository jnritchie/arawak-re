import React from "react";
import {View, StyleSheet,Text} from 'react-native';
import CoreEngine from "../../core/CoreEngine";
import { Marker } from 'react-native-maps';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MapView from 'react-native-maps';

import Color from "../../core/constant/Color";
import Button from "../../component/global/Button";
class SelectAddress extends CoreEngine {

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
            }}><Text >Specify address</Text></View>
        )
    });

    constructor(props) {
        super(props);
        this.state = {
            coordinate: {latitude: 37.78825, longitude: -122.4324 }
        };
    }


    onDragEnd=(e) => {
        this.setState({ coordinate: e.nativeEvent.coordinate });
    }


    render() {
        const {coordinate} = this.state
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
                        draggable
                        coordinate={coordinate}
                        onDragEnd={this.onDragEnd}
                        title={'You are here'}
                        description={"Please Drag the Marker to your location"}
                    >
                        <FontAwesome name="map-marker" style={{color: Color.main}}  size={40} />
                    </Marker>
                </MapView>

                <View style={styles.stickFooter}>
                    <Button info style={{width:200}}> Save Address </Button>
                </View>

            </View>
        );
    }
}

export default SelectAddress


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
        bottom: 20
    },
});