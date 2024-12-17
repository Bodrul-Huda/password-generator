import React from 'react';

import {Text, View} from 'react-native';

import styles from './CardStyle';

const Cards = () => {
  return (
    <View>
      <Text style={styles.cardHeading}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.cardbody, styles.cardTwo]}>
          <Text style={{color: 'white'}}>Blue</Text>
        </View>
        <View style={[styles.cardbody, styles.cardOne]}>
          <Text style={{color: 'white'}}>Red</Text>
        </View>

        <View style={[styles.cardbody, styles.cardThree]}>
          <Text style={{color: 'white'}}>Gray</Text>
        </View>
      </View>
    </View>
  );
};

export default Cards;
