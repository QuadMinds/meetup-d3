export const RESET_DATA = 'RESET_DATA';

export function resetRequest() {
  return { type: RESET_DATA };
}

export function data(state = [], action) {
  switch (action.type) {
    case RESET_DATA: {
      return state;
    }
    default:
      return state;
  }
}
