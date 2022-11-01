import Numbers from './components/Numbers';
import { View,Text } from 'react-native';
import { useState } from 'react';

const App = () => {

  
  const [val, setVal] = useState('Hello')

  return (
    <View>
      <Text>{val}</Text>
      <Numbers/>
    </View>
  );
};

export default App;
