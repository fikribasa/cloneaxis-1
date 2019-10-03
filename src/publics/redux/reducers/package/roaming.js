const initialState = {
    axispass: [],
    internetmabrur: [],
    combomabrur: [],
    mabrurnelpdansms: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false
}

const roaming = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PACKAGE_AXIS_PASS_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_PACKAGE_AXIS_PASS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_PACKAGE_AXIS_PASS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                axispass: action.payload.data.response
            }

        case 'GET_PACKAGE_INTERNET_MABRUR_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_PACKAGE_INTERNET_MABRUR_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_PACKAGE_INTERNET_MABRUR_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                internetmabrur: action.payload.data.response
            }

        case 'GET_PACKAGE_COMBO_MABRUR_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_PACKAGE_COMBO_MABRUR_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_PACKAGE_COMBO_MABRUR_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                combomabrur: action.payload.data.response
            }

        case 'GET_PACKAGE_MABRUR_NELP_DAN_SMS_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_PACKAGE_MABRUR_NELP_DAN_SMS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_PACKAGE_MABRUR_NELP_DAN_SMS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                mabrurnelpdansms: action.payload.data.response
            }
            
        default:
            return state
    }
}

export default roaming