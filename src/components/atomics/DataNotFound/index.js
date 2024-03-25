import LottieView from 'lottie-react-native';
import React, {useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import NotFound from '../../../assets/animations/NotFound.json'

const DataNotFound = ({text, stylesContainer, stylesText}) => {
  const animation = useRef(null);
  return (
    <View style={[styles.container, stylesContainer]}>
      <LottieView
        ref={animation}
        autoPlay
        loop
        source={NotFound}
        style={styles.image}
      />
      <Text style={[styles.text, stylesText]}>{text}</Text>
    </View>
  );
};

export default DataNotFound;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: RFValue(300),
    height: RFValue(300),
  },
  text: {
    color: '#4f4f4f',
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(13),
    textAlign: 'center',
  },
});
