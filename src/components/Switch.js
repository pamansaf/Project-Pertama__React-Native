import React, {useState, useEffect} from 'react';
import {View, Text, Switch} from 'react-native';

const App = () => {
  const [lampu, setLampu] = useState(false);

  return (
    <View>
      <Switch value={lampu} onValueChange={() => setLampu(!lampu)} />
    </View>
  );
};

export default App;
