/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import RootNavigation from './src/navigation';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import reduxStore from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
// import EStyleSheet from 'react-native-extended-stylesheet' ; 

export const reduxPersistStore = persistStore(reduxStore);

const App = () => {

  // useEffect (()=>{
  //   EStyleSheet.build();
  // } , []);


  return (
    <Provider store={reduxStore}>
      <PersistGate persistor={reduxPersistStore}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;


