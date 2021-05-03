import {
  DESC_CHANGE,
  FILTER_CHANGE,
  SET_PAGE,
  SET_SORTED_COLUMN_NAME,
  SET_FILTER_COLUMN_NAME,
  SET_FILTER_CONDITION,
  SET_FILTER_VALUE,
} from "./reducerTypes";

const Reducer = (state, action) => {
  switch (action.type) {
    case DESC_CHANGE:
      return {
        ...state,
        isDesc: action.payload,
      };
    case FILTER_CHANGE:
      return {
        ...state,
        isFilter: action.payload,
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case SET_SORTED_COLUMN_NAME:
      return {
        ...state,
        sortedColumnName: action.payload,
      };
    case SET_FILTER_COLUMN_NAME:
      return {
        ...state,
        filterColumnName: action.payload,
      };
    case SET_FILTER_CONDITION:
      return {
        ...state,
        filterCondition: action.payload,
      };
    case SET_FILTER_VALUE:
      return {
        ...state,
        filterValue: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
