import PropTypes from 'prop-types';
import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewPropTypes,
} from 'react-native';

import ImagePicker from 'react-native-image-picker';
export default class CustomActions extends React.Component {
    onActionsPress = () => {
        const options = {
            maxWidth: 700,
            maxHeight: 700,
            quality: 0.6,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', response);
            const {onSend} = this.props;
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                onSend([{image: response.uri, imgdata: response.data}]);
            }
        });
    };

    renderIcon = () => {
        if (this.props.renderIcon) {
            return this.props.renderIcon();
        }
        return (
            <View style={[styles.wrapper, this.props.wrapperStyle]}>
                <Text style={[styles.iconText, this.props.iconTextStyle]}>+</Text>
            </View>
        );
    };

    render() {
        return (
            <TouchableOpacity
                style={[styles.container, this.props.containerStyle]}
                onPress={this.onActionsPress}>
                {this.renderIcon()}
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 26,
        height: 26,
        marginLeft: 10,
        marginBottom: 10,
    },
    wrapper: {
        borderRadius: 13,
        borderColor: '#b2b2b2',
        borderWidth: 2,
        flex: 1,
    },
    iconText: {
        color: '#b2b2b2',
        fontWeight: 'bold',
        fontSize: 16,
        backgroundColor: 'transparent',
        textAlign: 'center',
    },
});

CustomActions.contextTypes = {
    actionSheet: PropTypes.func,
};

CustomActions.defaultProps = {
    onSend: () => {},
    options: {},
    renderIcon: null,
    containerStyle: {},
    wrapperStyle: {},
    iconTextStyle: {},
};

CustomActions.propTypes = {
    onSend: PropTypes.func,
    options: PropTypes.object,
    renderIcon: PropTypes.func,
    containerStyle: ViewPropTypes.style,
    wrapperStyle: ViewPropTypes.style,
    iconTextStyle: Text.propTypes.style,
};
