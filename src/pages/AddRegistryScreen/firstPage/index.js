import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import { Gap, TextInput } from "../../../components"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { getCityData, getDistrictData, getProvinceData, getVillageData } from "../../../redux/actions/global";
import { SelectList } from "react-native-dropdown-select-list";
import Entypo from 'react-native-vector-icons/Entypo';

const FirstStep = () => {
    const dispatch = useDispatch();

    const [load, setLoad] = useState(false);
    const [data, setData] = useState([]);
    const [dataCity, setDataCity] = useState([]);
    const [dataDistrict, setDataDistrict] = useState([]);
    const [dataVillage, setDataVillage] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState({});
    const [selectedCity, setSelectedCity] = useState({});
    const [selectedDistrict, setSelectedDistrict] = useState({});
    const [selectedVillage, setSelectedVillage] = useState({});


    useEffect(() => {
        dispatch(getProvinceData(setData, setLoad));
        dispatch(getCityData(selectedProvince, setDataCity, setLoad));
        dispatch(getDistrictData(selectedCity, setDataDistrict, setLoad));
        dispatch(getVillageData(selectedDistrict, setDataVillage, setLoad));
    }, [selectedProvince, selectedCity, selectedDistrict]);

    const filterData = data.map((item) => {
        return {
            key: item.id,
            value: item.name,
        }
    })

    const filterDataCity = dataCity.map((item) => {
        return {
            key: item.id,
            value: item.name,
        }
    })

    const filterDataDistrict = dataDistrict.map((item) => {
        return {
            key: item.id,
            value: item.name,
        }
    })

    const filterDataVillage = dataVillage.map((item) => {
        return {
            key: item.id,
            value: item.name,
        }
    })



    return (
        <SafeAreaView style={styles?.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: 15 }}>
                    <TextInput
                        lable="First Name"
                        placeholder="Masukkan nama depan"
                        keyboardType="default"
                        placeholderTextColor="#CCCCCC"
                        stylesTextInput={{ color: '#858585' }}
                    // editable={false}
                    />
                    <Gap height={10} />
                    <TextInput
                        lable="Last Name"
                        placeholder="Masukkan nama belakang"
                        keyboardType="default"
                        placeholderTextColor="#CCCCCC"
                        stylesTextInput={{ color: '#858585' }}
                    />
                    <Gap height={10} />
                    <TextInput
                        lable="Biodata"
                        type="textarea"
                        placeholder="Masukkan biodata"
                        keyboardType="default"
                        placeholderTextColor="#CCCCCC"
                        multiline={true}
                        numberOfLines={4}
                        stylesTextInput={{ color: '#858585', textAlignVertical: 'top' }}
                    />
                    <Gap height={10} />
                    <Text>Select Province</Text>
                    <Gap height={10} />
                    <SelectList
                        data={filterData}
                        labelField="name"
                        setSelected={setSelectedProvince}
                        search={true}
                        arrowicon={<Entypo name="chevron-down" size={12} color={'black'} />}
                        searchicon={<Entypo name="magnifying-glass" size={12} color={'black'} />}
                        placeholder="Select Province"
                        placeholderTextColor="#CCCCCC"

                        styles={{
                            container: {
                                borderWidth: 1,
                                borderColor: '#CCCCCC',
                                borderRadius: 5,
                                padding: 10,
                            },
                            text: {
                                color: '#858585',
                            },
                        }}
                    />
                    <Gap height={10} />
                    <Text>Select City</Text>
                    <Gap height={10} />
                    <SelectList
                        data={filterDataCity}
                        labelField="name"
                        setSelected={setSelectedCity}
                        search={true}
                        arrowicon={<Entypo name="chevron-down" size={12} color={'black'} />}
                        searchicon={<Entypo name="magnifying-glass" size={12} color={'black'} />}
                        placeholder="Select City"
                        placeholderTextColor="#CCCCCC"

                        styles={{
                            container: {
                                borderWidth: 1,
                                borderColor: '#CCCCCC',
                                borderRadius: 5,
                                padding: 10,
                            },
                            text: {
                                color: '#858585',
                            },
                        }}
                    />

                    <Gap height={10} />
                    <Text>Select District</Text>
                    <Gap height={10} />
                    <SelectList
                        data={filterDataDistrict}
                        labelField="name"
                        setSelected={setSelectedDistrict}
                        search={true}
                        arrowicon={<Entypo name="chevron-down" size={12} color={'black'} />}
                        searchicon={<Entypo name="magnifying-glass" size={12} color={'black'} />}
                        placeholder="Select City"
                        placeholderTextColor="#CCCCCC"

                        styles={{
                            container: {
                                borderWidth: 1,
                                borderColor: '#CCCCCC',
                                borderRadius: 5,
                                padding: 10,
                            },
                            text: {
                                color: '#858585',
                            },
                        }}
                    />

                    <Gap height={10} />
                    <Text>Select villages / ward</Text>
                    <Gap height={10} />
                    <SelectList
                        data={filterDataVillage}
                        labelField="name"
                        setSelected={setSelectedVillage}
                        search={true}
                        arrowicon={<Entypo name="chevron-down" size={12} color={'black'} />}
                        searchicon={<Entypo name="magnifying-glass" size={12} color={'black'} />}
                        placeholder="Select City"
                        placeholderTextColor="#CCCCCC"

                        styles={{
                            container: {
                                borderWidth: 1,
                                borderColor: '#CCCCCC',
                                borderRadius: 5,
                                padding: 10,
                            },
                            text: {
                                color: '#858585',
                            },
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default FirstStep

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    center: {
        alignItems: 'center',
    },
});