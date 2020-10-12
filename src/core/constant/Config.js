import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get("window");
const Config = {
    RTL: true,
    Language: 'Arabic', //
    serverlink: 'http://104.248.82.139:3001',
    timeout: 40000,
    Dimension: {
        ScreenWidth(percent = 1) {
            return Dimensions.get('window').width * percent
        },
        ScreenHeight(percent = 1) {
            return Dimensions.get('window').height * percent
        },
    },
    Window: {
        width: width,
        height: height,
        headerHeight: 65 * height / 100,
        headerBannerAndroid: 55 * height / 100,
        profileHeight: 45 * height / 100
    }
};

export default Config;
