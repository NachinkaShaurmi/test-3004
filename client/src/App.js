import React, { useState, useEffect, useReducer } from "react";
import Table from "./components/table/Table";
import reducer from "./reducer";
import "./app.scss";
import PageNumber from "./components/pageNumber/PageNumber";
import FilterTable from "./components/filterTable/FilterTable";
import tableDataRequest from "./api/tableDataRequest";
import {
  setDesk,
  setFilterChange,
  setSortedColumnName,
  setFilterColumnName,
  setFilterCondition,
  setFilterValue,
} from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    isDesc: "0",
    isFilter: "0",
    page: 0,
    sortedColumnName: "Name",
    filterColumnName: "",
    filterCondition: "",
    filterValue: "",
  });

  const {
    isFilter,
    isDesc,
    page,
    sortedColumnName,
    filterColumnName,
    filterCondition,
    filterValue,
  } = state;

  const [tableBody, setTableBody] = useState([]);
  const pageAmount = Math.ceil(tableBody.length / 10);

  useEffect(() => {
    tableDataRequest(state, setTableBody);
  }, [isDesc, page, sortedColumnName, isFilter]);

  const handleSorting = (colName) => {
    // const indexOfColumn = tableHead.indexOf(colName);
    if (sortedColumnName !== colName) {
      dispatch(setSortedColumnName(colName));
    } else {
      dispatch(setDesk(isDesc === "0" ? "1" : "0"));
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(setFilterChange("1"));
    tableDataRequest(state, setTableBody);
  };

  const handleFormReset = (event) => {
    event.preventDefault();
    dispatch(setFilterChange("0"));
    dispatch(setFilterColumnName(""));
    dispatch(setFilterCondition(""));
    dispatch(setFilterValue(""));
  };

  return (
    <div className="App">
      <Table tableBody={tableBody} handleSorting={handleSorting} />
      <PageNumber page={page} dispatch={dispatch} pageAmount={pageAmount} />
      <FilterTable
        dispatch={dispatch}
        filterColumnName={filterColumnName}
        filterCondition={filterCondition}
        filterValue={filterValue}
        handleFormSubmit={handleFormSubmit}
        handleFormReset={handleFormReset}
      />
    </div>
  );
}

export default App;
