import React from "react";
import {
    Text,
    View,
    Switch,
} from 'react-native'
import CoreEngine from "../../core/CoreEngine";
import Cadre from "../../component/global/Cadre"
import { SettingsScreen, SettingsData } from "react-native-settings-screen"

import Color from "../../core/constant/Color";
import Button from "../../component/global/Button"
import ProfileHeader from "../../component/partial/ProfileHeader"
import Favorites from "./Favorites";

const fontFamily = Platform.OS === 'ios' ? 'Avenir' : 'sans-serif'

const renderProfileImage = () => (
    <ProfileHeader/>
)

class Profile extends CoreEngine {

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
            }}><Text >Settings</Text></View>

        ), headerRight:<Button  >Edit</Button>,
    });


    constructor(props) {
        super(props);
        this.state = {};
    }

    settingsData: SettingsData = [
        { type: 'CUSTOM_VIEW', key: 'hero', render: renderProfileImage },
        {
            type: 'SECTION',
            header: '',
            rows: [
                {
                    title: "Verify profile with facebook",
                    showDisclosureIndicator: true
                },
                {
                    title: 'View public profile ',
                    showDisclosureIndicator: true,
                    onPress:()=> this.goToScreen("Account")
                },

            ],
        },
        {
            type: 'SECTION',
            header: '',
            rows: [
                {
                    title: 'Notifications',
                    renderAccessory: () => <Switch trackColor={{true: Color.main, false: 'grey'}}  value onValueChange={() => {}} />,
                },
                {
                    title: 'Show phone in my postings',
                    renderAccessory: () => <Switch  trackColor={{true: Color.main, false: 'grey'}}  onValueChange={() => {}} />,
                },
                {
                    title: 'Show email in my postings',
                    renderAccessory: () => <Switch trackColor={{true: Color.main, false: 'grey'}}  value onValueChange={() => {}} />,
                },
                {
                    title: 'Show address in my postings',
                    renderAccessory: () => <Switch trackColor={{true: Color.main, false: 'grey'}}  value onValueChange={() => {}} />,
                },
                {
                    title: 'Favorites',
                    showDisclosureIndicator: true,
                    onPress:()=> this.goToScreen("Favorites")
                },

            ],
        },
        {
            type: 'SECTION',
            header: '',
            rows: [
                {
                    title: 'Help',
                    showDisclosureIndicator: true,
                },
                {
                    title: 'Contact us ',
                    showDisclosureIndicator: true,
                },
                {
                    title: 'Privacy policy ',
                    showDisclosureIndicator: true,
                },
                {
                    title: 'Terms of service ',
                    showDisclosureIndicator: true,
                },

            ],
        },
        {
            type: 'SECTION',
            header: '',
            rows: [
                {
                    title: 'Logout',
                    showDisclosureIndicator: true,
                    titleStyle: {
                        color: Color.main,
                    },
                    onPress:()=> this.goToScreen("login")
                },
            ],
        },
        {
            type: 'CUSTOM_VIEW',
            render: () => (
                <Text
                    style={{
                        alignSelf: 'center',
                        fontSize: 18,
                        color: '#999',
                        marginBottom: 40,
                        marginTop: -30,
                        fontFamily,
                    }}
                >
                    v1.2.3
                </Text>
            ),
        },
    ]


    handleClick(item){
        console.warn("handleClick ");
    }

    handleColmn(item) {
        return <Cadre  cadreWidth={200} cadreHeight={210} imageHeight={150}  item={item} onPress={(i) => this.handleClick(i)} onPressatc={(i) => this.handleClickatc(i)}/>
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:"#F7F8FA"}} >

                <SettingsScreen
                    data={this.settingsData}
                    globalTextStyle={{ fontFamily }}
                />
            </View>
        );
    }
}

export default Profile
