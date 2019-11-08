import axios from 'axios'

export const getPackageCategoryRecommended = () => {
    return {
        type : 'GET_PACKAGE_CATEGORY_RECOMMENDED',
        payload : axios.get('https://mobile-provider-clone.herokuapp.com/product/?recommended=true&CategoryId=1')
    }
}