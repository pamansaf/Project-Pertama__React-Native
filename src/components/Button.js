import React, {useState, useEffect} from 'react';
import {View, Button, Alert} from 'react-native';

const App = () => {
  return (
    <View>
      <View className="mx-5 mt-5">
        <Button
          title="Login"
          color={'#212121'}
          onPress={() => Alert.alert('hello semuanya')}
        />
      </View>
    </View>
  );
};

export default App;
