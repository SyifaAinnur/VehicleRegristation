import { ImageBackground, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Gap } from "../../components";
import DataNotFound from "../../components/atomics/DataNotFound";
import HeaderPrimary from "../../components/molecules/HeaderPrimary";

const DataRegistry = ({ navigation }) => {
    const [tipe, setTipe] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const { allData } = useSelector((state) => state.globalReducer);
    console.log('allDatas', allData);

    return (
        <SafeAreaView style={styles?.page}>
            <HeaderPrimary
                title="Data Registry"
                type={'back'}
                onPress={() => navigation.goBack()}
            />
            {Object.keys(allData).length !== 0 ? (
                <SafeAreaView style={styles?.page}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ paddingHorizontal: 15 }}>
                            <View style={styles?.container}>
                                <View style={styles?.titleContainer}>
                                    <Text style={styles.title}>First Name: </Text>
                                    <Gap height={10} />
                                    <Text style={styles.title}>Last Name: </Text>
                                    <Gap height={10} />
                                    <Text style={styles.title}>Biodata: </Text>
                                    <Gap height={10} />
                                    <Text style={styles.title}>Province: </Text>
                                    <Gap height={10} />
                                    <Text style={styles.title}>City: </Text>
                                    <Gap height={10} />
                                    <Text style={styles.title}>District: </Text>
                                    <Gap height={10} />
                                    <Text style={styles.title}>Village: </Text>
                                    <Gap height={10} />
                                    <Text style={styles.title}>No Polisi: </Text>
                                    <Gap height={10} />
                                    <Text style={styles.title}>Nama Pemilik: </Text>
                                    <Gap height={10} />
                                    <Text style={styles.title}>No KTP: </Text>
                                </View>
                                <View style={styles.valueContainer}>
                                    <Text style={styles.value}>{allData?.firstName ?? "-"}</Text>
                                    <Gap height={10} />
                                    <Text style={styles.value}>{allData?.lastName ?? "-"}</Text>
                                    <Gap height={10} />
                                    <Text style={styles.value}>{allData?.biodata ?? "-"}</Text>
                                    <Gap height={10} />
                                    <Text style={styles.value}>{allData?.province_name ?? "-"}</Text>
                                    <Gap height={10} />
                                    <Text style={styles.value}>{allData?.city_name ?? "-"}</Text>
                                    <Gap height={10} />
                                    <Text style={styles.value}>{allData?.district_name ?? "-"}</Text>
                                    <Gap height={10} />
                                    <Text style={styles.value}>{allData?.village_name ?? "-"}</Text>
                                    <Gap height={10} />
                                    <Text style={styles.value}>{allData?.noPolisi ?? "-"}</Text>
                                    <Gap height={10} />
                                    <Text style={styles.value}>{allData?.namaPemilik ?? "-"}</Text>
                                    <Gap height={10} />
                                    <Text style={styles.value}>{allData?.noKTP ?? "-"}</Text>
                                </View>
                            </View>
                            <Gap height={10} />
                            <Text style={styles.title}>Selfie</Text>
                            <Gap height={10} />
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
                            <Text style={styles.title}>KTP</Text>
                            <Gap height={10} />
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
                </SafeAreaView>
            ) : (
                <View style={styles.center}>
                    <DataNotFound text={'Tidak ada data'} />
                    <Button title="Add Registry" onPress={() => navigation.navigate('AddRegistryScreen')} />
                </View>
            )}
            <Gap height={20} />
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
        borderColor: '#CCC',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    title: {
        color: '#000',
    },
    value: {
        color: 'rgba(0, 0, 0, 0.5)',
    }
});
