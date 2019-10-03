import axios from 'axios'

export const getPackageKangen = () => {
    return {
        type: 'GET_PACKAGE_KANGEN',
        payload: axios.get('https://mobile-provider-clone.herokuapp.com/product/?SubCategoryId=11')
    }
}

export const getPackageCurhat = () => {
    return {
        type: 'GET_PACKAGE_CURHAT',
        payload: axios.get('https://mobile-provider-clone.herokuapp.com/product/?SubCategoryId=12')
    }
}