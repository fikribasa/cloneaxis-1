const initialState = {
    transactions: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false
}

const transactions = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TRANSACTIONS_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_TRANSACTIONS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_TRANSACTIONS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                transactions: action.payload.data.response
            }


        case 'CREATE_TRANSACTION_PENDING':
            return{
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'CREATE_TRANSACTION_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'CREATE_TRANSACTION_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true
            }

        case 'DELETE_TRANSACTION_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'DELETE_TRANSACTION_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'DELETE_TRANSACTION_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true
            }            
        default:
            return state
    }
}

export default transactions