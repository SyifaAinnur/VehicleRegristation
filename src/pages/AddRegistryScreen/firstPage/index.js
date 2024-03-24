import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import { Gap, TextInput } from "../../../components"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { getCityData, getDistrictData, getProvinceData, getVillageData } from "../../../redux/actions/global";
import { SelectList } from "react-native-dropdown-select-list";
import Entypo from 'react-native-vector-icons/Entypo';

const FirstStep = ({ form, setForm }) => {
    console.log(form)
    const dispatch = useDispatch();

    const [load, setLoad] = useState(false);
    const [data, setData] = useState([]);
    const [dataCity, setDataCity] = useState([]);
    const [dataDistrict, setDataDistrict] = useState([]);
    const [dataVillage, setDataVillage] = useState([]);

    useEffect(() => {
        dispatch(getProvinceData(setData, setLoad));
        // if (form?.province_id) {
        //     dispatch(getCityData(form?.province_id, setDataCity, setLoad));
        // }
        // if (form?.city_id) {
        //     dispatch(getDistrictData(form?.city_id, setDataDistrict, setLoad));
        // }
        // if (form?.district_id) {
        //     dispatch(getVillageData(form?.district_id, setDataVillage, setLoad));
        // }
    }, []);

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
                        value={form?.firstName}
                        onChangeText={(text) => setForm({ ...form, firstName: text })}
                    />
                    <Gap height={10} />
                    <TextInput
                        lable="Last Name"
                        placeholder="Masukkan nama belakang"
                        keyboardType="default"
                        placeholderTextColor="#CCCCCC"
                        stylesTextInput={{ color: '#858585' }}
                        value={form?.lastName}
                        onChangeText={(text) => setForm({ ...form, lastName: text })}
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
                        value={form?.biodata}
                        onChangeText={(text) => setForm({ ...form, biodata: text })}
                    />
                    <Gap height={10} />
                    <Text>Select Province</Text>
                    <Gap height={10} />
                    <SelectList
                        data={data}
                        labelField="name"
                        setSelected={(value) => {
                            setForm({ ...form, province_id: value, city_id: '', district_id: '', village_id: '' });
                            dispatch(getCityData(value, setDataCity, setLoad));
                        }}
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
                        data={dataCity}
                        labelField="name"
                        setSelected={(value) => {
                            setForm({ ...form, city_id: value, district_id: '', village_id: '' });
                            dispatch(getDistrictData(value, setDataDistrict, setLoad));
                        }}
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
                        data={dataDistrict}
                        labelField="name"
                        setSelected={(value) => {
                            setForm({ ...form, district_id: value, village_id: '' });
                            dispatch(getVillageData(value, setDataVillage, setLoad));
                        }}
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
                        data={dataVillage}
                        labelField="name"
                        setSelected={(value) => {
                            setForm({ ...form, village_id: value});
                        }}
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