import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import Button from '../../components/button/button';
import styles from './nextScreen.style';

const NextScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Next Screen</Text>
        <View style={styles.buttonContainer}>
          <Button
            direction="left"
            onClick={() => {
              navigation.navigate('Home');
              console.log('pressed');
            }}
          />
          <Button
            onClick={() => {
              console.log('pressed');
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NextScreen;
