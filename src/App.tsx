import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/homeScreen/homeScreen';
import QRCodeScreen from './screens/QRCodeScreen/QRCodeScreen';
import {SCREENS} from './utils/constants';
import COLORS from './theme/colors';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  QRCode: {fixedValue: string; variableValue: string; digits: number};
};

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name={SCREENS.HOME}
          component={HomeScreen}
          options={{
            title: 'QR Code Generator',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: COLORS.ORANGE,
            },
            headerTintColor: COLORS.WHITE,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name={SCREENS.QR_CODE}
          component={QRCodeScreen}
          options={{
            title: 'QR Code Generator',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: COLORS.ORANGE,
            },
            headerTintColor: COLORS.WHITE,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
