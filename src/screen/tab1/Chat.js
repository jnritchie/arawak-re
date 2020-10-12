import React from "react";
import {View, StyleSheet,Text} from 'react-native';
import CoreEngine from "../../core/CoreEngine";
import chatmsg from "./chatmsg";
import CustomActions from "./CustomActions"
import {  GiftedChat,Bubble } from 'react-native-gifted-chat'
import Color from "../../core/constant/Color";
class Chat extends CoreEngine {

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
            }}><Text >Chat</Text></View>
        )
    });

    state = {
        messages: [],
        user:{
         _id: 1,
        }
    }


    componentDidMount() {
        this.setState({
            messages: chatmsg,
        })
    }


    onSendFromUser = (messages = []) => {
        const createdAt = new Date()
        const {user} = this.state
        const messagesToUpload = messages.map(message => ({
            ...message,
            user,
            createdAt,
            _id: Math.round(Math.random() * 1000000),
        }))
        this.onSend(messagesToUpload)
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    renderCustomActions = props => <CustomActions {...props} onSend={this.onSendFromUser} />

    renderBubble (props) {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: Color.main
                    }
                }}
            />
        )
    }
    render() {

        const {messages,user} = this.state
        return (
            <View style={{flex:1,backgroundColor:Color.mainliter}}>
            <GiftedChat
                messages={messages}
                onSend={messages => this.onSend(messages)}
                user={user}
                scrollToBottom
                onLongPressAvatar={user => alert(JSON.stringify(user))}
                onPressAvatar={() => alert('short press')}
                keyboardShouldPersistTaps='never'
                renderBubble={this.renderBubble}
                renderActions={this.renderCustomActions}
                inverted={Platform.OS !== 'web'}
            />
            </View>
        );
    }
}

export default Chat

