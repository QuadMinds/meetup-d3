export const SHOW_TOOLTIP = 'SHOW_TOOLTIP';
export const HIDE_TOOLTIP = 'HIDE_TOOLTIP';


// ACt
export function showTooltip(data) {
  return { type: SHOW_TOOLTIP, data };
}

export function hideTooltip() {
  return { type: HIDE_TOOLTIP };
}


// Reducer

export function toggleTooltip(state = { hidden: false, position: { x: '', y: '' } }, action) {
  switch (action) {
    case SHOW_TOOLTIP: {
      return { ...state, hidden: false };
    }
    case HIDE_TOOLTIP: {
      return { ...state, hidden: true };
    }
    default:
      return state;
  }
}
