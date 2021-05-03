import React from "react";
import { TABLE_HEAD, CONDITION } from "../../data";
import "./filterTable.scss";

import {
  setFilterColumnName,
  setFilterCondition,
  setFilterValue,
} from "../../actions";

const FilterTable = ({
  dispatch,
  filterColumnName,
  filterCondition,
  filterValue,
  handleFormSubmit,
  handleFormReset, 
}) => {
  const selectOptionCreate = (optionList) => {
    return optionList.map((option) => (
      <option key={Date.now() + option} value={option}>
        {option}
      </option>
    ));
  };

  const handleChangeSelectValue = (value, actionName) => {
    if (value === "title") return;
    dispatch(actionName(value));
  };

  const tableHeadOptionList = selectOptionCreate(TABLE_HEAD);
  const conditionOptionList = selectOptionCreate(CONDITION);

  // const changeFilterColumnName = (value) => {
  //   if (value === "title") return;
  //   dispatch(setFilterColumnName(value));
  //   console.log(value);
  // };

  return (
    <div className="filter">
      <p className="filter__title">Filter table</p>
      <form className="filter__form form">
        <select
          className="form__el"
          onChange={(event) =>
            handleChangeSelectValue(event.target.value, setFilterColumnName)
          }
          value={filterColumnName}
        >
          <option value="title">Column name</option>
          {tableHeadOptionList}
        </select>

        <input
          className="form__el"
          placeholder="Value"
          value={filterValue}
          onChange={(event) => dispatch(setFilterValue(event.target.value))}
        />

        <select
          className="form__el"
          value={filterCondition}
          onChange={(event) =>
            handleChangeSelectValue(event.target.value, setFilterCondition)
          }
        >
          <option value="title">Value condition</option>
          {conditionOptionList}
        </select>
        <button className="form__el form__button form__button_filter" onClick={handleFormSubmit}>
          Filter
        </button>
        <button className="form__el form__button form__button_reset" onClick={handleFormReset}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default FilterTable;
