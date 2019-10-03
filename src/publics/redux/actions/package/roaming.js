import axios from 'axios'

export const getPackageAxisPass = () => {
    return {
        type: 'GET_PACKAGE_AXIS_PASS',
        payload: axios.get('https://mobile-provider-clone.herokuapp.com/product/?SubCategoryId=13')
    }
}

export const getPackageInternetMabrur = () => {
    return {
        type: 'GET_PACKAGE_INTERNET_MABRUR',
        payload: axios.get('https://mobile-provider-clone.herokuapp.com/product/?SubCategoryId=14')
    }
}

export const getPackageComboMabrur = () => {
    return {
        type: 'GET_PACKAGE_COMBO_MABRUR',
        payload: axios.get('https://mobile-provider-clone.herokuapp.com/product/?SubCategoryId=15')
    }
}

export const getPackageMabrurNelpDanSms = () => {
    return {
        type: 'GET_PACKAGE_MABRUR_NELP_DAN_SMS',
        payload: axios.get('https://mobile-provider-clone.herokuapp.com/product/?SubCategoryId=16')
    }
}