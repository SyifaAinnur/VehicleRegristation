import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import HeaderPrimary from "../../../components/molecules/HeaderPrimary";
import { Gap, TextInput } from "../../../components";

const SecondStep = () => {
    return (
        <SafeAreaView style={styles?.page}>
            <HeaderPrimary
                title="Document Vehicle Register"
                type={'back'}
                onPress={() => navigation.goBack()}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: 15 }}>
                    <TextInput
                        lable="No Polisi"
                        placeholder="Masukkan nama depan"
                        keyboardType="default"
                        placeholderTextColor="#CCCCCC"
                        stylesTextInput={{ color: '#858585' }}
                    />
                    <Gap height={10} />
                    <TextInput
                        lable="Nama Pemilik"
                        placeholder="Masukkan nama depan"
                        keyboardType="default"
                        placeholderTextColor="#CCCCCC"
                        stylesTextInput={{ color: '#858585' }}
                    />
                    <Gap height={10} />
                    
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
});