import axios from 'axios'

export const getPackageBronet = () => {
    return {
        type: 'GET_PACKAGE_BRONET',
        payload: axios.get('https://mobile-provider-clone.herokuapp.com/product/?SubCategoryId=2')
    }
}

export const getPackageOwsem = () => {
    return {
        type: 'GET_PACKAGE_OWSEM',
        payload: axios.get('https://mobile-provider-clone.herokuapp.com/product/?SubCategoryId=3')
    }
}

export const getPackageObor = () => {
    return {
        type: 'GET_PACKAGE_OBOR',
        payload: axios.get('https://mobile-provider-clone.herokuapp.com/product/?SubCategoryId=4')
    }
}

export const getPackageRabuRawit = () => {
    return {
        type: 'GET_PACKAGE_RABU_RAWIT',
        payload: axios.get('https://mobile-provider-clone.herokuapp.com/product/?SubCategoryId=5')
    }
}