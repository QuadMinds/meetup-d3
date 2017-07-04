export const SHOW_TOOLTIP = 'SHOW_TOOLTIP';
export const HIDE_TOOLTIP = 'HIDE_TOOLTIP';

// Actions

export function showTooltip(dot) {
  return { type: SHOW_TOOLTIP, dot };
}

export function hideTooltip() {
  return { type: HIDE_TOOLTIP };
}

// Reducer

const initialState = {
  hidden: true,
  position: { x: 0, y: 0 },
  data: { key: '', value: '' },
};

export function toolTip(state = initialState, action) {
  switch (action.type) {
    case SHOW_TOOLTIP: {
      const ret = {
        ...state,
        hidden: false,
        position: {
          x: action.dot.target.getAttribute('cx'),
          y: action.dot.target.getAttribute('cy'),
        },
        data: {
          key: action.dot.target.getAttribute('data-key'),
          value: action.dot.target.getAttribute('data-value'),
        },
      }
      return ret;
    }
    case HIDE_TOOLTIP: {
      return {
        ...state,
        hidden: true,
        position: state.position,
        data: state.data,
      };
    }
    default:
      return state;
  }
}
