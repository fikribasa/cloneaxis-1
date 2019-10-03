const initialState = {
    bronet: [],
    owsem: [],
    obor: [],
    raburawit: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false
}

const internet = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PACKAGE_BRONET_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_PACKAGE_BRONET_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_PACKAGE_BRONET_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                bronet: action.payload.data.response
            }

        case 'GET_PACKAGE_OWSEM_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_PACKAGE_OWSEM_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_PACKAGE_OWSEM_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                owsem: action.payload.data.response
            }

        case 'GET_PACKAGE_OBOR_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_PACKAGE_OBOR_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_PACKAGE_OBOR_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                obor: action.payload.data.response
            }

        case 'GET_PACKAGE_RABU_RAWIT_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_PACKAGE_RABU_RAWIT_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_PACKAGE_RABU_RAWIT_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                raburawit: action.payload.data.response
            }

        default:
            return state
    }
}

export default internet