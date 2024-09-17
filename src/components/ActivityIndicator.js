import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, TouchableOpacity, Text} from 'react-native';

const App = () => {
  const [loading, setLoading] = useState(false);
  return (
    <View>
      <ActivityIndicator size={'large'} color={'red'} animating={loading} />
      <TouchableOpacity onPress={() => setLoading(!loading)}>
        <Text>Toggle</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
