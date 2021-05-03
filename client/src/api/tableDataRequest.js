import axios from "axios";
import { TABLE_HEAD, CONDITION } from "../data";

const apiUrl = "http://localhost:8080/api";
function tableDataRequest(state, action) {
  const tableHeadIndexToSort = TABLE_HEAD.indexOf(state.sortedColumnName);
  const tableHeadIndexToFilter = TABLE_HEAD.indexOf(state.filterColumnName);
  const tableConditionIndex = CONDITION.indexOf(state.filterCondition);
  axios
    .get(
      `${apiUrl}/data?` +
        `isFilter=${state.isFilter}` +
        `&isDesc=${state.isDesc}` +
        `&page=${state.page}` +
        `&sortedColumnName=${tableHeadIndexToSort}` +
        (state.isFilter === "0"
          ? ""
          : `&filterColumnName=${tableHeadIndexToFilter}` +
            `&filterCondition=${tableConditionIndex}` +
            `&filterValue=${state.filterValue}`)
    )
    .then((res) => {
      const data = res.data;
      action(data);
    })
    .catch((err) => console.log(err));
}

export default tableDataRequest;
