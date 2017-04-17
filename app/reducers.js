import {combineReducers} from 'redux';

const initialView = 'home';
function viewReducer(state = initialView, action) {
  switch (action.type) {
    case 'SWITCH_VIEW':
      return action.view;
    default:
      return state;
  }
}

const initialStream = {
  data: {},
  state: 'paused',
  volume: 100,
};
function streamReducer(state = initialStream, action) {
  console.log(action);
  switch (action.type) {
    case 'SET_STREAM_DATA':
      return {
        ...state,
        data: action.data,
      };

    case 'SET_STREAM_STATE':
      return {
        ...state,
        state: action.state,
      };

    case 'SET_STREAM_VOLUME':
      return {
        ...state,
        volume: action.volume,
      };

    default:
      return state;
  }
}

export default combineReducers({
  view: viewReducer,
  stream: streamReducer,
});
