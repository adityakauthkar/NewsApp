/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NewsDetails from '../../screens/NewsDetails';
import CategoryList from '../../screens/CategoryList';
import Icon from 'react-native-vector-icons/dist/Ionicons';


const Article = () => {
  const navigation = useNavigation();
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
  //END OF FETCHING 


  return (
    <View style={styles.mainContainer}>

      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.trending}>TRENDINGS</Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('CategoryList')}>
          <Icon name="chevron-forward-circle-sharp" size={30} color="#fff" />
        </TouchableOpacity>
      </View>



      {data.length ? (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.container}
              onPress={() => navigation.navigate('NewsDetails',{newsItem:item})}>
              {/* <Text>{item.title}</Text> */}
              {/* <Text>{item.category}</Text> */}
              <Image source={{ uri: item.newsImage }} style={styles.newsImage} />

              <View>
                <Text
                  style={styles.title}
                  numberOfLines={3}
                  ellipsizeMode="tail">
                  {item.title}...
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    paddingBottom: 10,
  },
  container: {
    borderColor: '#fff',
    borderWidth: 1,
    // backgroundColor:'#BeBeBe' ,
    width: '90%',
    height: 'auto',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1

  },

  newsImage: {
    width: 100,
    height: 100,
  },

  title: {
    color: '#fff',
    width: '27%',
    fontSize: 16,
    fontWeight: '700',
    padding: 10,
  },

  trending: {
    color: 'white',
    paddingLeft: 15,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15
  },
  buttonContainer: {
    // padding: 10,
    // color:'white',
    // borderColor:'white'
    marginLeft: 200,
    marginTop: 13
  },
});

export default Article;

//style={{backgroundColor:'#BeBeBe' , width:'90%' , height:70,alignSelf:'center' , marginTop:20}}
