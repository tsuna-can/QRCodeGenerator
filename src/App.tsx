import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import HomeScreen from './screens/homeScreen/homeScreen';
import QRCodeScreen from './screens/QRCodeScreen/QRCodeScreen';
import {SCREENS} from './utils/constants';
import COLORS from './theme/colors';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  QRCode: {fixedValue: string; variableValue: string; digits: number};
};

const commonOptions: NativeStackNavigationOptions = {
  title: 'QR Code Generator',
  headerTitleAlign: 'center',
  headerTintColor: COLORS.BLACK,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name={SCREENS.HOME}
          component={HomeScreen}
          options={{...commonOptions, title: 'QR Code Generator'}}
        />
        <Stack.Screen
          name={SCREENS.QR_CODE}
          component={QRCodeScreen}
          options={{
            ...commonOptions,
            title: 'QR Code',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
