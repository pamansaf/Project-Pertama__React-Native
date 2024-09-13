import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Alert,
  Image,
} from 'react-native';

const App = () => {
  function hello() {
    Alert.alert('Hello semuanya');
  }
  return (
    <View className="w-full min-h-screen bg-[#1f1f1f]">
      <StatusBar barStyle={'light-content'} backgroundColor={'#1f1f1f'} />

      <TouchableOpacity
        onPress={() => hello()}
        // onPressIn={() => hello()}
        // onPressOut={() => hello()}
        className="p-3">
        <Text className="text-2xl text-white bg-blue-600 px-6 py-2 text-center font-semibold rounded-lg">
          Registrasi
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => hello()}
        className="mx-auto border-2 border-white rounded-full">
        <Image
          source={require('./src/images/burung1.jpg')}
          className="w-[200] h-[200] rounded-full"
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => hello()}
        className="items-center bg-blue-500 mt-5 mx-14 px-10 py-2 rounded-xl border-2 border-white">
        <View className="mx-auto border-2 border-white rounded-full">
          <Image
            source={require('./src/images/burung1.jpg')}
            className="w-[200] h-[200] rounded-full"
          />
        </View>
        <Text className="text-white text-xl pt-3">Hello Burung</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
