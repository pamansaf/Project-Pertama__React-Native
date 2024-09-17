import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';

let saldo = 100000;

const App = () => {
  const [saldoSaya, setSaldoSaya] = useState(500000);
  function hitungDiskon() {
    saldo = saldo - 10000;
    Alert.alert('saldo saya ' + saldo);
  }
  return (
    <View>
      <Text>{saldoSaya}</Text>
      <TouchableOpacity onPress={() => setSaldoSaya(500)}>
        <Text>Hitung Diskon</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
