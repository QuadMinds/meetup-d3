export const UPDATE_DATA = 'UPDATE_DATA';
export const UPDATE_DATA_REQUEST = 'UPDATE_DATA_REQUEST';
export const UPDATE_DATA_SUCCES = 'UPDATE_DATA_SUCCESS';

export function updateRequest() {
  return { type: UPDATE_DATA };
}

export function data(state = [], action) {
  switch (action.type) {
    case UPDATE_DATA_SUCCES: {
      return action.data;
    }
    default:
      return state;
  }
}
