import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import styles from './styles';
import * as Progress from 'react-native-progress';
import {theme} from '../../styles/theme';

export function navigationOptions() {
  return {
    header: null,
  };
}

function SplashScreen({navigation}) {
  return (
    <>
      <StatusBar backgroundColor={theme.colors.primary} />
      <View style={styles.root}>
        <Text style={styles.text}>Loading Blog...</Text>
        <Progress.CircleSnail
          size={60}
          indeterminate={true}
          color={theme.colors.accent}
        />
      </View>
    </>
  );
}

export default SplashScreen;
