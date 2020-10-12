import React from "react";
import {StyleSheet, Text, TouchableOpacity, ScrollView, View, TouchableWithoutFeedback} from 'react-native';
import Cadre from "./Cadre";
import Heading from "./Heading"
import GlobalStyle from "../../core/GlobalStyle";
import Color from "../../core/constant/Color";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class Cadres extends React.PureComponent {

    handleClick(item) {
        this.props.onPress(item);
    }
    handleClickatc(item) {
        this.props.onPressatc(item);
    }

    gotoCategories(item) {
        //console.warn(item)
        this.props.gotoCategories(item);
    }

    render() {
        const {items,cadreWidth,cadreHeight,imageHeight,showviewalllink,title,showViewAll,radius} = this.props;
        return <View>
            <View style={{
                flexDirection: 'row',
                justifyContent: "space-between",
                marginBottom:3
            }}>
                {showViewAll && <TouchableWithoutFeedback onPress={(items) => this.gotoCategories(items)}>
                    <View>
                        {showviewalllink && <Text style={GlobalStyle.titleLink}>
                            <FontAwesome name="caret-left" size={15} />view all</Text> }
                    </View>
                </TouchableWithoutFeedback>}
                <Heading title={title} style={{margin:10,textAlign:"left"}} />
            </View>
            <ScrollView ref={ref => (this.scrollView = ref)} //onContentSizeChange={() => {this.scrollView.scrollToEnd({animated: false})}}
                showsHorizontalScrollIndicator={false} horizontal>
                {items && items.map((item, index) =>
                    <TouchableOpacity key={item.id}  activeOpacity={0.9} onPress={() => this.handleClick()}>
                        <Cadre  cadreWidth={cadreWidth} radius={radius} cadreHeight={cadreHeight} imageHeight={imageHeight}  item={item} onPress={(i) => this.handleClick(i)} onPressatc={(i) => this.handleClickatc(i)}/>
                    </TouchableOpacity>
                )}

            </ScrollView></View>;
    }
}

export default Cadres


Cadres.defaultProps = {
    items: [],
    type: 1,
    title:"Title",
    showviewalllink:true
}
const styles = StyleSheet.create({

    titleLink: {
        color: Color.TabActive,
        fontSize: 13,
        textAlign: 'right',
        margin: 5
    },
    textView: {
        textAlignVertical: 'center',
        padding: 5,
        color: '#000',
        fontSize: 13,

        textAlign: "right"
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})