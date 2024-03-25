import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { SelectList } from "react-native-dropdown-select-list";
import Entypo from 'react-native-vector-icons/Entypo';
import { findCity, findDistrict, findProvince, findVillage, getCityData, getDistrictData, getProvinceData, getVillageData } from "../../../redux/actions/global";
import { Gap, TextInput } from "../..";

const FirstStep = ({ form, setForm }) => {
    const dispatch = useDispatch();
    const [load, setLoad] = useState(false);
    const [data, setData] = useState([]);
    const [dataCity, setDataCity] = useState([]);
    const [dataDistrict, setDataDistrict] = useState([]);
    const [dataVillage, setDataVillage] = useState([]);
    const [province, setProvince] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [village, setVillage] = useState('');

    useEffect(() => {
        dispatch(getProvinceData(setData, setLoad));
        if (form?.province_id) {
            dispatch(findProvince(form?.province_id, setProvince,));
            dispatch(getCityData(form.province_id, setDataCity, setLoad));
        }
        if (form?.city_id) {
            dispatch(findCity(form?.city_id, setCity))
            dispatch(getDistrictData(form.city_id, setDataDistrict, setLoad));
        }
        if (form?.district_id) {
            dispatch(findDistrict(form?.district_id, setDistrict));
            dispatch(getVillageData(form.district_id, setDataVillage, setLoad));
        }
        if (form?.village_id) dispatch(findVillage(form?.village_id, setVillage));
    }, [form?.province_id, form?.city_id, form?.district_id, form?.village_id]);

    useEffect(() => {
        if (province) {
            setForm({ ...form, province_name: province.name });
        }
        if (city) {
            setForm({ ...form, city_name: city.name });
        }
        if (district) {
            setForm({ ...form, district_name: district.name });
        }
        if (village) {
            setForm({ ...form, village_name: village.name });
        }
    }, [province, city, district, village]);


    return (
        <SafeAreaView style={styles?.page}>
            <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
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
                    <Text style={styles.textBlack}>Select Province</Text>
                    <Gap height={10} />
                    <SelectList
                        data={data}
                        labelField="name"

                        setSelected={(value) => {
                            setForm({ ...form, province_id: value, city_id: '', district_id: '', village_id: '' });
                        }}
                        search={true}
                        arrowicon={<Entypo name="chevron-down" size={12} color={'black'} />}
                        searchicon={<Entypo name="magnifying-glass" size={12} color={'black'} />}
                        placeholder={province ? province.name : 'Select Province'}
                        placeholderTextColor="#858585"
                        inputStyles={{
                            color: '#858585'
                        }}
                        dropdownTextStyles={{
                            color: '#000'
                        }}
                        
                    />
                    <Gap height={10} />
                    <Text style={styles.textBlack}>Select City</Text>
                    <Gap height={10} />
                    <SelectList
                        data={dataCity}
                        labelField="name"
                        setSelected={(value) => {
                            setForm({ ...form, city_id: value, district_id: '', village_id: '' });
                        }}
                        search={true}
                        arrowicon={<Entypo name="chevron-down" size={12} color={'black'} />}
                        searchicon={<Entypo name="magnifying-glass" size={12} color={'black'} />}
                        placeholder={city ? city.name : 'Select City'}
                        placeholderTextColor="#000"
                        inputStyles={{
                            color: '#858585'
                        }}
                        dropdownTextStyles={{
                            color: '#000'
                        }}
                    />

                    <Gap height={10} />
                    <Text style={styles.textBlack}>Select District</Text>
                    <Gap height={10} />
                    <SelectList
                        data={dataDistrict}
                        labelField="name"
                        setSelected={(value) => {
                            setForm({ ...form, district_id: value, village_id: '' });
                        }}
                        search={true}
                        arrowicon={<Entypo name="chevron-down" size={12} color={'black'} />}
                        searchicon={<Entypo name="magnifying-glass" size={12} color={'black'} />}
                        placeholder={district ? district.name : 'Select District'}
                        placeholderTextColor="#000"
                        inputStyles={{
                            color: '#858585'
                        }}
                        dropdownTextStyles={{
                            color: '#000'
                        }}
                    />

                    <Gap height={10} />
                    <Text style={styles.textBlack}>Select villages / ward</Text>
                    <Gap height={10} />
                    <SelectList
                        data={dataVillage}
                        labelField="name"
                        setSelected={(value) => {
                            setForm({ ...form, village_id: value });
                        }}
                        search={true}
                        arrowicon={<Entypo name="chevron-down" size={12} color={'black'} />}
                        searchicon={<Entypo name="magnifying-glass" size={12} color={'black'} />}
                        placeholder={village ? village.name : 'Select villages / ward'}
                        placeholderTextColor="#CCCCCC"
                        inputStyles={{
                            color: '#858585'
                        }}
                        dropdownTextStyles={{
                            color: '#000'
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
    textBlack: {
        color: '#4F4F4F',
    },
});