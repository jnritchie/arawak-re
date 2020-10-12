import React from "react";
import {StyleSheet, Image, View, TouchableWithoutFeedback,Platform} from 'react-native';
import Swiper from 'react-native-swiper';
import Config from "../../core/constant/Config";
import Color from "../../core/constant/Color";

class Banner extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    handleClick(i) {
      //  console.warn(i);
        if (this.props.onPress) {
            this.props.onPress(i);
        }

    }

    render() {
        const {items, height,showdots} = this.props;

        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Swiper showsButtons={false} style={styles.wrapper} dotStyle={!showdots && {width: 0}} activeDotColor={Color.main} activeDotStyle={!showdots && {width: 0}}>
                    {items && items.map((item, index) =>
                        <TouchableWithoutFeedback key={item.id} onPress={() => this.handleClick(item)}>
                            <Image
                                style={{width: Config.Window.width, height: height}}
                                source={{uri: item.img}}
                                resizeMode='cover'
                            />
                        </TouchableWithoutFeedback>
                    )}
                </Swiper>
            </View>
        );
    }
}

export default Banner
Banner.defaultProps = {
    items: [],
    height: 130,
    showdots: false,

}

const styles = StyleSheet.create({
    wrapper: {},

})