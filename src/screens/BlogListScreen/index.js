import React, {useState, useCallback} from 'react';
import {Text, RefreshControl} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {TouchableRipple} from 'react-native-paper';
import {connect} from 'react-redux';
import {getPosts} from '../../services/blogService';
import styles from './styles';

export function navigationOptions() {
  return {
    title: 'Blog',
  };
}

const mapStateToProps = state => {
  const {postList} = state;
  return {postList};
};

function BlogListScreen({navigation, postList}) {
  const [refreshing, setRefreshing] = useState(false);

  const emptyComponent = <Text>No item was found</Text>;

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getPosts().then(setRefreshing(false));
  }, []);

  function onTilePress(item) {
    navigation.push('post', {'@post': item});
  }

  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      listEmptyComponent={emptyComponent}
      data={postList}
      renderItem={({item}) => (
        <TouchableRipple
          style={styles.tilePost}
          onPress={() => onTilePress(item)}>
          <>
            <Text style={styles.tileText}>
              {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
            </Text>
            <Text style={styles.tileAuthor}>Author: {item.authorName}</Text>
          </>
        </TouchableRipple>
      )}
      keyExtractor={item => item.id}
    />
  );
}

export default connect(mapStateToProps)(BlogListScreen);
