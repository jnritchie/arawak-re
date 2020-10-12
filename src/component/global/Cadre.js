import React from "react";
import {StyleSheet, Text, View, Image, TouchableWithoutFeedback} from 'react-native';

import CardView from 'react-native-cardview'
import Button from '../../component/global/Button';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Color from "../../core/constant/Color";

class Cadre extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            heart: false
        }

    }
    handleClick(i) {
        if (this.props.onPress) {
            this.props.onPress(i);
        }
    }

    render() {
        const {item,cadreWidth,cadreHeight,imageHeight,radius} = this.props;
        const {heart} = this.state
        return <CardView
            cardElevation={2}
            cardMaxElevation={100}
            cornerRadius={radius} elevation={40} style={[{margin: 5, backgroundColor: "#FFFFFF", width: cadreWidth, height: cadreHeight,   }]}>
            <TouchableWithoutFeedback onPress={() => this.handleClick(item)}>
                <View >
                    <View style={{alignItems: 'center',}}>
                        <Image
                            style={{width: cadreWidth, height:imageHeight,borderTopRightRadius:radius,borderTopLeftRadius:radius}}
                            source={{uri: item.img}}
                        />
                    </View>

                    <View style={styles.heartFixed}>
                        <Button onPress={() => this.setState({heart:!heart})}>
                            {heart && <FontAwesome name="heart" size={18} style={{color: Color.main}}/>}
                            {!heart && <FontAwesome name="heart" size={18} style={{color: "#9E9E9E"}}/>}
                        </Button>
                    </View>

                    <Text style={styles.price} numberOfLines={1} ellipsizeMode='tail'>{item.price}</Text>
                    <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{item.title.rendered}</Text>
                </View>
            </TouchableWithoutFeedback>
        </CardView>

    }
}

export default Cadre

Cadre.defaultProps = {
    item: [],
    radius: 10
}

const styles = StyleSheet.create({
    heartFixed: {
        position: "absolute",
        right:0
    },

    textView: {
        textAlignVertical: 'center',
        padding: 5,
        color: '#000',
        fontSize: 13,
        textAlign: "right"
    },
    title: {
        margin: 4,
        color: '#6f6f6f',
        fontSize: 14,
        textAlign: "left"
    },
    price: {
        margin: 4,
        color: '#6f6f6f',
        fontSize: 15,
        fontWeight:"bold",
        textAlign: "left"
    },

    btnWishList: {
        position: "absolute",
        top: 5,
        right: 5,
        zIndex: 4,
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        width: 40,
        height: 40
    }


})