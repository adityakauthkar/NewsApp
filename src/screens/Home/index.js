import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NewsSlider from '../../component/homeCommponent/slider';
import Article from '../../component/homeCommponent/article';
import Bar from '../../component/statusbar';



const Home = () => {
  return (

    <View style={styles.MainContainer}>
      <Bar />
      <NewsSlider />
      <Article />
    </View>
  );
};


const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#000'
  }
})

export default Home;