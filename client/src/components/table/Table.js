import React from "react";
import { TABLE_HEAD } from "../../data";
import "./table.scss";

const Table = ({ tableBody, handleSorting }) => {
  const tableHeadFromProps = TABLE_HEAD.map((el) => {
    return (
      <th key={Date.now() + el} className="table__head-el">
        <button onClick={() => handleSorting(el)} className="table__button">
          {el}
        </button>
      </th>
    );
  });

  const tableBodyFromProps = tableBody.map((el) => {
    const localDate = new Date(el.mydate).toLocaleTimeString("ru-RU");
    return (
      <tr key={el.id}>
        <td>{localDate}</td>
        <td>{el.myname}</td>
        <td>{el.myamount}</td>
        <td>{el.mydistance}</td>
      </tr>
    );
  });

  return (
    <table className="table">
      <caption className="table__caption">Test table</caption>
      <thead className="table__head">
        <tr>
          <th className="table__head-el">Date</th>
          {tableHeadFromProps}
        </tr>
      </thead>
      <tbody>{tableBodyFromProps}</tbody>
    </table>
  );
};

export default Table;
