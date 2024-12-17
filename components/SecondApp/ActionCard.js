import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ActionCard = () => {
  function openWebsite(websiteLink) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={style.headerText}>Action Card</Text>
      <View style={style.container}>
        <View style={style.title}>
          <Text>What's new in JS</Text>
        </View>
        <View style={style.imageContainer}>
          <Image
            style={style.image}
            source={{
              uri: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg',
            }}
          />
        </View>
        <View style={style.footerContainer}>
          <Text numberOfLines={2}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum,
            asperiores. Dolorum animi eligendi earum, ex dignissimos odio facere
            perspiciatis aut odit, mollitia officiis repudiandae sunt molestias
            reprehenderit corporis officia distinctio.
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.uicolorpicker.learncodeonline.in/')
            }>
            <Text>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const style = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Shadow for Android
    overflow: 'hidden',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
    color: '#333',
  },
  container: {
    padding: 10,
  },
  titleContainer: {
    marginBottom: 10,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
  },
  imageContainer: {
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  footerContainer: {
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
