import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Gap, ItemHome } from '../../components'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.page}>
            <ItemHome />
            <Gap height={20} />
            <View style={styles.container}>
                <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('AddRegistryScreen')}>
                    <Text style={styles.txt}>Add Registry</Text>
                </TouchableOpacity>
                <View style={styles.box}>
                    <Text style={styles.txt}>Data Registry</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    container: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    box: {
        width: wp('42%'),
        height: hp('20%'),
        borderWidth: 2,
        borderColor: '#4CCD99',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
})