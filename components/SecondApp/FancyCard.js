import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const FancyCards = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Let's Roam Around</Text>
      <View style={styles.card}>
        {/* Wrapping Image in a View to apply border radius */}
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg',
            }}
          />
        </View>
        <Text style={styles.title}>A Pathway to Peace</Text>
        <Text style={styles.para}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          accusamus fugiat dolorem labore expedita repellat id nisi obcaecati
          quia quod, quibusdam accusantium et iusto atque asperiores dolor, a
          saepe deleniti de.
        </Text>
      </View>
    </View>
  );
};

export default FancyCards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF', // Light background color
    padding: 10,
  },
  card: {
    width: 370,
    borderRadius: 8,
    margin: 12,
    backgroundColor: '#ADD8E6', // Light blue card background
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    padding: 10,
  },
  imageWrapper: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: 'hidden', // Clipping for rounded corners
  },
  image: {
    width: '100%',
    height: 200,
  },
  heading: {
    fontWeight: 'bold', // Correct fontWeight
    fontSize: 20,
    marginVertical: 8,
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#333',
  },
  para: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
    lineHeight: 20,
  },
});
