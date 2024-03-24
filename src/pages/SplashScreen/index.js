import { SafeAreaView, StyleSheet, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const SplashScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({ index: 0, routes: [{ name: 'HomeScreen' }] });
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.page}>
      <LinearGradient
        colors={['#FF9C3E', '#F86F03']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}>
        <Text style={styles.txt}>Vehicle Registration</Text>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    width: wp('100%'),
    height: hp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#03596F',
  },
  LogoBengkel: {
    width: wp('30%'),
    height: hp('15%'),
    resizeMode: 'contain',
    borderRadius: 100,
  },
});
