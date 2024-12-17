/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
// import Cards from './components/SecondApp/Cards';
// import FancyCards from './components/SecondApp/FancyCard';
// import ActionCard from './components/SecondApp/ActionCard';
import PasswordGen from './components/ThirdApp/PasswordGene';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* -------------- 2nApp (Card view) ---------------------- */}
      {/* <ScrollView>
        <View style={{margin: 10}}>
          <FancyCards />
        </View>
        <View style={{margin: 10}}>
          <ActionCard /> 
        </View>
      </ScrollView> */}

      {/* -------------- 3rd App (Password Generator) ---------------------- */}
      <PasswordGen />
    </SafeAreaView>
  );
};

export default App;
