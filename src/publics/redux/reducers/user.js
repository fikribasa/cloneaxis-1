const initialState = {
  user: [],
  token: '',
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_USER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        users: action.payload.data.response.rows,
      };

    case 'PATCH_USER_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'PATCH_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'PATCH_USER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
      };

    case 'LOGIN_USER_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'LOGIN_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        // status: 400
      };
    case 'LOGIN_USER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        user: action.payload.data.response,
        // status: 200
      };

    case 'SEND_EMAIL_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'SEND_EMAIL_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        // status: 400
      };
    case 'SEND_EMAIL_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        // user: action.payload.data.response
        // status: 200
      };

    case 'SEND_OTP_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'SEND_OTP_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        // status: 400
      };
    case 'SEND_OTP_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        token: action.payload.data.response,
      };

    case 'GET_USER_BY_ID_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_USER_BY_ID_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_USER_BY_ID_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        user: action.payload.data.response,
      };

    default:
      return state;
  }
};

export default user;
