import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StatusBar, Image} from 'react-native';

const negara = [
  'Indonesia',
  'Jepang',
  'Korea',
  'Malaysia',
  'Australia',
  'Cina',
];

const daftarNegara = [
  {
    nama: 'indonesia',
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
  return (
    <View className="flex-1 pt-3 bg-[#181818]">
      <StatusBar barStyle={'light-content'} backgroundColor={'#181818'} />
      <FlatList
        data={negara}
        renderItem={({item}) => (
          <View className="mx-5 my-1">
            <Text className="bg-[#1f1f1f] text-white text-center py-3 rounded-md">
              {item}
            </Text>
          </View>
        )}
      />

      <FlatList
        data={daftarNegara}
        renderItem={({item}) => (
          <View className="flex flex-col justify-center items-center bg-[#1f1f1f] my-3 mx-5 py-5 shadow-xl">
            <Image source={{uri: item.bendera}} className="w-[100] h-[70]" />
            <Text className="text-white pt-3">{item.nama}</Text>
            <Text className="text-white">{item.deskripsi}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default App;
