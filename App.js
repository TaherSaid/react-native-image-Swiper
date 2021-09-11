import React from 'react';
import { StyleSheet, Image, View, ScrollView, Dimensions } from 'react-native';

const{width} = Dimensions.get("window")
const height = width*100 / 60
const imageTable = [
  'https://images.pexels.com/photos/370471/pexels-photo-370471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/819807/pexels-photo-819807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/3358299/pexels-photo-3358299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/2224399/pexels-photo-2224399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
]
export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView pagingEnabled horizontal style={{width,height}}>
        {
          imageTable.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              style={styles.imageSlider}
            />
          ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  imageSlider: {
    width,
    height,
    resizeMode: 'contain'
  },
  container: {
    marginTop: 50,
    width,
    height
  }
});
