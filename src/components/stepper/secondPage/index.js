
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ImageViewer from 'react-native-image-zoom-viewer';
import { Button, Gap, TextInput } from "../../../components";
import { ImageBackground, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SecondStep = ({form, setForm}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalChoose, setModalChoose] = useState(false);
    const [tipe, setTipe] = useState('');
    const [imageSelfie, setImageSelfie] = useState(null);
    const [imageKTP, setImageKTP] = useState(null);

    const pickImage = async () => {
        launchImageLibrary({
            quality: 0.5,
            mediaType: 'photo',
        }, response => {
            if (response.didCancel || response.error) {
            } else {
                let dataImage = {
                    uri: response.assets[0].uri,
                    type: response.assets[0].type,
                    name: response.assets[0].fileName,
                };
                if (tipe === 'ktp') {
                    setImageKTP(dataImage);
                    setForm({...form, uploadKTP: dataImage});
                    setModalChoose(false);
                } else {
                    setImageSelfie(dataImage);
                    setForm({...form, uploadSelfie: dataImage});
                    setModalChoose(false);
                }

            }
        }
        );
    }

    const takeImage = async () => {
        launchCamera({
            quality: 0.5,
            mediaType: 'photo',
        }, response => {
            if (response.didCancel || response.error) {
            } else {
                let dataImage = {
                    uri: response.assets[0].uri,
                    type: response.assets[0].type,
                    name: response.assets[0].fileName,
                };
                if (tipe === 'ktp') {
                    setImageKTP(dataImage);
                    setForm({...form, uploadKTP: dataImage});
                    setModalChoose(false);
                }  else {
                    setImageSelfie(dataImage);
                    setForm({...form, uploadSelfie: dataImage});
                    setModalChoose(false);
                }

            }
        }
        );
    }

    return (
        <SafeAreaView style={styles?.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: 15 }}>
                    <TextInput
                        lable="No Polisi"
                        placeholder="Masukkan nama depan"
                        keyboardType="default"
                        placeholderTextColor="#CCCCCC"
                        stylesTextInput={{ color: '#858585' }}
                        value={form?.noPolisi}
                        onChangeText={(text) => setForm({ ...form, noPolisi: text })}
                    />
                    <Gap height={10} />
                    <TextInput
                        lable="Nama Pemilik"
                        placeholder="Masukkan nama depan"
                        keyboardType="default"
                        placeholderTextColor="#CCCCCC"
                        stylesTextInput={{ color: '#858585' }}
                        value={form?.namaPemilik}
                        onChangeText={(text) => setForm({ ...form, namaPemilik: text })}
                    />
                    <Gap height={10} />
                    <TextInput
                        lable="No KTP"
                        placeholder="Masukkan nama depan"
                        keyboardType="number"
                        placeholderTextColor="#CCCCCC"
                        stylesTextInput={{ color: '#858585' }}
                        value={form?.noKTP}
                        onChangeText={(text) => setForm({ ...form, noKTP: text })}
                    />
                    <Gap height={10} />
                    <Text style={styles.textBlack}>Upload Selfie</Text>
                    <Gap height={10} />
                    <View style={styles?.center}>
                        <ImageBackground
                            source={{
                                uri: imageSelfie ?
                                    imageSelfie?.uri :
                                    form?.uploadSelfie?.uri,
                            }}
                            style={styles?.imageProfile}
                            imageStyle={{ borderRadius: 20 }}>
                            <TouchableOpacity
                                onPress={() => {
                                    if (imageSelfie?.uri && imageSelfie.uri.length > 0) {
                                        setModalVisible(true);
                                        setTipe('selfie');
                                    } else {
                                        setModalChoose(true);
                                        setTipe('selfie');
                                    }
                                }}
                                style={{
                                    position: 'absolute',
                                    justifyContent: 'center',
                                    top: '50%',
                                    left: '50%',
                                    transform: [{ translateX: -20 }, { translateY: -20 }],
                                    alignItems: 'center',
                                    backgroundColor: '#007B9A',
                                    borderRadius: 100,
                                    padding: 5,
                                }}>
                                {imageSelfie?.uri && imageSelfie.uri.length > 0 || form.uploadSelfie?.uri ?
                                    <MaterialIcons name="visibility" size={20} color="#fff" />
                                    : <MaterialIcons name="photo-camera" size={20} color="#fff" />}
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                    {imageSelfie && imageSelfie.uri.length > 0 || form.uploadSelfie?.uri && (
                        <TouchableOpacity onPress={() => setModalChoose(true)}>
                            <Text style={{ color: '#007B9A', textAlign: 'center' }}>Reupload</Text>
                        </TouchableOpacity>
                    )}

                    <Text style={styles.textBlack}>Upload KTP</Text>
                    <Gap height={10} />
                    <View style={styles?.center}>
                        <ImageBackground
                            source={{
                                uri: imageKTP ?
                                    imageKTP?.uri :
                                    form?.uploadKTP?.uri,
                            }}
                            style={styles?.imageProfile}
                            imageStyle={{ borderRadius: 20 }}>
                            <TouchableOpacity
                                onPress={() => {
                                    if (imageKTP?.uri && imageKTP.uri.length > 0) {
                                        setModalVisible(true);
                                        setTipe('ktp');
                                    } else {
                                        setModalChoose(true);
                                        setTipe('ktp');
                                    }
                                }}
                                style={{
                                    position: 'absolute',
                                    justifyContent: 'center',
                                    top: '50%',
                                    left: '50%',
                                    transform: [{ translateX: -20 }, { translateY: -20 }],
                                    alignItems: 'center',
                                    backgroundColor: '#007B9A',
                                    borderRadius: 100,
                                    padding: 5,
                                }}>
                                {imageKTP?.uri && imageKTP.uri.length > 0 || form.uploadKTP?.uri ?
                                    <MaterialIcons name="visibility" size={20} color="#fff" />
                                    : <MaterialIcons name="photo-camera" size={20} color="#fff" />}
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                    {imageKTP && imageKTP.uri.length > 0 || form.uploadKTP?.uri && (
                        <TouchableOpacity onPress={() => setModalChoose(true)}>
                            <Text style={{ color: '#007B9A', textAlign: 'center' }}>Reupload</Text>
                        </TouchableOpacity>
                    )}

                    <Modal visible={modalVisible} transparent={true}>
                        <ImageViewer
                            imageUrls={[ { url: tipe === 'ktp' ? imageKTP?.uri : imageSelfie?.uri, }, ]}
                            // imageUrls={[{ url: imageSelfie?.uri, },]}
                            enableSwipeDown={true}
                            onSwipeDown={() => setModalVisible(false)}
                        />
                    </Modal>

                    <View style={styles.container}>
                        <Modal visible={modalChoose} transparent={true} animationType="slide">
                            <View style={styles.modalContainer}>
                                <View style={styles.buttonContainer}>
                                    <Text style={styles.textBlack}>Choose Image</Text>
                                    <Gap height={10} />
                                    <View style={styles.buttonPosition}>
                                        {tipe === 'ktp' ? (
                                            <>
                                                <Button title="Take Picture" onPress={takeImage} />
                                                <Button title="Choose from Gallery" onPress={pickImage} />
                                            </>
                                        ) : (
                                            <>
                                                <Button title="Take Picture" onPress={takeImage} />
                                                <Button title="Choose from Gallery" onPress={pickImage} />
                                            </>
                                        )}
                                    </View>
                                    <Gap height={10} />
                                    <TouchableOpacity onPress={() => setModalChoose(false)}>
                                        <Text style={styles.textBlack}>Cancel</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


export default SecondStep;

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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    buttonContainer: {
        backgroundColor: '#ffffff',
        padding: 20,
        height: 200,
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: '80%',
        justifyContent: 'center',
        verticalAlign: 'center',
        alignSelf: 'center',
    },
    buttonPosition: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
       flexWrap: 'wrap',
        width: '100%',
    },
    textBlack: {
        color: '#4F4F4F',
    },
});