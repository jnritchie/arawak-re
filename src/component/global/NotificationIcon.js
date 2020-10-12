import React from 'react';
import {Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class NotificationIcon extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {notifications = 0,size=23, tintColor, iconname} = this.props;
        // below is an example notification icon absolutely positioned
        return (
            <View style={{
                zIndex: 0,
                flex: 1,
                width: 30,
              // alignSelf: 'stretch',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                <FontAwesome name={iconname} size={size} style={{color: tintColor}}/>
                {notifications > 0 ?
                    <View style={{
                        position: 'absolute',
                        top: 5,
                        left: 0,
                        borderRadius: 50,
                        zIndex: 20,
                        backgroundColor: 'red',
                        width: 17,
                        alignItems: 'center'


                    }}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>{notifications}</Text>
                    </View>
                    : undefined}
            </View>
        );
    }
};

export default NotificationIcon;