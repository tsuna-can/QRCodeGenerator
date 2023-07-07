import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import ArrowButton from '../../components/arrowButton/arrowButton';
import styles from './homeScreen.style';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Quick QR Code Generator</Text>
        <View style={styles.buttonContainer}>
          <ArrowButton
            direction="left"
            onClick={() => {
              console.log('pressed');
            }}
          />
          <ArrowButton
            onClick={() => {
              navigation.navigate('Next');
              console.log('pressed');
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
