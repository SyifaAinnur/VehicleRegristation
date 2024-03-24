import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Gap } from "../../../components";

const FinishStep = ({ form }) => {
    return (
        <SafeAreaView style={styles?.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: 15 }}>
                    <Gap height={10} />
                    <Text>First Name: {form.firstName ?? "-"}</Text>
                    <Gap height={10} />
                    <Text>Last Name: {form.lastName ?? "-"}</Text>
                    <Gap height={10} />
                    <Text>Biodata: {form.biodata ?? "-"}</Text>
                    <Gap height={10} />
                    <Text>Province: {form.province_id ?? "-"}</Text>
                    <Gap height={10} />
                    <Text>City: {form.city_id ?? "-"}</Text>
                    <Gap height={10} />
                    <Text>District: {form.district_id ?? "-"}</Text>
                    <Gap height={10} />
                    <Text>Village: {form.village_id ?? "-"}</Text>
                    <Gap height={10} />
                    <Text>No Polisi: {form.noPolisi ?? "-"}</Text>
                    <Gap height={10} />
                    <Text>Nama Pemilik: {form.namaPemilik ?? "-"}</Text>
                    <Gap height={10} />
                    <Text>No KTP: {form.noKTP ?? "-"}</Text>
                    <Gap height={10} />
                    <Text>Selfie</Text>
                    <ImageBackground
                        source={{
                            uri: form?.uploadSelfie ?
                                form?.uploadSelfie?.uri :
                                'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
                        }}
                        style={styles?.imageProfile}
                        imageStyle={{ borderRadius: 20 }}>
                    </ImageBackground>
                    <Gap height={10} />
                    <Text>KTP</Text>
                    <ImageBackground
                        source={{
                            uri: form?.uploadKTP ?
                                form?.uploadKTP?.uri :
                                'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
                        }}
                        style={styles?.imageProfile}
                        imageStyle={{ borderRadius: 20 }}>
                    </ImageBackground>

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
});
