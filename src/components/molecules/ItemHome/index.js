import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import LinearGradient from 'react-native-linear-gradient'

const ItemHome = () => {
    return (
        // <View style={styles.card}>
        <LinearGradient
            colors={['#FF9C3E', '#F86F03']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0 }}
            style={styles.card}>
            <View>
                <Text style={styles.text}>Selamat Datang</Text>
                <Text style={[styles.text, { fontSize: RFValue(12) }]}>Click your menu</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={{ uri: 'https://www.uhs-group.com/wp-content/uploads/2020/08/person-dummy-e1553259379744.jpg' }} style={styles.image} />
            </View>
        </LinearGradient>
        // </View>

    )
}

export default ItemHome

const styles = StyleSheet.create({
    card: {
        width: wp('92%'),
        height: hp('20%'),
        backgroundColor: '#fff',
        borderRadius: 15,
        marginHorizontal: RFValue(15),
        marginTop: RFValue(25),
        padding: RFValue(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: RFValue(18),
        fontFamily: 'Poppins-Regular',
        fontWeight: 'bold',
        color: '#FFF',
    },
    image: {
        width: wp('20%'),
        height: wp('20%'),
        borderRadius: RFValue(100),
        resizeMode: 'cover',
        borderWidth: 1,
        borderColor: '#666',
    }
})