import {
  DESC_CHANGE,
  FILTER_CHANGE,
  SET_PAGE,
  SET_SORTED_COLUMN_NAME,
  SET_FILTER_COLUMN_NAME,
  SET_FILTER_CONDITION,
  SET_FILTER_VALUE,
} from "./reducerTypes"

export const setDesk = (value) => ({
  type: DESC_CHANGE,
  payload: value
});
export const setFilterChange = (value) => ({
  type: FILTER_CHANGE,
  payload: value
});
export const setPage = (value) => ({
  type: SET_PAGE,
  payload: value
});
export const setSortedColumnName = (value) => ({
  type: SET_SORTED_COLUMN_NAME,
  payload: value
});
export const setFilterColumnName = (value) => ({
  type: SET_FILTER_COLUMN_NAME,
  payload: value
});
export const setFilterCondition = (value) => ({
  type: SET_FILTER_CONDITION,
  payload: value
});
export const setFilterValue = (value) => ({
  type: SET_FILTER_VALUE,
  payload: value
});