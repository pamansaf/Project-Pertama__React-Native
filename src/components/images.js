import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
const App = () => {
  return (
    <View className="w-full min-h-screen bg-[#1f1f1f]">
      <StatusBar barStyle={'light-content'} backgroundColor={'#181818'} />
      <View className="bg-[#181818] p-5">
        <Text className="text-white font-bold text-xl text-center">
          Aplikasi Pertama
        </Text>
      </View>
      <View className="flex justify-center items-center pt-3  ">
        <Image
          source={require('./src/images/burung1.jpg')}
          className="w-[200] h-[200] rounded-full"
        />
      </View>
      <View className="flex justify-center items-center pt-3">
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1601544829024-bc7f4c2213c5?q=80&w=1371&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          className="w-[300] h-[400]"
        />
      </View>
    </View>
  );
};

export default App;
