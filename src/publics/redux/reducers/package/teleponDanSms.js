const initialState = {
    kangen: [],
    curhat: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false
}

const internet = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PACKAGE_KANGEN_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_PACKAGE_KANGEN_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_PACKAGE_KANGEN_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                kangen: action.payload.data.response
            }

        case 'GET_PACKAGE_CURHAT_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_PACKAGE_CURHAT_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_PACKAGE_CURHAT_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                curhat: action.payload.data.response
            }
            
        default:
            return state
    }
}

export default internet