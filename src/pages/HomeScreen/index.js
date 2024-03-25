import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Gap, ItemHome } from '../../components'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.page}>
            <ItemHome />
            <Gap height={20} />
            <View style={styles.container}>
                <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('AddRegistryScreen')}>
                    <AntDesign name="adduser" size={24} color="black" />
                    <Gap height={5} />
                    <Text style={styles.txt}>Add Registry</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('DataRegistryScreen')}>
                    <FontAwesome name="address-book" size={24} color="black" />
                    <Gap height={5} />
                    <Text style={styles.txt}>Data Registry</Text>
                </TouchableOpacity>
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
        borderColor: '#666',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
    },
})