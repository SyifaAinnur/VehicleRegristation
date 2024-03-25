import { ImageBackground, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Gap } from "../../components";
import DataNotFound from "../../components/atomics/DataNotFound";
import HeaderPrimary from "../../components/molecules/HeaderPrimary";

const DataRegistry = ({navigation}) => {
    const [tipe, setTipe] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const {allData} = useSelector((state) => state.globalReducer);
    console.log('allDatas', allData);

    return (
        <SafeAreaView style={styles?.page}>
            <HeaderPrimary
                title="Data Registry"
                type={'back'}
                onPress={() => navigation.goBack()}
            />
            {allData.length > 0 ? (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: 15 }}>
                    <View style={styles?.container}>
                        <View style={styles?.title}>
                            <Text>First Name: </Text>
                            <Gap height={10} />
                            <Text>Last Name: </Text>
                            <Gap height={10} />
                            <Text>Biodata: </Text>
                            <Gap height={10} />
                            <Text>Province: </Text>
                            <Gap height={10} />
                            <Text>City: </Text>
                            <Gap height={10} />
                            <Text>District: </Text>
                            <Gap height={10} />
                            <Text>Village: </Text>
                            <Gap height={10} />
                            <Text>No Polisi: </Text>
                            <Gap height={10} />
                            <Text>Nama Pemilik: </Text>
                            <Gap height={10} />
                            <Text>No KTP: </Text>
                        </View>
                        <View style={styles.value}>
                            <Text>{allData.firstName ?? "-"}</Text>
                            <Gap height={10} />
                            <Text>{allData.lastName ?? "-"}</Text>
                            <Gap height={10} />
                            <Text>{allData.biodata ?? "-"}</Text>
                            <Gap height={10} />
                            <Text>{allData.province_name ?? "-"}</Text>
                            <Gap height={10} />
                            <Text>{allData.city_name ?? "-"}</Text>
                            <Gap height={10} />
                            <Text>{allData.district_name ?? "-"}</Text>
                            <Gap height={10} />
                            <Text>{allData.village_name ?? "-"}</Text>
                            <Gap height={10} />
                            <Text>{allData.noPolisi ?? "-"}</Text>
                            <Gap height={10} />
                            <Text>{allData.namaPemilik ?? "-"}</Text>
                            <Gap height={10} />
                            <Text>{allData.noKTP ?? "-"}</Text>
                        </View>
                    </View>
                    <Text>Selfie</Text>
                    <TouchableOpacity onPress={() => {
                        setTipe('selfie');
                        setModalVisible(true);
                    }}>
                        <ImageBackground
                            source={{
                                uri: allData?.uploadSelfie ?
                                    allData?.uploadSelfie?.uri :
                                    'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
                            }}
                            style={styles?.imageProfile}
                            imageStyle={{ borderRadius: 20 }}>

                        </ImageBackground>
                    </TouchableOpacity>
                    <Gap height={10} />
                    <Text>KTP</Text>
                    <TouchableOpacity onPress={() => {
                        setTipe('ktp');
                        setModalVisible(true);
                    }}>
                        <ImageBackground
                            source={{
                                uri: allData?.uploadKTP ?
                                    allData?.uploadKTP?.uri :
                                    'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
                            }}
                            style={styles?.imageProfile}
                            imageStyle={{ borderRadius: 20 }}>
                        </ImageBackground>
                    </TouchableOpacity>

                    <Modal visible={modalVisible} transparent={true}>
                        <ImageViewer
                            imageUrls={[{ url: tipe === 'ktp' ? allData?.uploadKTP?.uri : allData?.uploadSelfie?.uri, },]}
                            enableSwipeDown={true}
                            onSwipeDown={() => setModalVisible(false)}
                        />
                    </Modal>
                </View>
            </ScrollView>
            ) : (
                <View style={styles.center}>
                   <DataNotFound text={'Tidak ada data'} />
                   <Button title="Add Registry" onPress={() => navigation.navigate('AddRegistryScreen')} />
                </View>
            )}
        </SafeAreaView>
    )
}

export default DataRegistry;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    center: {
        alignItems: 'center',
    },
    imageProfile: {
        width: '100%',
        height: 250,
        objectFit: 'cover',
        borderRadius: 20,
        backgroundColor: '#F2F2F2',
    },
    container: {
        paddingTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
});
