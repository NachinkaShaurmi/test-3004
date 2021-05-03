const db = require("../db");

const COLUMN = ["myname", "myamount", "mydistance"];
const CONDITION = [">", "=", "<"];

async function requestDB(text, res) {
  try {
    const data = await db.query(text);
    res.json(data.rows);
  } catch (err) {
    console.log(err);
  }
}

class TestTblController {
  async createData(req, res) {
    const { myname, myamount, mydistance } = req.body;
    const queryText = `INSERT INTO testtbl (myname, myamount, mydistance) values ($1, $2, $3) RETURNING *`;
    try {
      const newData = await db.query(queryText, [myname, myamount, mydistance]);
      res.json(newData.rows[0]);
    } catch (err) {
      console.log(err);
    }
  }

  async getData(req, res) {
    const {
      isFilter,
      isDesc,
      page,
      sortedColumnName,
      filterColumnName,
      filterCondition,
      filterValue,
    } = req.query;

    const sortedColumnNameToDB = COLUMN[parseInt(sortedColumnName, 10)] || "";
    const isDescToDB = isDesc === "0" ? "" : "DESC";
    const filterColumnNameToDB = COLUMN[parseInt(filterColumnName, 10)] || "";
    const filterConditionToDB = CONDITION[parseInt(filterCondition, 10)] || "";
    const value = filterValue || "";
    const pageNumber = page || "0";
    const queryText = `
      SELECT * 
      FROM testtbl
      ${
        isFilter !== "0"
          ? `WHERE ${filterColumnNameToDB} ${filterConditionToDB} '${value}'`
          : ""
      }  
      ORDER BY ${sortedColumnNameToDB} ${isDescToDB} 
      LIMIT 10 
      OFFSET ${parseInt(pageNumber, 10) * 10}`;
    requestDB(queryText, res);
  }
}

module.exports = new TestTblController();
