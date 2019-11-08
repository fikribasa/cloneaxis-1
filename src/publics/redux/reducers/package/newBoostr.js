const initialState = {
    sosmed: [],
    video: [],
    game: [],
    musik: [],
    sunset: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false
}

const newBoostr = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PACKAGE_SOSMED_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_PACKAGE_SOSMED_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_PACKAGE_SOSMED_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                sosmed: action.payload.data.response
            }

        case 'GET_PACKAGE_VIDEO_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_PACKAGE_VIDEO_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_PACKAGE_VIDEO_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                video: action.payload.data.response
            }

        case 'GET_PACKAGE_GAME_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_PACKAGE_GAME_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_PACKAGE_GAME_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                game: action.payload.data.response
            }

        case 'GET_PACKAGE_MUSIK_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_PACKAGE_MUSIK_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_PACKAGE_MUSIK_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                musik: action.payload.data.response
            }

        case 'GET_PACKAGE_SUNSET_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_PACKAGE_SUNSET_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_PACKAGE_SUNSET_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                sunset: action.payload.data.response
            }

        default:
            return state
    }
}

export default newBoostr