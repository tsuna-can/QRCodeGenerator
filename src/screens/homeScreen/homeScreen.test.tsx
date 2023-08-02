import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from './homeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {SCREENS} from '../../utils/constants';

const Stack = createNativeStackNavigator<RootStackParamList>();

describe('HomeScreen', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
