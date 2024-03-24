import {NavigationContainer} from '@react-navigation/native';
import React, {useRef} from 'react';
// import store from './redux/store';
import Route from './routes';
import {Provider, useSelector} from 'react-redux';
import store from './redux/store';
import Toast from 'react-native-toast-message';
import {LoadingPrimary} from './components';

const MainApp = () => {
  const {loading} = useSelector(state => state.globalReducer);
  return (
    <NavigationContainer>
      <Route />
      <Toast />
      {loading && <LoadingPrimary />}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}
