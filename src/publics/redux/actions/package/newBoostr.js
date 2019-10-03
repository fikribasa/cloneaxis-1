import axios from 'axios'

export const getPackageSosmed = () => {
    return {
        type: 'GET_PACKAGE_SOSMED',
        payload: axios.get('https://mobile-provider-clone.herokuapp.com/product/?SubCategoryId=6')
    }
}

export const getPackageVideo = () => {
    return {
        type: 'GET_PACKAGE_VIDEO',
        payload: axios.get('https://mobile-provider-clone.herokuapp.com/product/?SubCategoryId=7')
    }
}

export const getPackageGame = () => {
    return {
        type: 'GET_PACKAGE_GAME',
        payload: axios.get('https://mobile-provider-clone.herokuapp.com/product/?SubCategoryId=8')
    }
}

export const getPackageMusik = () => {
    return {
        type: 'GET_PACKAGE_MUSIK',
        payload: axios.get('https://mobile-provider-clone.herokuapp.com/product/?SubCategoryId=9')
    }
}

export const getPackageSunset = () => {
    return {
        type: 'GET_PACKAGE_SUNSET',
        payload: axios.get('https://mobile-provider-clone.herokuapp.com/product/?SubCategoryId=10')
    }
}