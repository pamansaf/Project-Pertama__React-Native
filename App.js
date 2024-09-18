import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from 'react-native';

const App = () => {
  return (
    <View>
      <TouchableOpacity onPress={() => Linking.openURL('https://google.com')}>
        <ImageBackground
          source={require('./src/images/burung1.jpg')}
          className="m-5"
          imageStyle={{borderRadius: 8}}>
          <View className="p-5 rounded-lg">
            <Text className="text-white">Image Background</Text>
            <Text className="text-white">Image Background</Text>
            <Text className="text-white">Image Background</Text>
            <Text className="text-white">Image Background</Text>
            <Text className="text-white">Image Background</Text>
            <Text className="text-white">Image Background</Text>
            <Text className="text-white">Image Background</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default App;
