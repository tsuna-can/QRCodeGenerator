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
import {InitialValueProvider} from './contexts/initialValueContext';
import {useTranslation} from 'react-i18next';
import './utils/i18n/config';

export type RootStackParamList = {
  [SCREENS.HOME]: undefined;
  [SCREENS.QR_CODE]: undefined;
  [SCREENS.LIST]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const commonOptions: NativeStackNavigationOptions = {
  title: 'QR Code Generator',
  headerTitleAlign: 'center',
  headerTintColor: COLORS.BLACK,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

function App(): JSX.Element {
  const {t} = useTranslation();

  return (
    <InitialValueProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name={SCREENS.HOME}
            component={HomeScreen}
            options={{...commonOptions, title: `${t('SCREEN_TITLE.HOME')}`}}
          />
          <Stack.Screen
            name={SCREENS.QR_CODE}
            component={QRCodeScreen}
            options={{
              ...commonOptions,
              title: `${t('SCREEN_TITLE.QR_CODE')}`,
            }}
          />
          <Stack.Screen
            name={SCREENS.LIST}
            component={InitialValueListScreen}
            options={{
              ...commonOptions,
              title: `${t('SCREEN_TITLE.LIST')}`,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </InitialValueProvider>
  );
}

export default App;
