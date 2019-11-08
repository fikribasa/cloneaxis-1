const initialState = {
    recommended : [],
    isLoading : false,
    isRejected : false,
    isFulfilled : false
}

const axispackage = (state = initialState, action) => {
    switch(action.type){
        case 'GET_PACKAGE_CATEGORY_RECOMMENDED_PENDING' :
            return{
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_PACKAGE_CATEGORY_RECOMMENDED_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_PACKAGE_CATEGORY_RECOMMENDED_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                recommended: action.payload.data.response
            }
        
        default : 
            return state
    }
}

export default axispackage