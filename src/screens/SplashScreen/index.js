import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import * as Progress from 'react-native-progress';
import {theme} from '../../styles/theme';
import {getPosts} from '../../services/blogService';

function SplashScreen({navigation}) {
  useEffect(() => {
    getPosts()
      .then(navigation.replace('blog'))
      .catch(err => {
        console.log(err);
      });
  }, [navigation]);

  return (
    <View style={styles.root}>
      <Text style={styles.text}>Loading Blog...</Text>
      <Progress.CircleSnail
        size={60}
        indeterminate={true}
        color={theme.colors.accent}
      />
    </View>
  );
}

export default SplashScreen;
