import { ImageBackground, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Gap } from "../../../components";
import ImageViewer from "react-native-image-zoom-viewer";
import { useState } from "react";

const FinishStep = ({ form }) => {
    const [tipe, setTipe] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={styles?.page}>
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
                            <Text>{form.firstName ?? "-"}</Text>
                            <Gap height={10} />
                            <Text>{form.lastName ?? "-"}</Text>
                            <Gap height={10} />
                            <Text>{form.biodata ?? "-"}</Text>
                            <Gap height={10} />
                            <Text>{form.province_name ?? "-"}</Text>
                            <Gap height={10} />
                            <Text>{form.city_name ?? "-"}</Text>
                            <Gap height={10} />
                            <Text>{form.district_name ?? "-"}</Text>
                            <Gap height={10} />
                            <Text>{form.village_name ?? "-"}</Text>
                            <Gap height={10} />
                            <Text>{form.noPolisi ?? "-"}</Text>
                            <Gap height={10} />
                            <Text>{form.namaPemilik ?? "-"}</Text>
                            <Gap height={10} />
                            <Text>{form.noKTP ?? "-"}</Text>
                        </View>
                    </View>
                    <Text>Selfie</Text>
                    <TouchableOpacity onPress={() => {
                        setTipe('selfie');
                        setModalVisible(true);
                    }}>
                        <ImageBackground
                            source={{
                                uri: form?.uploadSelfie ?
                                    form?.uploadSelfie?.uri :
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
                                uri: form?.uploadKTP ?
                                    form?.uploadKTP?.uri :
                                    'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
                            }}
                            style={styles?.imageProfile}
                            imageStyle={{ borderRadius: 20 }}>
                        </ImageBackground>
                    </TouchableOpacity>

                    <Modal visible={modalVisible} transparent={true}>
                        <ImageViewer
                            imageUrls={[{ url: tipe === 'ktp' ? form?.uploadKTP?.uri : form?.uploadSelfie?.uri, },]}
                            enableSwipeDown={true}
                            onSwipeDown={() => setModalVisible(false)}
                        />
                    </Modal>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default FinishStep;

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
