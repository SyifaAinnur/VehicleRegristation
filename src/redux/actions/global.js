import axios from "axios";


export const getProvinceData = (setData, setLoad) => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json');
          
            if (response) {
                setData(response.data);
                setLoad(false);
            }
        } catch (err) {
            console.log(err);
        }
    }
}

export const getCityData = (id, setDataCity, setLoad) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${id}.json`);
          
            if (response) {
                setDataCity(response.data);
                setLoad(false);
                
            }
        } catch (err) {
            console.log(err);
        }
    }
}

export const getDistrictData = (id, setDataDistrict, setLoad) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${id}.json`);
          
            if (response) {
                setDataDistrict(response.data);
                setLoad(false);
            }
        } catch (err) {
            console.log(err);
        }
    }
}

export const getVillageData = (id, setDataVillage, setLoad) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${id}.json`);
          
            if (response) {
                setDataVillage(response.data);
                setLoad(false);
            }
        } catch (err) {
            console.log(err);
        }
    }
}


export const findProvince = (id, setProvince) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://emsifa.github.io/api-wilayah-indonesia/api/province/${id}.json`);

            if (response) {
                setProvince(response.data);
            }
        } catch (err) {
            console.log(err);
        }
    }
}

export const findCity = (id, setCity) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://emsifa.github.io/api-wilayah-indonesia/api/regency/${id}.json`);

            if (response) {
                setCity(response.data);
            }
        } catch (err) {
            console.log(err);
        }
    }
}

export const findDistrict = (id, setDistrict) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://emsifa.github.io/api-wilayah-indonesia/api/district/${id}.json`);

            if (response) {
                setDistrict(response.data);
            }
        } catch (err) {
            console.log(err);
        }
    }
}

export const findVillage = (id, setVillage) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://emsifa.github.io/api-wilayah-indonesia/api/village/${id}.json`);

            if (response) {
                setVillage(response.data);
            }
        } catch (err) {
            console.log(err);
        }
    }
}
