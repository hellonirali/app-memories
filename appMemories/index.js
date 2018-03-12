require('ReactFeatureFlags').warnAboutDeprecatedLifecycles = false;

import { AppRegistry } from 'react-native';
import AppContainer from './AppContainer';

console.ignoredYellowBox = ['Warning', 'Native', 'Remote'];

AppRegistry.registerComponent('appMemories', () => AppContainer);
