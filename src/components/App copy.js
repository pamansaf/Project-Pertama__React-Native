import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
const App = () => {
  return (
    <View className="w-full min-h-screen flex justify-center items-center bg-teal-100 p-5 ">
      <Text className="text-3xl font-bold text-blue-600 tracking-widest">
        Welcome Back!
      </Text>
      <Text className="font-semibold text-base text-[#ad6e6a] pb-3">
        Project React_Native Pertama
      </Text>
      <Text className="leading-5 text-left">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, sages, and more recently with desktop publishing
        software like Aldus PageMaker including versions of Lorem Ipsum.
      </Text>
      <View className="w-[150] h-[150] mt-5 bg-red-500 rounded-full flex justify-center items-center">
        <Text className="text-white text-3xl">Hello</Text>
      </View>
    </View>
  );
};

export default App;
