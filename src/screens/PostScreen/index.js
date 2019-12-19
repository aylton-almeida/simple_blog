import React from 'react';
import {Text} from 'react-native';

export function navigationOptions() {
  return {
    title: 'Post',
  };
}

function PostScreen({navigation}) {
  return <Text>Post</Text>;
}

export default PostScreen;
