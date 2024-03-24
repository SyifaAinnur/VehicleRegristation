import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import Entypo from 'react-native-vector-icons/Entypo';


const HeaderPrimary = ({ title, type, onPress }) => {
    if (type === 'back') {
        return (
            <View style={styles.containerDefault}>
                <TouchableOpacity onPress={onPress}>
                    <Entypo name="chevron-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.txtTitle}>{title}</Text>
                <View />
            </View>
        )
    }
}

export default HeaderPrimary;

const styles = StyleSheet.create({
    containerDefault: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        width: '100%',
        height: 60,
    },
    txtTitle: {
        fontSize: RFValue(14),
        fontWeight: 'bold',
        fontFamily: 'Poppins-Medium',
        color: '#000000',
    },
});