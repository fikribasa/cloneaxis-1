const initialState = {
  report: [],

  isLoading: false,
  isRejected: false,
  isFulfilled: false,
};

const report = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_REPORT_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'POST_REPORT_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'POST_REPORT_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        report: action.payload.data.response,
      };
    default:
      return state;
  }
};

export default report;
