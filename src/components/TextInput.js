import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ScrollView>
      <View className="w-full min-h-screen pt-28 bg-blue-100">
        <StatusBar backgroundColor={'#dbeafe'} barStyle={'dark-content'} />
        <View className="flex mb-10 items-center border-2 border-sky-500 rounded-full mx-auto">
          <Image
            source={require('./src/images/login.png')}
            className="w-[180] h-[180] rounded-full border-red-200"
          />
        </View>
        <Text className="text-4xl text-center font-bold text-sky-600 mb-5">
          Login
        </Text>
        <Text className="text-center">
          Silahkan masukkan email dan password
        </Text>
        <View className="flex flex-col gap-3 mx-5 mt-1">
          <TextInput
            value={email}
            className="bg-white rounded-lg px-3 shadow-2xl"
            placeholder="masukkan email"
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            value={password}
            className="bg-white rounded-lg px-3 shadow-2xl"
            placeholder="masukkan password"
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />
          <TouchableOpacity className="bg-sky-500  rounded-lg shadow-lg">
            <Text className="text-white font-bold text-center py-3 text-xl">
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default App;
