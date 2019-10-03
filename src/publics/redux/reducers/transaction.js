const initialState = {
  transaction: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
};

const transaction = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TRANSACTION_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_TRANSACTION_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_TRANSACTION_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        transaction: action.payload.data.response.rows,
      };

    default:
      return state;
  }
};

export default transaction;
