import Numbers from './components/Numbers';
import { View, Text } from 'react-native';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

const App = () => {

  const [val, setVal] = useState('Hello')

  return (
    <Provider store={store}>
      <View>
        <Text>{val}</Text>
        <Numbers />
      </View>
    </Provider>
  );
};

export default App;
