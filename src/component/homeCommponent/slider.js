// Import necessary modules
import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';


const NewsSlider = () => {

  const getNewsAPI = async () => {
    const authToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODZjZDJmMGEzYzcwNGE0MDA1ZDAxYSIsImlhdCI6MTcwMzc2OTkxNCwiZXhwIjoxNzA2MzYxOTE0fQ.-ljwL-2zw93jG5th1e9cSepmt16hykA_U9QPbcLRQw8';
    try {
      const url = 'https://newsappbackend1.onrender.com/api/news/getAllNews';
      let result = await fetch(url, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!result.ok) {
        throw new Error(`HTTP error! Status: ${result.status}`);
      }

      result = await result.json();
      // console.log(result);

      setNewsData(result);
    } catch (error) {
      console.log('error in fetching news', error);
    }
  };

  useEffect(() => {
    getNewsAPI();
  }, []);

  const [data, setNewsData] = useState([]);
//END OF FETCHING NEWSAPI 


const images = data.map((item) => item.newsImage);
const title = data.map((item) => item.title);



  return (
    <View>
      <SliderBox
     
        images={images}
        dotColor="red"
        autoplay={false}
        autoplayInterval={2000}
        circleLoop={false}
        paginationBoxVerticalPadding={20}
        borderRadius={10}
        marginLeft={7}
        marginRight={7}
        marginTop={4}
      
      />
    
    </View>
  );
};



export default NewsSlider;
