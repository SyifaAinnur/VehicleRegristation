import React, { useRef } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const LoadingPrimary = ({text}) => {
  const animation = useRef(null);
  return (
    <View style={styles.container}>
      <View style={styles.wpLoading}>
        <ActivityIndicator size="large" color="#FFF" />
      </View>
      {text && (
        <View style={{width: '80%'}}>
          <Text style={styles.text}>{text}</Text>
        </View>
      )}
    </View>
  );
};

export default LoadingPrimary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 221, 179, 0.3)',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
  text: {
    fontSize: RFValue(15),
    fontFamily: 'Poppins-SemiBold',
    color: '#FFF',
    textAlign: 'center',
    marginVertical: 10,
  },
  wpLoading: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: RFValue(50),
    height: RFValue(50),
  },
});
