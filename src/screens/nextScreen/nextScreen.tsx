import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import ArrowButton from '../../components/arrowButton/arrowButton';
import styles from './nextScreen.style';

const NextScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Next Screen</Text>
        <View style={styles.buttonContainer}>
          <ArrowButton
            direction="left"
            onClick={() => {
              navigation.navigate('Home');
              console.log('pressed');
            }}
          />
          <ArrowButton
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
