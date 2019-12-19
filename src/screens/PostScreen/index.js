import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {getComments} from '../../services/blogService';
import {FlatList} from 'react-native-gesture-handler';
import styles from './styles';
import {theme} from '../../styles/theme';
import * as Progress from 'react-native-progress';
import {Card} from 'react-native-paper';

export function navigationOptions() {
  return {
    title: 'Post',
  };
}

function PostScreen({navigation}) {
  const post = navigation.getParam('@post');

  useEffect(() => {
    getComments(post.id).then(item =>
      setTimeout(() => setCommentsList(item), 2000),
    );
  }, [post]);

  const [commentsList, setCommentsList] = useState([]);

  const emptyComponent = () => (
    <View style={styles.viewLoader}>
      <Progress.CircleSnail
        size={60}
        indeterminate={true}
        color={theme.colors.accent}
      />
    </View>
  );

  console.log(commentsList.length);

  return (
    <View style={styles.root}>
      <FlatList
        ListHeaderComponent={
          <>
            <Text key="Title" style={styles.textTitle}>
              {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
            </Text>
            <Text key="Author" style={styles.textAuthor}>
              Author: {post.authorName}
            </Text>
            <Text key="Body" style={styles.textBody}>
              {post.body}
            </Text>
            <Text key="Comments" style={styles.textComments}>
              Comments
            </Text>
          </>
        }
        ListEmptyComponent={emptyComponent}
        data={commentsList}
        renderItem={({item}) => (
          <Card>
            <Card.Title
              title={item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              subtitle={item.email}
            />
            <Card.Content>
              <Text>{item.body}</Text>
            </Card.Content>
          </Card>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default PostScreen;
