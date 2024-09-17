import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StatusBar,
  Image,
  Alert,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

const daftarNegara = [
  {
    nama: 'Indonesia',
    deskripsi: 'ini adalah nama negara',
    bendera:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Indonesia_%28physical_version%29.svg/640px-Flag_of_Indonesia_%28physical_version%29.svg.png',
  },
  {
    nama: 'Amerika Serikat',
    deskripsi: 'ini adalah nama negara',
    bendera:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/640px-Flag_of_the_United_States_%28Pantone%29.svg.png',
  },
];

const App = () => {
  function showAlert() {
    // Alert.alert('Update Data Berhasil', 'data berhasil ditambahkan', [
    //   {text: 'batal', onPress: () => console.log('batal diklik')},
    //   {text: 'tidak', onPress: () => console.log('tidak diklik')},
    //   {text: 'ya', onPress: () => console.log('ya diklik')},
    // ]);

    ToastAndroid.show('sesuatu diklik', ToastAndroid.SHORT);
  }
  return (
    <View className="flex-1 pt-3 bg-[#181818]">
      <FlatList
        data={daftarNegara}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => showAlert()}>
            <View className="flex flex-row items-center bg-[#1f1f1f] my-2 mx-5 py-8 px-5 shadow-xl">
              <View className="flex-1">
                <Text className="text-white font-semibold text-lg">
                  {item.nama}
                </Text>
                <Text className="text-white">{item.deskripsi}</Text>
              </View>
              <Image
                source={{uri: item.bendera}}
                className="w-[75] h-[50] rounded-sm"
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default App;
