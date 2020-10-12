import React, {Component, PropTypes} from 'react';
import {
    Text,
    TouchableOpacity,
} from 'react-native';
import Base, {Default, Danger,Link, Info, Success} from './styles';


class Button extends Component {

    getTheme() {
        const {danger,link, info, success} = this.props;
        if (info) {
            return Info;
        }
        if (success) {
            return Success;
        }
        if (danger) {
            return Danger;
        }
        if (link) {
            return Link;
        }


        return Default;
    }

    render() {
        const theme = this.getTheme();
        const {
            children,
            onPress,
            style,
            rounded,
        } = this.props;

        return (
            <TouchableOpacity
                activeOpacity={0.8}
                style={[
                    Base.main,
                    theme.main,
                    rounded ? Base.rounded : null,
                    style,
                ]}
                onPress={onPress}
            >
                <Text style={[Base.label, theme.label]}>{children}</Text>
            </TouchableOpacity>
        );
    }
}

export default Button;