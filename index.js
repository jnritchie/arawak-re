/**
 * @format
 */

import {AppRegistry} from 'react-native';
import TabWrapper from './src/core/TabWrapper';
import {createAppContainer} from 'react-navigation';
const App = createAppContainer(TabWrapper);
console.disableYellowBox = true;
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => App);