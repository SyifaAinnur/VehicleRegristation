import { SafeAreaView, StyleSheet, View } from "react-native"
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { Text } from "react-native-svg";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import HeaderPrimary from "../../components/molecules/HeaderPrimary";
import FirstStep from "./FirstStep";
import { TextInput } from "../../components";
import SecondStep from "./secondPage";

const AddRegistryScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.page}>
            <HeaderPrimary
                title="Registry Vehicle"
                type={'back'}
                onPress={() => navigation.goBack()}
            />
            <ProgressSteps>
                <ProgressStep label="First Step">
                    <View style={{ alignItems: 'left' }}>
                        <FirstStep />
                    </View>
                </ProgressStep>
                <ProgressStep label="Second Step">
                    <View style={{ alignItems: 'center' }}>
                        <SecondStep />
                    </View>
                </ProgressStep>
                <ProgressStep label="Third Step">
                    <View style={{ alignItems: 'center' }}>
                        <Text>This is the content within step 3!</Text>
                    </View>
                </ProgressStep>
            </ProgressSteps>
        </SafeAreaView>
    )
}

export default AddRegistryScreen

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