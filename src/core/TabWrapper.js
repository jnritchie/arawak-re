import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator} from"react-navigation-stack"
import Home from '../screen/tab1/Home'
import Login from "../screen/global/Login"
import Register from "../screen/global/Register"
import ProductDetails from "../screen/tab1/ProductDetails"
import SelectAddress from "../screen/tab3/SelectAddress"
import Message from '../screen/tab2/Message'
import Favorites from '../screen/tab5/Favorites'
import Add from '../screen/tab3/Add'
import Notifications from "../screen/tab4/Notifications"
import Profile from "../screen/tab5/Profile"
import Account from "../screen/tab5/Account"
import NotificationIcon from '../component/global/NotificationIcon'
import Color from './constant/Color'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { View, Text, TouchableWithoutFeedback} from 'react-native';
import Chat from "../screen/tab1/Chat";
import AddDetails from "../screen/tab3/AddDetails";
import Search from "../screen/tab1/Search"



function createBack(navigation){
    return (
        <TouchableWithoutFeedback onPress={() => {
            navigation.goBack()
        }} ><View style={{flexDirection:"row"}}><FontAwesome name={'chevron-left'} size={15} style={{color: "white", margin: 4}} /><Text style={{color:"white",fontSize:16}}>عودة</Text></View></TouchableWithoutFeedback>)

}
function createRight(){
    return (<View style={{height: 50, width: 50}}/>)
}
const HomeTab = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
             header: null,
        },
    },
    search: {screen: Search},
    productFromHome: {screen: ProductDetails,navigationOptions: {
            header: null,
        }},
}, {
    headerMode: 'screen'
});

// hide navigation
HomeTab.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible
    };
};


const NotificationTab = createStackNavigator({
    Home: {screen: Notifications},
}, {
    headerMode: 'screen'
});

const MessageTab = createStackNavigator({
    Messages: {screen: Message},
    chatFromMsg: {screen: Chat},
}, {
    headerMode: 'screen'
});

// hide navigation
MessageTab.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible
    };
};


const AddTab = createStackNavigator({
    add: {
        screen: Add,
        navigationOptions: {
            header: null,
        },
    },

    details: {screen: AddDetails},
    address: {screen: SelectAddress},

}, {
    headerMode: 'screen'
});

AddTab.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
           tabBarVisible = false;
    }

    return {
        tabBarVisible
    };
};



const ProfileTab = createStackNavigator({
    Profile: {screen: Profile},
    Favorites: {screen: Favorites},
    Account: {screen: Account},
    login: {screen: Login},
    register: {screen: Register},

}, {
    headerMode: 'screen'
});




const MainNavigator = createBottomTabNavigator({
    Homes: {
        screen: HomeTab,
        navigationOptions: ({navigation}) => ({
            title: "Home",
            tabBarIcon: ({tintColor}) => <NotificationIcon notifications='0' tintColor={tintColor} iconname="home"/>
        })

    },
    Messages: {
        screen: MessageTab,
        navigationOptions: ({navigation}) => ({
            title: "Messages",
            tabBarIcon: ({tintColor}) => <NotificationIcon notifications='0' tintColor={tintColor} iconname="comment"/>

        })
    },
    Add: {
        screen: AddTab,
        navigationOptions: ({navigation}) => ({
            title: "",
            tabBarIcon: ({tintColor}) => <View
                style={{
                    position: 'absolute',
                    bottom: -15, // space from bottombar
                    height: 58,
                    width: 58,
                    borderRadius: 58,
                    backgroundColor: tintColor,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}><FontAwesome name={"plus"} size={40} style={{color: "white"}}/></View>

        })
    },
    Notification: {
        screen: NotificationTab,
        navigationOptions: ({navigation}) => ({
            title: "Notifications",
            tabBarIcon: ({tintColor}) => <NotificationIcon notifications='0' tintColor={tintColor} iconname="bell"/>

        })
    },
    Profile: {
        screen: ProfileTab,
        navigationOptions: ({navigation}) => ({
            title: "Profiles",
            tabBarIcon: ({tintColor}) => <NotificationIcon notifications='0' tintColor={tintColor} iconname="user"/>

        })
    }
}, {
    tabBarOptions: {
        initialRouteName: 'Messages',
        activeTintColor: Color.tabs.active,
        inactiveTintColor: Color.tabs.inactive,
        showLabel: true,
        showIcon: true,
        alignItems: 'center',
        justifyContent: 'center',
        style: {
            backgroundColor: '#F7F7F7',
        }
    },
    lazyLoad: false,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
    alignItems: 'center',
    justifyContent: 'center'

});


export default MainNavigator;

// https://codeburst.io/ricky-figures-it-out-react-native-drawernavigator-using-react-navigation-599e817cba30