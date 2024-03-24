import { SafeAreaView, StyleSheet, View } from "react-native";
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { Text } from "react-native-svg";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import HeaderPrimary from "../../components/molecules/HeaderPrimary";
import { TextInput } from "../../components";
import SecondStep from "./secondPage";
import FirstStep from "./firstPage";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const AddRegistryScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const {allData} = useSelector((state) => state.globalReducer);
    console.log('allData', allData);
    // local state
    const [formFirstPage, setFormFirstPage] = useState({
        firstName: '',
        lastName: '',
        biodata: '',
        province_id: '',
        district_id: '',
        city_id: '',
        village_id: '',
    })

    const [formSecondPage, setFormSecondPage] = useState({
        test: 'ggfjfjddkgid',
    })

    const onHandleFirstNext = () => {
        // save global state
        dispatch({type: 'SET_ALL_DATA', value: formFirstPage});
    }

    const onHandleSecondNext = () => {
        // merge state 1 & 2
        const newState = { ...formFirstPage, ...formSecondPage };
        dispatch({type: 'SET_ALL_DATA', value: newState});
    }

    return (
        <SafeAreaView style={styles.page}>
            <HeaderPrimary
                title="Registry Vehicle"
                type={'back'}
                onPress={() => navigation.goBack()}
            />
            <ProgressSteps>
                <ProgressStep label="First Step" onNext={() => onHandleFirstNext()} onPrevious={() => console.log('previous')} >
                    <View style={{ alignItems: 'left' }}>
                        <FirstStep form={formFirstPage} setForm={setFormFirstPage} />
                    </View>
                </ProgressStep>
                <ProgressStep label="Second Step" onNext={() => onHandleSecondNext()}>
                    <View style={{ alignItems: 'left' }}>
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
    nextBtnTextStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    }
})