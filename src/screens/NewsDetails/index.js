import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Like from '../../component/LikeButton';
import Share from '../../component/shareButton';
import Comment from '../../component/comment';

const NewsDetails = () => {
  const route = useRoute();
  const { newsItem } = route.params;

  return (
    <ScrollView>
      <View style={styles.MainContainer}>
        <Image source={{ uri: newsItem.newsImage }} style={styles.newsImage} />

        <View style={styles.LikeandShare}>
          <Like />
          <Share />
          <Comment />

        </View>

        <Text style={styles.titleText}>{newsItem.title}</Text>
        <Text style={styles.contentText}>{newsItem.content}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#000',
  },

  newsImage: {
    height: 250,
    width: 340,
    marginLeft: 10,
    marginRight: 20,
    borderRadius: 10
  },
  titleText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 17,
    marginTop: 19,
    marginBottom: 15,

  },
  contentText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 14,
  },
  LikeandShare: {
    flexDirection: 'row'
  }
});

export default NewsDetails;
