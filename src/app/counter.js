export const SET_INCREAMENT = 'SET_INCREAMENT';
export const SET_DECREMENT = 'SET_DECREMENT';

const initialState = {
    counter: 0,
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_INCREAMENT:
        return {
          ...state,
          counter: state.counter + 1
        };
      case SET_DECREMENT:
        return {
          ...state,
          counter: state.counter - 1
        };
      default:
        return state;
    }
  };
  
  export default counterReducer;