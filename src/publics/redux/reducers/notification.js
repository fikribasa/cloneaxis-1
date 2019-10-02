const initialState = {
  notification: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
};

const notification = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_NOTIFICATION_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_NOTIFICATION_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_NOTIFICATION_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        notification: action.payload.data.responses,
      };

    default:
      return state;
  }
};

export default notification;
