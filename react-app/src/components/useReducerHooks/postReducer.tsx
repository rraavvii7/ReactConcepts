import { ACTION_TYPES } from "./postActionType";

type InitialState = {
  loading: boolean;
  post: any;
  error: boolean;
};

export const INITIAL_STATE: InitialState = {
  loading: false,
  post: {},
  error: false,
};

type Action = {
  type: string;
  payload?: InitialState;
};

export const postReducer = (
  state: InitialState,
  action: Action
): InitialState => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        post: action.payload,
      };
    case ACTION_TYPES.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        post: {},
      };
    default:
      return state;
  }
};
