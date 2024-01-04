import React, {useEffect, useState} from 'react';

const getCategoryAPI = () => {
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
    //   console.log(result);

      setNewsData(result);
    } catch (error) {
      console.log('error in fetching news', error);
    }
  };

  useEffect(() => {
    getNewsAPI();
  }, []);

  const [data, setNewsData] = useState([]);
};

export default getCategoryAPI;
