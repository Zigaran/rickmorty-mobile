// ACTIONS IMPORTS
import { clearData } from './querys';

// CONSTS
let CHARACTERS_STATUS_MENU = 'CHARACTERS_STATUS_MENU';
let LOCATIONS_STATUS_MENU = 'LOCATIONS_STATUS_MENU';
let EPISODES_STATUS_MENU = 'EPISODES_STATUS_MENU';
let SWITCH_FILTER = 'SWITCH_FILTER';

export interface FilterInitialState {
  charsMenuItem: boolean;
  locationsMenuItem: boolean;
  episodesMenuItem: boolean;
  byName: boolean;
}

let initialData = {
  charsMenuItem: true,
  locationsMenuItem: false,
  episodesMenuItem: false,
  byName: true,
};

// REDUCERS
export default function reducer(state = initialData, action: any) {
  switch (action.type) {
    case CHARACTERS_STATUS_MENU:
      return {
        ...state,
        charsMenuItem: true,
        locationsMenuItem: false,
        episodesMenuItem: false,
      };
    case LOCATIONS_STATUS_MENU:
      return {
        ...state,
        charsMenuItem: false,
        locationsMenuItem: true,
        episodesMenuItem: false,
      };
    case EPISODES_STATUS_MENU:
      return {
        ...state,
        charsMenuItem: false,
        locationsMenuItem: false,
        episodesMenuItem: true,
      };
    case SWITCH_FILTER:
      return { ...state, byName: action.payload };
    default:
      return state;
  }
}

export let charFilterActive = () => (dispatch: any, getState: any) => {
  clearData()(dispatch, getState);

  dispatch({
    type: CHARACTERS_STATUS_MENU,
  });
};

export let locationsFilterActive = () => (dispatch: any, getState: any) => {
  clearData()(dispatch, getState);

  dispatch({
    type: LOCATIONS_STATUS_MENU,
  });
};

export let episodesFilterActive = () => (dispatch: any, getState: any) => {
  clearData()(dispatch, getState);

  dispatch({
    type: EPISODES_STATUS_MENU,
  });
};

export let changeFilter = () => (dispatch: any, getState: any) => {
  let { byName } = getState().filter;
  dispatch({
    type: SWITCH_FILTER,
    payload: !byName,
  });
};
