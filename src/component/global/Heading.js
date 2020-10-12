import React       from 'react';

import GlobalStyle from "../../core/GlobalStyle"

import { View,  Text } from 'react-native'
function Heading({
                     title       = 'Heading ...',
                     style = {}

                  }) {

    return  <View><Text style={[GlobalStyle.titleHeader,style]}>{title}</Text></View>;

}


export default Heading;
