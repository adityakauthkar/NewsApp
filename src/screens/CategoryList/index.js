import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from the API
    fetch('https://newsappbackend1.onrender.com/api/category/getAllCategories')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setCategories(data.data);
        }
      })
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  const renderCategoryItem = ({ item }) => (
    <View style={styles.categoryItem}>
      <Text style={styles.categoryText}>{item.category_name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        
        renderItem={renderCategoryItem}
      
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
  },
  categoryItem: {
    backgroundColor: '#3498db',
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  categoryText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CategoryList;
