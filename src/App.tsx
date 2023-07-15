import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import HomeScreen from './screens/homeScreen/homeScreen';
import QRCodeScreen from './screens/QRCodeScreen/QRCodeScreen';
import InitialValueListScreen from './screens/initialValueListScreen/initialValueListScreen';
import {SCREENS} from './utils/constants';
import COLORS from './theme/colors';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  Home: {fixedValue: string; variableValue: string; digits: number};
  QRCode: {fixedValue: string; variableValue: string; digits: number};
};
export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;
export type QRCodeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'QRCode'
>;

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
          initialParams={{
            fixedValue: '',
            variableValue: '',
            digits: 1,
          }}
        />
        <Stack.Screen
          name={SCREENS.QR_CODE}
          component={QRCodeScreen}
          options={{
            ...commonOptions,
            title: 'QR Code',
          }}
        />
        <Stack.Screen
          name={SCREENS.LIST}
          component={InitialValueListScreen}
          options={{
            ...commonOptions,
            title: 'Saved initial values',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
