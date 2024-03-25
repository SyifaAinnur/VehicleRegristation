import { Modal, SafeAreaView, StyleSheet, View } from "react-native";
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { Text, err } from "react-native-svg";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import HeaderPrimary from "../../components/molecules/HeaderPrimary";
import { Button, TextInput } from "../../components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import FirstStep from "../../components/stepper/firstPage";
import SecondStep from "../../components/stepper/secondPage";
import FinishStep from "../../components/stepper/thirdPage";
import Toast from 'react-native-toast-message';
import { Modalize } from "react-native-modalize";
import { showMessage } from "../../utils";

const AddRegistryScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [error, setError] = useState(false)  
    const { allData } = useSelector((state) => state.globalReducer);
    // local state
    const [formFirstPage, setFormFirstPage] = useState({
        firstName: '',
        lastName: '',
        biodata: '',
        province_id: '',
        province_name: '',
        district_id: '',
        district_name: '',
        city_id: '',
        city_name: '',
        village_id: '',
        village_name: '',
    })

    const [formSecondPage, setFormSecondPage] = useState({
        noPolisi: '',
        namaPemilik: '',
        noKTP: '',
        uploadSelfie: '',
        uploadKTP: '',
    })

    const onHandleFirstNext = () => {
        // save global state
        dispatch({ type: 'SET_ALL_DATA', value: formFirstPage });
        if (formFirstPage.firstName === '' || formFirstPage.lastName === '' || formFirstPage.biodata === '' || formFirstPage.province_id === '' || formFirstPage.city_id === '' || formFirstPage.district_id === '' || formFirstPage.village_id === '') {
            showMessage('Please fill all the form', 'error');
            setError(true)
        } 
        if(formFirstPage?.firstName === ''){
            showMessage('First Name is required', 'error');
            setError(true)
        }
        if(formFirstPage?.lastName === ''){
            showMessage('Last Name is required', 'error');
            setError(true)
        }
        if(formFirstPage?.biodata === ''){
            showMessage('Biodata is required', 'error');
            setError(true)
        }
        if(formFirstPage?.province_id === ''){
            showMessage('Province is required', 'error');
            setError(true)
        }
        if(formFirstPage?.city_id === ''){
            showMessage('City is required', 'error');
            setError(true)
        }
        if(formFirstPage?.district_id === ''){
            showMessage('District is required', 'error');
            setError(true)
        }
        if(formFirstPage?.village_id === ''){
            showMessage('Village is required', 'error');
            setError(true)
        }
        else {
            setError(false)
        }
    }

    const onHandleSecondNext = () => {
        // merge state 1 & 2
        const newState = { ...formFirstPage, ...formSecondPage };
        dispatch({ type: 'SET_ALL_DATA', value: newState });
        if (formSecondPage.noPolisi === '' || formSecondPage.namaPemilik === '' || formSecondPage.noKTP === '' || formSecondPage.uploadSelfie === '' || formSecondPage.uploadKTP === '') {
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: 'Please fill all the form',
            });
            setError(true)
        } else {
            setError(false)
        }
    }

    const onHandleFinish = () => {
        // save global state
        const finalState = { ...allData, ...formSecondPage };
        dispatch({ type: 'SET_ALL_DATA', value: finalState });
        Toast.show({
            type: 'success',
            text1: 'Success',
            text2: 'Data saved successfully',
        });
        navigation.navigate('HomeScreen');
    }

    return (
        <SafeAreaView style={styles.page}>
            <HeaderPrimary
                title="Registry Vehicle"
                type={'back'}
                onPress={() => navigation.goBack()}
            />
            <ProgressSteps>
                <ProgressStep label="Personal Infromation" onNext={() => onHandleFirstNext()} onPrevious={() => console.log('previous')} errors={error}>
                    <View style={{ alignItems: 'left' }}>
                        <FirstStep form={formFirstPage} setForm={setFormFirstPage} />
                    </View>
                </ProgressStep>
                <ProgressStep label="Vehicle Information" onNext={() => onHandleSecondNext()} errors={error}>
                    <View style={{ alignItems: 'left' }}>
                        <SecondStep form={formSecondPage} setForm={setFormSecondPage} />
                    </View>
                </ProgressStep>
                <ProgressStep label="Finish" onSubmit={() => onHandleFinish()}>
                    <View style={{ alignItems: 'left' }}>
                        <FinishStep form={allData} />
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
})