import { Provider } from 'react-redux';
import { store } from './store';
import AppView from './views/AppView';

const App = () => {
  return (
    <Provider store={store}>
      <AppView />
    </Provider>
  );
};

export default App;